import React from 'react';
import Login from './SignIn';
import Register from './Register';

const FatherComponent = ({ getUserToken }) => {
    return (
      <div>
            <Login getUserToken={getUserToken}/>
      </div>
    );
};

export default FatherComponent;
