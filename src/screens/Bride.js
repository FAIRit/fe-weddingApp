import React from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../components/Firebase';
import { withAuthorization } from '../components/Session';
import * as ROLES from '../constants/roles';


function Bride() {
  return (
        <div>
          Bride
      </div>
  )
}

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.BRIDE];
export default compose(
  withAuthorization(condition),
  withFirebase,
)(Bride);
