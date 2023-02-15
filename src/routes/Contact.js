import React from 'react'
import Footer from '../components/Footer'
import friends from '../components/friends'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <friends.jpg heading='CONTACT.' text='Contact VEX-OH' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact
