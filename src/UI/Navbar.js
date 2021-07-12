import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
                    <a href="https://github.com/Clubin1"><FaGithub className="navFooterItem"/></a>
                    <a href="https://www.linkedin.com/in/justin-tubay-97793a196/"><FaLinkedin className="navFooterItem"/></a>
                </div>
            </div>
    )
}

export default Navbar
