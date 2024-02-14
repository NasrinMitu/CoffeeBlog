import React from "react";
import './Header.css'
import {Link, NavLink} from 'react-router-dom'

function Header(){
    return(
        <header className="header">
            <nav className="navbar">
                
                     <Link to='/' className="logo">
                        <img src="logo.jpg" alt="Logo" />
                        
                     </Link>

                     <div id="navlinks">

                         <ul>
                            <li> <NavLink className="lists" to="/" > Home </NavLink> </li>
                            <li> <NavLink className="lists" to="/about"> About </NavLink> </li>
                            <li> <NavLink className="lists" to="/contact"> Contact </NavLink> </li>
                            <li> <NavLink className="lists" to="/services"> Services </NavLink> </li>

                         </ul>

                     </div>

                
            </nav>
        </header>
    )
}

export default Header;