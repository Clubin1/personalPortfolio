import React from 'react'

import Landing from '../Components/Landing'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'

import '../Assets/CSS/styles.css'
const Home = () => {
    return (
        <div>
            <Landing/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default Home
