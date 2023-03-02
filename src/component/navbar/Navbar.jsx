import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navtitle">Times of India News</div>
        <ul className="navmenu">
            <Link to="/"><li>Home</li></Link>
            <Link to="/india"><li>India</li></Link>
            <Link to="/world"><li>World</li></Link>
            <Link to="/technology"><li>Technology</li></Link>
            <Link to="/city"><li>City News</li></Link>
        </ul>
    </div>
  )
}

export default Navbar