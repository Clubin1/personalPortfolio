import React from 'react'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../Assets/CSS/styles.css'
const Navbar = () => {
    
    return (
            <div className="sideNav">
                <div className='upperNav'>
                    <h1 className='upperNavTitle'>JT</h1>
                    <h4>Justin T.</h4>
                    <h4 className="subText">Developer</h4>
                </div>
                <div className="thing">

                </div>
                <div className="middleNav">
                    <ul>
                        <li className="navItem"> <a href="#Home">Home</a></li>
                        <li className="navItem"> <a href="#About">About</a></li>
                        <li className="navItem"> <a href="#Projects">Projects</a></li>
                        <li className="navItem"> <a href="#Skills">Skills</a></li>
                        <li id="bottomBorder" className="navItem"> <a href="#Contact">Contact</a></li>
                    </ul>

                </div>

                <div className="bottomNav">
                    <FaGithub className="navFooterItem"/>
                    <FaLinkedin className="navFooterItem"/>
                    <FaTwitter className="navFooterItem"/>
                </div>
            </div>
    )
}

export default Navbar
