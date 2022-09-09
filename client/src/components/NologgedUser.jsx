import React from "react";
import { Navigate, Outlet, Link, useNavigate } from "react-router-dom";

const NotAuthNavbar = () => {
    const navigate = useNavigate()
  
    return (
      <section>
        <div>
          <Link to="/signUp" className="sign-btn">
            SignUp
          </Link>
          <Link to="/signIn" className="sign-btn">
            SignIn
          </Link>
          <Outlet />
        </div>
  
      </section>
    );
};
export default NotAuthNavbar;
