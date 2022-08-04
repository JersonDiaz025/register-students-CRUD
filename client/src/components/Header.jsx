import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
      <div className="container-nav-header">
        <div className="content">
            <div className='content-login'>
                <h3 className='title-login'>Hola, Fulano</h3>
                <img src='../src/assets/icons/usuario.svg'/>
            </div>
            <div className='container-action'></div>
        </div>
        {/* <Navbar/> */}
      </div>
    );
}

export default Header;
