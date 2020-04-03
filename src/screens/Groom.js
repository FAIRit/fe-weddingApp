import React from 'react';
import { AuthUserContext, withAuthorization } from '../components/Session';

function Groom() {
    return (
        <AuthUserContext.Consumer>
    {authUser => (
      <div>
          Groom
      </div>
    )}
  </AuthUserContext.Consumer>
    )}

const condition = authUser => authUser && authUser.role === 'GROOM';

export default withAuthorization(condition)(Groom)
