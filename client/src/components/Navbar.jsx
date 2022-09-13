import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import PopupUser from './PopupUser';
import { logOutUser } from '../hooks/useLogout';
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiArchiveRegister } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";

const Navbar = (props) => {

  const { store, dispatch } = props;
  const { navbar, user, dark_mode } = store;
  const { activeDarkMode } = dark_mode;
  const { name_user } = user;
  const { openModalUser } = navbar;

  const { handlelogOut } = logOutUser(dispatch);

  return (
    <div className="container-nav-header">
      <div className="content">
        <div className="container-action">
          <AiOutlineMenu
            className="btn-close-header"
            onClick={() => {
              dispatch({ type: "ACTION_SIDEBAR" });
            }}
          />
        </div>
        <div className="container-links-nav">
          <div className="sub-container-navbs">
            <Link to="/" className="links-navbar">
              {/* <AiFillHome className="icons-nav" /> */}
              <span>Dashboard</span>
              <div className="line-span"></div>
            </Link>
            <Link to="/students" className="links-navbar">
              {/* <HiUserGroup className="icons-nav" /> */}
              <span>All students</span>
              <div className="line-span"></div>
            </Link>
            <Link to="/register" className="links-navbar">
              {/* <GiArchiveRegister className="icons-nav" /> */}
              <span>Add student</span>
              <div className="line-span"></div>
            </Link>
            <Link to="/about" className="links-navbar">
              {/* <BsInfoCircle className="icons-nav" /> */}
              <span>About</span>
              <div className="line-span"></div>
            </Link>
          </div>
        </div>
        <div
          className="container-profile-info"
          onClick={() => {
            dispatch({ type: "ACTION_NAVBAR" });
          }}
        >
          <div className="title-login">
            <span className="text-user">
              {`${name_user !== "" && name_user}`}
            </span>
            <FaUserCircle className="icon-user" />
            {openModalUser && (
              <PopupUser
                handlelogOut={handlelogOut}
                activeDarkMode={activeDarkMode}
                dispatch={dispatch}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
