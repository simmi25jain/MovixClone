import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import './Navbar.css';
import Logo from '../assets/movix-logo.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="moviesite"><Link to="/"><img src={Logo} alt="logo" className="logo" /></Link></div>
            <div className="right">
                <Link to="/Movies">Movies</Link>
                <Link to="/Tvshows">TV Shows</Link>
                <div><FaSearch /></div>
            </div>
        </div>
    );
}

export default Navbar;