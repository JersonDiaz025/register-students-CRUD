import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import PopupUser from './PopupUser';
import { logOutUser } from '../hooks/useLogout';

const Navbar = (props) => {

  const { store, dispatch } = props;
  const { navbar, user } = store;
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
        <div className="content-login">
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
            </div>
            <FaUserCircle className="icon-user" />
          </div>
          {openModalUser && <PopupUser handlelogOut={handlelogOut} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
