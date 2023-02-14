import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTiktok,} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>Gerard Willemotlaan 30.</p>
                            <h4>Ghent,Belgium </h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> +32456180134</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />pascalmusabyimana681@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>"VEX-OH is a swipe-camera app that allows you to take one picture a day at a certain time. Taking away the stress of having to choose between your best pictures on swiping apps. And just let you have fun while seeing everyone's authentic side  "</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTiktok size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
