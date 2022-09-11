import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa"

const PopupUser = () => {
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
            <p className="p">Perfil</p>
          </div>
          <div className="perfil">
            <FaUserEdit className="icon-user-edit1" />
            <p className="p">Edit perfil</p>
          </div>
        </div>
        <hr></hr>
        <div className="logout">
          <FiLogOut className="logout-icon" />
          <p>Log-Out</p>
        </div>
      </div>
    );
}

export default PopupUser;
