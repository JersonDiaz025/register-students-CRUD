import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Title from './Title';
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiArchiveRegister } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { logOutUser } from '../hooks/useLogout'

const Sidebar = (props) => {
  const { handleActionsMenu, dispatch } = props;
  const { handlelogOut } = logOutUser(dispatch);

  return (
    <div className="sidebar">
      <nav className="sidebar-container">
        <div className="container-close-nav">
          <IoClose className="icon-close" onClick={handleActionsMenu} />
        </div>

        <div className="sidebar-logo-container">
          <Title data={"Student Registration"} stylesTitle={`${"title-nav"}`} />
          <img
            src="../src/assets/students-icon.png"
            alt="image-home"
            className="image-nav"
          />
        </div>
        <div className="sidebar-container">
          <div className="sidebar-items">
            <Link to="/" className="links">
              <AiFillHome className="icons-nav" />
              <span>Home</span>
              <span className="span-select"></span>
            </Link>
            <Link to="/students" className="links">
              <HiUserGroup className="icons-nav" />
              <span>All students</span>
            </Link>
            <Link to="/register" className="links">
              <GiArchiveRegister className="icons-nav" />
              Add student
            </Link>
            <Link to="/about" className="links">
              <BsInfoCircle className="icons-nav" />
              About
            </Link>
            {/* <Link to="/login">Login</Link> */}
            {/* <Link to="/signUp" className="links">
              <FaRegUser className="icons-nav" />
              Sign-Up
            </Link> */}
          </div>
          <div className="sidebar-footer">
            {/* <span className="sidebar-item-label">Logout</span> */}
            <p className="links">Log-Out</p>
            <FiLogOut className="icon-logOut" onClick={handlelogOut} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
