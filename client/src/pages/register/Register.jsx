import React from 'react';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import { managerDataRegister } from "../../hooks/useRegister";
import { FaUserAlt } from 'react-icons/fa';

const Register = (props) => {

  const { dispatch } = props;

  const { dataLogin, handleSignUp, handleChange } = managerDataRegister(dispatch);
  return (
    <div className="main-container-register">
      <div className="register-content">
        <div className="container-register-left">
          <div className="left-content-register">
            <Link to="/signIn">
              <button className="link-signup">Sign In</button>
            </Link>
            <p> Already a member?</p>
          </div>
          <div className="all-content-register">
            <div className="header-title">
              <FaUserAlt className="icon-register" />
              <Title data="Register" styles={`${"title-register"}`} />
            </div>
            <div className="main-form">
              <form className="form-register" onSubmit={handleSignUp}>
                <div className="containers-labels-inputs">
                  <div className="container-label-email">
                    <label className="label">Username</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Enter username"
                      onChange={(ev) => handleChange(ev)}
                      value={dataLogin.username}
                      required
                    />
                  </div>
                  <div className="container-label-email">
                    <label className="label">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter email"
                      onChange={(ev) => handleChange(ev)}
                      value={dataLogin.email}
                      required
                    />
                  </div>
                  <div className="container-label-password">
                    <label className="label">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      onChange={(ev) => handleChange(ev)}
                      value={dataLogin.password}
                      required
                    />
                  </div>
                  <div className="container-btn-login">
                    <button type="submit" className="btn-login-send">
                      SIGN-UP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* -------------------right */}
        <div className="right">
          <div className="right-text">
            <h2>Join our student registration system!</h2>
          </div>
          <div className="right-inductor"></div>
        </div>
      </div>
    </div>
  );
}


export default Register;
