import Title from "../components/Title";
// import Notification from "../components/Notification";
import { Link } from "react-router-dom";
import { managerLogin } from "../hooks/useLogin";
import { AiOutlineUser } from "react-icons/ai";

const Login = (props) => {
  const { dispatch } = props;
  const { login, msg, handleLogin, handleChange } = managerLogin(dispatch);

  return (
    <>
      {/* {msg && (
        <Notification
          msg={msg}
          styles_text={!msg.value ? "msg-error" : "msg-success"}
          styles_icon={!msg.value ? "icon-error" : "icon-success"}
        />
      )} */}
      <div className="main-container-login">
        <div className="login-box">
          <div className="container-login-left">
            <div className="main-ref-register">
              <Link to="/signUp">
                <button className="link-signup">Sign Up</button>
              </Link>
              <p> Not a member?</p>
            </div>
            <div className="header-login">
              <div className="header-title">
                <AiOutlineUser className="icon-login" />
                <Title data="Log In" styles={`${"title-form-login"}`} />
              </div>
              <div className="main-form">
                <form className="form-login" onSubmit={handleLogin}>
                  <div className="containers-labels-inputs">
                    <div className="container-label-email">
                      <label className="label-login">Email address</label>
                      {msg?.response === "User not found" && (
                        <span className="msg-alert">Email invalid</span>
                      )}
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter email"
                        onChange={(ev) => handleChange(ev)}
                        value={login.email}
                        // required
                      />
                    </div>
                    <div className="container-label-password">
                      <label className="label-login">Password</label>
                      {msg?.response === "Invalid passwod" && (
                        <span className="msg-alert">Invalid password</span>
                      )}
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        onChange={(ev) => handleChange(ev)}
                        value={login.password}
                        // required
                      />
                    </div>
                    <div className="container-btn-login">
                      <button type="submit" className="btn-login-send">
                        Submit
                      </button>
                      {/* <p>
                        Dont have an account?
                        <Link to="/signUp" className="link-reg">
                          Register
                        </Link>
                      </p> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* ----------------------right */}
          <div className="right">
            <div className="right-text">
              <h2>Join our student registration system!</h2>
            </div>
            <div className="right-inductor"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
