import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarMain = () => {
   
    return(
        <section>
            <br />
            <NavLink to="/" exact className="link-main" activeClassName="current-main">Home</NavLink><br /><br />
            <NavLink to="/crafts" exact className="link-main" activeClassName="current-main">Crafts</NavLink><br /><br />
            <NavLink to="/crafts/new" exact className="link-main" activeClassName="current-main">Add Craft</NavLink><br /><br />
            <NavLink to="/crafts/gallery" exact className="link-main" activeClassName="current-main">Gallery</NavLink><br /><br />
            <NavLink to="/crafts/index" exact className="link-main" activeClassName="current-main">Index</NavLink><br /><br />
        </section>
    )
}

export default NavBarMain