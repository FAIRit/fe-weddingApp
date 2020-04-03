import React from 'react';
import { AuthUserContext, withAuthorization } from '../components/Session';

function Bride() {
    return (
        <AuthUserContext.Consumer>
    {authUser => (
      <div>
          Bride
      </div>
    )}
  </AuthUserContext.Consumer>
    )}

const condition = authUser => authUser && authUser.role === 'BRIDE';

export default withAuthorization(condition)(Bride)
