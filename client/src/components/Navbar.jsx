import { Link } from 'react-router-dom';
import { ImUsers } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import PopupUser from './PopupUser';
import { useState } from 'react';

const Navbar = (props) => {
  const { handleActionsMenu, name_user } = props;

  const [openM, setOpenM] = useState(false)




  const handleOpenActionUser = () => {
    setOpenM(!openM)
  }

  return (
    <div className="container-nav-header">
      <div className="content">
        <div className="container-action">
          <AiOutlineMenu
            className="btn-close-header"
            onClick={handleActionsMenu}
          />
        </div>
        <div className="content-login">
          <div
            className="container-profile-info"
            onClick={handleOpenActionUser}
          >
            {/* <MdOutlineLightMode className='icon-dark'/> */}
            <div className="title-login">
              <span className="text-user">
                Hi, {`${name_user !== "" && name_user}`}
              </span>
            </div>
            <ImUsers className="icon-user" />
          </div>
          {openM && <PopupUser />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
