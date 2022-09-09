import React from 'react';
import Title from '../components/Title';
import Notification from '../components/Notification';
import { Link } from 'react-router-dom';
import { managerDataRegister } from '../hooks/useRegister';
import { FaUserAlt } from 'react-icons/fa';
const Register = () => {
    const { dataLogin, msgRegister, handleSubmit, handleChange } = managerDataRegister();
  return (
    <>
      {msgRegister && (
        <Notification
          msg={msgRegister}
          styles_text={!msgRegister.value? "msg-error": "msg-success"}
          styles_icon={!msgRegister.value? "icon-error": "icon-success"}
        />
      )}
      <div className="main-container-login">
        <div className="container-login">
          <div className="header-login">
            <FaUserAlt className="icon-register" />
            <Title data="Register" styles={`${"title-form-login"}`} />
          </div>
          <form className="form-login" onSubmit={handleSubmit}>
            <div className="container-label-login">
              <label className="label-login">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={(ev) => handleChange(ev)}
                value={dataLogin.username}
                // required
              />
            </div>
            <div className="container-label-login">
              <label className="label-login">Email address</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                onChange={(ev) => handleChange(ev)}
                value={dataLogin.email}
                // required
              />
            </div>
            <div className="container-label">
              <label className="label-login">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={(ev) => handleChange(ev)}
                value={dataLogin.password}
                // required
              />
            </div>
            <div className="container-btn-login">
              <button type="submit" className="btn-login-send">
                Submit
              </button>
              <p>
                You have an account?
                <Link to="/signIn" className="link-reg">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default Register;
