import React from 'react';
import Title from './Title';

const Navbar = () => {
    return (
        <div className="container-main">
            <div className="container-navb">
                <nav className="navb">
                    <div className="sub_container">
                        <img className="image_home" src="../src/assets/students-icon.png" alt="image-home"/>
                        <Title data={"Student Registration"} styles={`${"title-nav"}`}/>
                    </div>
                    <div className="container_links">
                        <a href="/" className="links">
                            <ul>
                                <li>Home</li>
                            </ul>
                        </a>
                        <a href="/get-peliculas" className="links">
                            <ul>
                                <li>Students</li>
                            </ul>
                        </a>
                        <a href="" className="links">
                            <ul>
                                <li>About</li>
                            </ul>
                        </a>
                        <a href="" className="links">
                            <ul>
                                <li>Contact</li>
                            </ul>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
