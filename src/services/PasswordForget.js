import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../components/Firebase';
const PasswordForgetPage = () => (
  <div className="forgotPassword">
    <PasswordForgetForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        Zapomniałeś hasła? Nic się nie martw! Podaj nam swojego maila do logowania, zajmiemy się resztą.
        <input
        className="reset"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="grazyna@gmail.com"
        />
        <button disabled={isInvalid} type="submit" className="resetButton" >
          Resetuj
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const PasswordForgetLink = () => (
  <p>
    <Link to="/PasswordForget">Forgot Password?</Link>
  </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };