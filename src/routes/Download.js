import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DownloadCards from '../components/Download'
import HeroImage from '../components/HeroImage'


const Download = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Download.' text='Choose your platform.' />
            <DownloadCards />
            <Footer />
        </div>
    )
}

export default Download
