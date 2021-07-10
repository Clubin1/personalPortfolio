import React from 'react'

import Particles from 'react-particles-js';
const Landing = () => {
    return (
        
        <div className="Landing">
            <Particles className="particles"
            params={{
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 1000
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.04
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.1
                    },
                    "size": {
                        "value": 1.5
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 2,
                            "opacity_min": 0.2
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        }
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                              "opacity": .3,
                              "color": "#fff",
                            }
                        }
                    }
                },
                "retina_detect": true
            }}
            />
            <div className="position">
            <h1 className="landingText">Hi,<br></br>I'm Justin Tubay, <br></br> A Developer.</h1>
            <h6 className="subText">Full-Stack Developer / Software Developer</h6>
            <button className="btn">
                <a href="#contact">Contact Me!</a>
            </button>
            <button className="btn position2">
                <a href="#contact">Contact Me!</a>
            </button>
            </div>
            <div className="arrowOne">Scroll Down</div>
            <div className="arrowTop">Scroll Down</div>
            <div className="landingShadow">JT</div>

        </div>
    )
}

export default Landing
