import React from 'react'
import './AboutStyles.css'

import {Link} from 'react-router-dom'

import pexel from '../assets/pexel.jpg'



const About = () => {
    return (
        <div className='About'>
            <div className='left'>
                <h1>About</h1>
                <p> VEX-OH comes from the word to vex which means no stress in Pidgin English. That is actually our goal people should not stress about which pictures they need to upload in order to come across as perfect. Instead they can just open the camera and show the world who they really are. </p>
                <Link to='https://www.linkedin.com/company/lovia-app/?viewAsMember=true'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={''} className='' alt=''/>
                        
                    </div>
                    <div className='image-stack bottom'>
                        <img src={pexel} className='pexel' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
