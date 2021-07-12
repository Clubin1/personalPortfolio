import React from 'react'

const About = () => {
    return (
        <div id="About">
            <div className="about">
                <h1>My Portfolio</h1>
                <p>
                   Im a Full-Stack Developer and Software Developer who has almost 2 years of programming experience.
                    <br></br>I am self-taught and can code in multiple javaScript frameworks, as well as other languages like Python and C++.
                </p>
                <p className="margin">
                Here is a small gallery of recent projects that I have made mostly using the MERN stack.
                    <br></br>All of these websites contain features such as full responsiveness as well as fully functional code.
                </p>
                    <a className="btn btnPosition"href="#Projects">Past Work</a>

            </div>
            <h1 className="portfolioShadow">Portfolio</h1>
        </div>

    )
}

export default About
