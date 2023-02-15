import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import AboutSection from '../components/About'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='About.' text='Take a picture one time per day ! &  No stress just show your authentic side !.' />
            <AboutSection />
            <Footer />
        </div>
    )
}

export default About
