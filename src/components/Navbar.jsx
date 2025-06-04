import React from 'react'
import { FaSearch } from "react-icons/fa";
import './Navbar.css'
import Logo from '../assets/Logo.png'

import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="navbar mt-10px">
                <div className="moviesite"><Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link></div>
                <div className="right">
                    <Link to="/Movies">MOVIES</Link>
                    <Link to="/Tvshows">TVSHOWS</Link>
                    <div><FaSearch /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar