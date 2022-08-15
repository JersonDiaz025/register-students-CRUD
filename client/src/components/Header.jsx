import React from 'react';
import { Link } from 'react-router-dom';
import { ImUsers } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai"

const Header = ( props ) => {

  const { handleActionsMenu, user, isLoggedIn } = props;

    return (
      <div className="container-nav-header">
        <div className="content">
          <div className="container-action">
            <AiOutlineMenu
              className="btn-close-header"
              onClick={handleActionsMenu}
            />
          </div>
          <div className="content-login">
            {!isLoggedIn ? (
              <>
                {/* <Link to="/signUp" className="sign-btn">
                  SignUp
                </Link> */}
                <Link to="/signIn" className="sign-btn">
                  SignIn
                </Link>
              </>
            ) : (
              <div className="container-profile-info">
                <em className="title-login">
                  <span>Hi,</span> {`${user?.username}`}
                </em>
                <ImUsers className="icon-user" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Header;
