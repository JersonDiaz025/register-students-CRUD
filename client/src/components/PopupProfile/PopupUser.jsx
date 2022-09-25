import "./index.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import {BiEdit } from "react-icons/bi"
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode, MdOutlineDarkMode} from "react-icons/md";


const PopupUser = (props) => {

  const { handlelogOut, activeDarkMode, dispatch } = props;

  return (
    <div className="container-popup-user">
      <div className="main-user-popup">
        <div className="sub_container-popup-user">
          <div className="triangle"></div>
        </div>
        <div className="popup-user">
          <div className="perfil">
            <FaUserAlt className="icon-user-popup" />
            <Link to="/profile" className="text-user">
              <span>Perfil</span>
            </Link>
          </div>
          <div className="perfil">
            <BiEdit className="icon-user-edit1" />
            <span className="text-user">Edit perfil</span>
          </div>
          <div
            className="perfil"
            onClick={() => dispatch({ type: "DARK_MODE" })}
          >
            {activeDarkMode ? (
              <MdDarkMode className="icon-dark-mode-active" />
            ) : (
              <MdOutlineDarkMode className="icon-dark-mode" />
            )}
            <span className="text-user">Dark mode</span>
          </div>
          <hr className="line-logout" />
          <footer className="logout" onClick={handlelogOut}>
            <FiLogOut className="logout-icon" />
            <span className="text-user">Log-Out</span>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default PopupUser;
