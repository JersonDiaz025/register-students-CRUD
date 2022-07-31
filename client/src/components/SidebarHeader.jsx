import React from 'react';
import { Outlet, Link } from "react-router-dom";

const SidebarHeader = () => {
    return (
        <div className="container-sidebar">
            <div className='container-btn-header'>
                <Link to="/register" className='dashbord-header-btn'>New register</Link>
            </div>
            <div className="container_">
                <input placeholder='Search' className='dashboard-content-input'/>
            </div>
        </div>
    );
}

export default SidebarHeader;
