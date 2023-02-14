import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import vexoVideo from '../assets/vexo.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={vexoVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>VEX-OH.</h1>
                <p>World's first camera swipe app.</p>
                <div>
                    <Link to='/About' className='btn'>About</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
