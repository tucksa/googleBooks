import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className= 'myNav'>
            <span className= 'title'>Google Book Search</span>
            <span className='myLink'>
            <Link className= 'link' to= '/search'>Search</Link>
            <Link className= 'link' to= '/library'>My Library</Link>
            </span>
        </nav>
    )
}

export default Navbar;