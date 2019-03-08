import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <div className="navigationBox">
            <NavLink to="/" className="navigationLink" activeStyle={{color:'#006699', borderBottom:'#ff9933 solid 2px'}} exact>Home</NavLink>

            <NavLink to="/Weddings" className="navigationLink" activeStyle={{color:'#006699', borderBottom:'#ff9933 solid 2px'}} exact>Weddings</NavLink>
            
            <NavLink to="/Portraits" className="navigationLink" activeStyle={{color:'#006699', borderBottom:'#ff9933 solid 2px'}} exact>Portraits</NavLink>
        </div>
    );
};

export default Navigation;