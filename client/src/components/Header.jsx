import React from 'react';
import { Link } from 'react-router-dom';

const Header = ( props ) => {

  const { handleActionsMenu, user, logged } = props;
  console.log(user)
    return (
      <div className="container-nav-header">
        <div className="content">
          <div className="container-action">
            <button className="btn-close-header" onClick={handleActionsMenu}>
              <img src="../src/assets/icons/icon-close.svg" />
            </button>
          </div>
          <div className="content-login">
            {!logged ? (
              <>
                <Link to="/signUp" className="sign-btn">
                  SignUp
                </Link>
                <Link to="/signIn" className="sign-btn">
                  SignIn
                </Link>
              </>
            ) : (
              <>
                  <h3 className="title-login">Hi, {`${user.username}`}</h3>
                  <img src="../src/assets/icons/icon-user.svg" />
              </>
            )}
          </div>
        </div>
        {/* <Navbar/> */}
      </div>
    );
}

export default Header;
