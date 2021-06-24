import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarMain = () => {
    const style = {
        textDecoration: 'none', color: 'white'
    }
    
    return(
        <section>
            <br /><br />
            <div className="link">
                <NavLink to="/" exact style={style} activeClassName="current">Home</NavLink><br /><br />
            </div>
            <div className="link">
                <NavLink to="/crafts" exact style={style} activeClassName="current">Crafts</NavLink><br /><br />
            </div>
            <div className="link">
                <NavLink to="/crafts/new" exact style={style} activeClassName="current">New Craft</NavLink><br /><br />
            </div>
        </section>
    )
}

export default NavBarMain