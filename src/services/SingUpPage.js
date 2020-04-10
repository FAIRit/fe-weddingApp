import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../components/Firebase';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
  class SignUpFormBase extends Component  {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, passwordOne, username } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


    return (
      <form onSubmit={this.onSubmit}>
                  <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Imię i nazwisko"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Hasło"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Powtórz hasło"
        />
              <button disabled={isInvalid} type="submit">
          Zarejestruj
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignUpLink = () => (
  <p>
    Nie masz jeszcze konta? <Link to="/SignUp">Zarejestruj się!</Link>
  </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
export default SignUpPage;
export { SignUpForm, SignUpLink };