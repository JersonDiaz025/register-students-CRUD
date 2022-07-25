import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Title from './Title';

const Navbar = () => {
    return (
        <div className="container-main">
            <div className="container-navb">
                <nav className="navb">
                    <div className="sub_container">
                        <img className="image" src="../src/assets/students-icon.png" alt="image-home"/>
                        <Title data={"Student Registration"} styles={`${"title-nav"}`}/>
                    </div>
                    <div className="container_links">
                        <Link to="/" className="links">
                            <ul>
                                <li>Home</li>
                            </ul>
                        </Link>
                        <Link to="/students" className="links">
                            <ul>
                                <li>All students</li>
                            </ul>
                        </Link>
                        <Link to="/register" className="links">
                            <ul>
                                <li>Register student</li>
                            </ul>
                        </Link>
                        <Link to="/contact" className="links">
                            <ul>
                                <li>Contact</li>
                            </ul>
                        </Link>
                    </div>
                </nav>
            </div>
            <Outlet/>
        </div>
    );
}

export default Navbar;
