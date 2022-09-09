import React from 'react';
import { Link } from 'react-router-dom';
import NotAuthNavbar from './NologgedUser';
import { ImUsers } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ( props ) => {

  const { handleActionsMenu, name_user } = props;

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
            <div className="container-profile-info">
              {/* <MdOutlineLightMode className='icon-dark'/> */}
              <div className="title-login">
                <span className='text-user'>
                  Hi, {`${name_user !== '' && name_user}`}
                </span>
              </div>
              <ImUsers className="icon-user" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;
