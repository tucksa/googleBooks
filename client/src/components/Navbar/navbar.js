import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <h1>Google Book Search</h1>
            <Link to= '/search'>Search</Link>
            <Link to= '/saved'>My Library</Link>
        </nav>
    )
}

export default Navbar;