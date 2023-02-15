import React from 'react'
import Footer from '../components/Footer'
import friends from '../components/HeroImage'
import Navbar from '../components/Navbar'
import AboutSection from '../components/About'

const About = () => {
    return (
        <div>
            <Navbar />
            <friends.jpg heading='About.' text='Take a picture one time per day ! &  No stress just show your authentic side !.' />
            <AboutSection />
            <Footer />
        </div>
    )
}

export default About
