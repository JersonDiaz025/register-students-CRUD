import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Title from './Title';

const Navbar = () => {
    return (
      <nav className="sidebar">
        <nav className="sidebar-container">
          <div className="sidebar-logo-container">
            <Title
              data={"Student Registration"}
              stylesTitle={`${"title-nav"}`}
            />
            <hr />
            <img
              src="../src/assets/students-icon.png"
              alt="image-home"
              className="image-nav"
            />
          </div>
          <div className="sidebar-container">
            <div className="sidebar-items">
              <Link to="/" className="links">
                {/* <img src='../src/assets/icons/home.svg'/> */}
                <span>Home</span>
              </Link>
              <Link to="/students" className="links">
                <span>All students</span>
              </Link>
              <Link to="/register" className="links">
                Register student
              </Link>
              <Link to="/contact" className="links">
                Contact
              </Link>
            </div>
            <div className="sidebar-footer">
              <span className="sidebar-item-label">Logout</span>
              <img
                src="../src/assets/icons/logout.svg"
                alt="icon-logout"
                className="sidebar-item-icon"
              />
            </div>
          </div>
        </nav>
      </nav>
    );
}

export default Navbar;
