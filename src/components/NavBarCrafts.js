import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarCrafts = () => {
    
    return(
        <div className="nav-bar-craft">
            <NavLink to="/crafts" exact className="link" activeClassName="current">All</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/backlog" className="link" activeClassName="current">Backlog</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/wip" className="link" activeClassName="current">WIP</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/inventory" className="link" activeClassName="current">Inventory</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/sold" className="link" activeClassName="current">Sold</NavLink>
        </div>
    )
}

export default NavBarCrafts