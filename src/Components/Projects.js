import React from 'react'

const Projects = () => {
    return (
        <div id="Projects" className="projects">
            <div className="wrapper">
                <div className="projectItem">
                    <p className="asd">
                        Jump started my own personal freelancing service. Meant for website design and software development. The website was coded in React. Email form is functional through Express. 
                    </p>
                    <a href="https://www.thenerodev.com" className="btn itemButton">
                        View Project
                    </a>
                </div>
                <div className="projectItem2">
                    <p className="asd">
                        Worked as a software engineer intern for MPA. Remodeled their website and used Express to communicate to a MongoDB and React to display the information. Created a admin content management system and wrote database search queries.
                    </p>
                    <a href="https://mpacharlotte.org" className="btn itemButton">
                        View Project
                    </a>
                </div>
                <div className="projectItem3">
                    <p className="asd">
                        A site created to help users find events based on location and event type desired. Build using MDB, an event API, and has a simple local storage logging verification.

                    </p>
                    <a href="https://jtubay.github.io/Bored/" className="btn itemButton">
                        View Project
                    </a>
                </div>
                <div className="projectItem4 ">
                    <p className="asd">
                        A website created meant to be used as a CSGO stat tracker for personally ran servers. Communicated with a c++ plugin that tracked stats real time in-game, and used MySql to store that information. Built a content management system with Express and used it to display the info.
                    </p>
                    <a href="https://github.com/Clubin1/ElectraLeague" className="btn itemButton">
                        View Project
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Projects
