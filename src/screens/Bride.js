import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { withFirebase } from '../components/Firebase';
import { AuthUserContext, withAuthorization } from '../components/Session';


function Bride() {
const [loading, setloading] = useState(false);
const [users, setusers] = useState([]);

useEffect(() => {
  setloading(true);
  firebase.users().on('value', snapshot => {
    const usersObject = snapshot.val();
    const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
    setusers(usersList)
    setloading(false)
  });
}, [users])

    return (
        <AuthUserContext.Consumer>
    {authUser => (
      <div>
        {loading && <div>Loading ...</div>}
          Bride
      </div>
    )}
  </AuthUserContext.Consumer>
    )}

const condition = authUser => authUser && authUser.role === 'BRIDE';

export default withFirebase(withAuthorization(condition)(Bride));
