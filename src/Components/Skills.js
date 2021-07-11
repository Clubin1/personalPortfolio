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
                <h1>My Portfolio</h1>
                <p>
                    A small gallery of recent projects chosen by me. I've done them all together with amazing
                    <br></br>people from companies around the globe. It's only a drop in the ocean compared to the entire list.
                </p>
                <p className="margin">
                    A small gallery of recent projects chosen by me. I've done them all together with amazing
                    <br></br>people from companies around the globe. It's only a drop in the ocean compared to the entire list.
                </p>
                <img alt="Stack skills" className="skillItem" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"></img>
            </div>
        </div>

    )
}

export default Skills
