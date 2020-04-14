import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../components/Firebase';
import * as ROLES from '../constants/roles';
import styles from './SignUpPage.module.css';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isBride: false,
  isGroom: false,
  error: null,
};
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { username, email, passwordOne, isBride, isGroom } = this.state;
    const roles = {};
    if (isBride) {
      roles[ROLES.BRIDE] = ROLES.BRIDE;
    } else if (isGroom) {
      roles[ROLES.GROOM] = ROLES.GROOM
    }
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles
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
  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
    console.log('bride')
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
        <p className={styles.title}>Rejestracja</p>
        <input
        className={styles.input}
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Imię i nazwisko"
        />
        <input
        className={styles.input}
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <input
        className={styles.input}
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Hasło"
        />
        <input
        className={styles.input}
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Powtórz hasło"
        />
        <button disabled={isInvalid} type="submit" className={styles.submit}>
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