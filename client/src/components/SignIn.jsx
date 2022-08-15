import Title from "./Title";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { managerLogin } from "../hooks/useLogin";
import { AiOutlineUser } from "react-icons/ai";

const Login = () => {
  const { login, msg, handleSubmit, handleChange } = managerLogin();

  return (
    <>
      {msg && (
        <Notification
          msg={msg}
          styles_text={!msg.value ?"msg-error": "msg-success"}
          styles_icon={!msg.value ?"icon-error": "icon-success"}
        />
      )}
      <div className="main-container-login">
        <div className="container-login">
          <div className="header-login">
            <AiOutlineUser className="icon-login" />
            <Title data="Log In" styles={`${"title-form-login"}`} />
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
                value={login.email}
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
                value={login.password}
                // required
              />
            </div>
            <div className="container-btn-login">
              <button type="submit" className="btn-login-send">
                Submit
              </button>
              <p>
                Dont have an account?
                <Link to="/signUp" className="link-reg">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
