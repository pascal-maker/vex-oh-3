import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DownloadCards from '../components/Download'
import friends from '../components/HeroImage'


const Download = () => {
    return (
        <div>
            <Navbar />
            <friends.jpg heading='Download.' text='Choose your platform.' />
            <DownloadCards />
            <Footer />
        </div>
    )
}

export default Download
