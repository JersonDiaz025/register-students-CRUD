import "./index.css";
import Title from '../Title/Title';
import { Link } from "react-router-dom";
import {linskNavbar} from "../../Routes-config/links";
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { logOutUser } from '../../hooks/useLogout';

const Sidebar = (props) => {
  const { dispatch } = props;

  const { handlelogOut } = logOutUser(dispatch);

  const {links_navbar} = linskNavbar();
  
  return (
    <div className="sidebar">
      <nav className="sidebar-container">
        <div className="container-close-nav">
          <IoClose
            className="icon-close"
            onClick={() => {
              dispatch({ type: "ACTION_SIDEBAR" });
            }}
          />
        </div>
        <div className="sidebar-logo-container">
          <Title data={"Student Registration"} stylesTitle={`${"title-nav"}`} />
          <img
            src="../src/assets/students-icon.png"
            alt="image-home"
            className="image-nav"
          />
        </div>
        <div className="sidebar-container">
          <div className="sidebar-items">
            {links_navbar?.map(
              ({ to, className, text, icon: Image, classIcon }) => (
                <Link
                  to={to}
                  className={className}
                  onClick={() => dispatch({ type: "ACTION_SIDEBAR" })}
                >
                  <Image className={classIcon} />
                  <span className="span-side">{text}</span>
                </Link>
              ))}
          </div>
          <div
            className="sidebar-footer"
            onClick={() => {
              dispatch({ type: "ACTION_SIDEBAR" });
            }}
          >
            <p className="links">Log-Out</p>
            <FiLogOut className="icon-logOut" onClick={handlelogOut} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
