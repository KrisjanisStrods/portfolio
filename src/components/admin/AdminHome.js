import React from 'react';
import Sidebar from "./Sidebar.js";

const AdminHome = () => {

    return(
        
        <div>
            <div className="sidebarDiv">
                <Sidebar />
            </div>
            <div className="contentDiv">
                This is AdminHome page
            </div>
        </div>
    );
};

export default AdminHome;