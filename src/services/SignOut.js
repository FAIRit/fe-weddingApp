import React from 'react';
import { withFirebase } from '../components/Firebase';
import exit from '../images/exit.png'

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="signOutButton">
    <img src={exit} alt="exit" className="signOut" />
  </button>
);

export default withFirebase(SignOutButton);