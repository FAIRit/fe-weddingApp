import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { compose } from 'recompose';
import { withFirebase } from '../components/Firebase';
import { AuthUserContext, withAuthorization } from '../components/Session';
import * as ROLES from '../constants/roles';


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
        <div>
          {loading && <div>Loading ...</div>}
          Bride
          <p>
            The Admin Page is accessible by every signed in admin user.
        </p>
        </div>
    </AuthUserContext.Consumer>
  )
}

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.BRIDE];
export default compose(
  withAuthorization(condition),
  withFirebase,
)(Bride);
