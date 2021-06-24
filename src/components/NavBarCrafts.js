import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarCrafts = () => {
    const style = {
        textDecoration: 'none', color: 'dark gray'
    }
    
    return(
        <div className="nav-bar-craft">
            <NavLink to="/crafts" exact style={style} activeClassName="current">All</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/backlog" style={style} activeClassName="current">Backlog</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/wip" style={style} activeClassName="current">Work In Progress</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/inventory" style={style} activeClassName="current">Inventory</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/crafts/sold" style={style} activeClassName="current">Sold</NavLink>&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default NavBarCrafts