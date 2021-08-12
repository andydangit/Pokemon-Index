import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Pokemon Index </h1> 
            <div className="links">
                <Link  to="/"> Home </Link>
                <Link className="box" to="/About"> About</Link>
                </div> 
        </nav>
     );

}
 
export default Navbar;