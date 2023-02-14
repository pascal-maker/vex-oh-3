import React from 'react'
import {Link} from 'react-router-dom'
import './DownloadStyles.css'


const Download = () => {
    return (
        <div className='Pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- IOS -</h3>
                    <span className='bar'></span>
                    <p className='Ios'>Appstore</p>
                    <p>- Dual-Camera -</p>
                    <p>- 1 Picture -</p>
                    <p>- 24 hours available -</p>
                    <p>- Have fun and Explore ! -</p>
                   <Link to='/https://apps.apple.com/be/app/lovia/id1574149291?l=nl' className='btn'>Download</Link>
                </div>

                <div className='card'>
                    <h3>- Android -</h3>
                    <span className='bar'></span>
                    <p className='Google'> Playstore</p>
                    <p>- Dual-Camera -</p>
                    <p>- 1 Picture -</p>
                    <p>- 24 hours Available-</p>
                    <p>- Have fun and Explore ! -</p>
    

                    <Link to='/https://play.google.com/store/apps/details?id=com.lovialove&pli=1' className='btn'>Download</Link>
                    
 

                </div>
            </div>
        </div>
    )
}

export default Download
