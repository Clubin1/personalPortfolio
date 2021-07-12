import React from 'react'
import Particles from 'react-particles-js';

const Skills = () => {
    return (
        <div className="thing">
            <Particles className="skillsLanding"
    params={{
	    "particles": {
	        "number": {
	            "value": 15,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
	                    "height": 20,
	                    "width": 30
	                },
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
                        "height": 5,
                        "width": 5
                    },
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png ",
                        "height": 10,
                        "width": 10
                    }

	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 40,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 3,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	}} />
            <div id="Skills" className="skills">
                <h1>My Skills</h1>
                <p>
                    I am very experienced in the MERN stack. I have had a lot of applicable real world experience with my
                    <br></br>freelancing projects and internships.
                </p>
                <p className="margin">
                    I understand advanced React topics such as routing, environmental variables, redux and the DOM.
                    <br></br>I am also capable of creating database infrastructures with Mongo and capable of writting requests.
                </p>
                <img alt="Stack skills" className="skillItem" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"></img>
            </div>
        </div>

    )
}

export default Skills
