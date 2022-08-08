import React from 'react';
import Title from './Title';
import { managerDataLogin } from '../hooks/useLogin';

const Login = () => {

    const { dataLogin, handleSubmit, handleChange } = managerDataLogin();
    return (
      <div className="main-container-login">
        <div className="container-login">
          <div className="header-login">
            <Title data="Register" styles={`${"title-form-login"}`} />
          </div>
          <form className="form-login" onSubmit={handleSubmit}>
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
                placeholder="Password"
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
                Dont have an account?{" "}
                <a href="/register" className="link-reg">
                  {/* Register */}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;
