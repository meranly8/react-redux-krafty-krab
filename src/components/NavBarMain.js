import React from 'react'
import { Link } from 'react-router-dom'

const NavBarMain = () => {
    return(
        <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/crafts">All Crafts</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/crafts/new">New Craft</Link>&nbsp;&nbsp;&nbsp;
        </div>
    )
}

export default NavBarMain