import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Pokemon Index</h1>
            <div className="links"> 
            <a href='/'>Home </a> 
            <a href='/about'> About </a>
            </div>

        </nav>
     );
}
 
export default Navbar;