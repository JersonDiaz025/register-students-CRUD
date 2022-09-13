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
import { logOutUser } from "../hooks/useLogout";

const Sidebar = (props) => {
  const { store, dispatch } = props;
  const { sidebar } = store;
  const { openSidebar } = sidebar;

  const { handlelogOut } = logOutUser(dispatch);

  return (
    <div className="sidebar">
      <nav className="sidebar-container">
        <div className="container-close-nav">
          <IoClose
            className="icon-close"
            onClick={() => {
              dispatch({ type: "ACTION_SIDEBAR" });
            }}
          />
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
            <Link
              to="/"
              className="links"
              onClick={() => {
                dispatch({ type: "ACTION_SIDEBAR" });
              }}
            >
              <AiFillHome className="icons-nav" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/students"
              className="links"
              onClick={() => {
                dispatch({ type: "ACTION_SIDEBAR" });
              }}
            >
              <HiUserGroup className="icons-nav" />
              <span>All students</span>
            </Link>
            <Link
              to="/register"
              className="links"
              onClick={() => {
                dispatch({ type: "ACTION_SIDEBAR" });
              }}
            >
              <GiArchiveRegister className="icons-nav" />
              Add student
            </Link>
            <Link
              to="/about"
              className="links"
              onClick={() => {
                dispatch({ type: "ACTION_SIDEBAR" });
              }}
            >
              <BsInfoCircle className="icons-nav" />
              About
            </Link>
          </div>
          <div className="sidebar-footer"
            onClick={() => { dispatch({ type: "ACTION_SIDEBAR" }) }}>
            <p className="links">Log-Out</p>
            <FiLogOut className="icon-logOut" onClick={handlelogOut} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
