import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
           <Link to='/'><h1>VEX-OH</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/Download'>Download</Link>
               </li>
               <li>
                   <Link to='/About '>About</Link>
               </li>
               <li>
                   <Link to='/contact'>Contact</Link>
               </li>
               <li>
                   <Link to='https://www.termsofusegenerator.net/live.php?token=BsTThhAKzXzBVZSE0nTGiLY7vkRQW5JO'>Terms of use</Link>
               </li>
               <li>
                   <Link to='https://www.freeprivacypolicy.com/live/f2d2990a-0291-4b59-874b-28a8ea6f2cf7'> Privacy Policy</Link>
                
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
    )
}

export default Navbar
