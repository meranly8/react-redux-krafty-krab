import React from 'react'
import { Link } from 'react-router-dom'

const NavBarCrafts = () => {
    return(
        <div>
            <Link to="/crafts/">All</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/crafts/backlog">Backlog</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/crafts/wip">Work In Progress</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/crafts/inventory">Inventory</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/crafts/sold">Sold</Link>&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default NavBarCrafts