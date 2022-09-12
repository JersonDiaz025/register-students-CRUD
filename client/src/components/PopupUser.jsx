import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode, MdOutlineDarkMode} from "react-icons/md";


const PopupUser = (props) => {

  const { handlelogOut } = props;
    const [a, setA] = useState(false)


    const handleSelectIconMode = () => {
        setA(!a)
    }
    return (
      <div className="container-popup-user">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div className="triangle"></div>
        </div>
        <div className="popup-user">
          <div className="perfil">
            <FaUserAlt className="icon-user-popup" />
            <span className="text-user">Perfil</span>
          </div>
          <div className="perfil">
            <FaUserEdit className="icon-user-edit1" />
            <span className="text-user">Edit perfil</span>
          </div>
          <div className="perfil" onClick={handleSelectIconMode}>
            {a ? (
              <MdDarkMode className="icon-dark-mode" />
            ) : (
              <MdOutlineDarkMode className="icon-dark-mode" />
            )}
            <span className="text-user">Dark mode</span>
          </div>
        </div>
        <hr></hr>
        <div className="logout" onClick={handlelogOut}>
          <FiLogOut className="logout-icon" />
          <span className="text-user">Log-Out</span>
        </div>
      </div>
    );
}

export default PopupUser;
