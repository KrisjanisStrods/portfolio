import React from 'react';
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink className="sideBarLink" to="/admin/Images" activeStyle={{color:'white', border:'white solid 1px'}} exact>Images</NavLink>
            <br></br>
            <NavLink className="sideBarLink" to="/admin/Upload" activeStyle={{color:'white', border:'white solid 1px'}} exact>Upload</NavLink>
            <br></br>
            <NavLink className="sideBarLink" to="/admin" activeStyle={{color:'white', border:'white solid 1px'}} exact>Home</NavLink>
        </div>
    );
};

export default Sidebar;