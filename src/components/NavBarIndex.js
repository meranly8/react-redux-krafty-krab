import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarIndex = () => {
    
    return(
        <div className="nav-bar-craft">
            <NavLink to="/crafts/index/type" className="link" activeClassName="current">By Type</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/index/stage" exact className="link" activeClassName="current">By Stage</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default NavBarIndex