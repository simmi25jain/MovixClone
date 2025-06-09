import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'

function Footer() {
    return (
        <div className="footerMainContainer">
            <div className='footerContainer'>
                <div>
                    <ul className='footerPages'>
                        <li>Terms Of Use</li>
                        <li>Privacy-Policy</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='footerDescription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div>
                    <ul className='footerIcons'>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                        <li><FaLinkedin /></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer