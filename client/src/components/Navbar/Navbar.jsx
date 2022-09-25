import "./index.css";
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { logOutUser } from '../../hooks/useLogout';
import { linskNavbar } from "../../Routes-config/links";
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiArchiveRegister } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";
import PopupUser from "../PopupProfile/PopupUser";

const Navbar = (props) => {

  const { store, dispatch } = props;
  const { navbar, user, dark_mode } = store;
  const { activeDarkMode } = dark_mode;
  const { name_user } = user;
  const { openModalUser } = navbar;

  const { links_navbar } = linskNavbar();
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
          {links_navbar?.map(
            ({ to, className, text, icon: Image, classIcon }) => (
              <Link to={to} className="links-navbar" key={text.length}>
                <Image className={classIcon} />
                <span>{text}</span>
                <div className="line-span"></div>
              </Link>
            )
          )}
        </div>
        <div
          className="container-profile-info"
          onClick={() => {
            dispatch({ type: "ACTION_NAVBAR" });
          }}
        >
          <div className="title-login">
            {/* <span className="text-user">
              {`${name_user !== "" && name_user}`}
            </span> */}
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
