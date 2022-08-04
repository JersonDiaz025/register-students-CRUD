import React from 'react';
// import Navbar from './Navbar';

const Header = ( props ) => {

    const { handleActionsMenu } = props;

    return (
      <div className="container-nav-header">
        <div className="content">
          <div className="container-action">
            <button className="btn-close-header" onClick={handleActionsMenu}>
              <img src="../src/assets/icons/icon-close.svg" />
            </button>
          </div>
          <div className="content-login">
            <h3 className="title-login">Hola, Fulano</h3>
            <img src="../src/assets/icons/icon-user.svg" />
          </div>
        </div>
        {/* <Navbar/> */}
      </div>
    );
}

export default Header;
