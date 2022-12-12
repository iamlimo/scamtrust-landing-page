import React from 'react'
import "./Navbar.css"
import navLogo from '../../Assets/scamTrust-logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return(
    <div className='nav-con'>
       <div className='nav-left'>
          <Link to="/"><img className='nav-logo' src={navLogo} alt='...' /></Link>
       </div>
       <div className='nav-right'>
           <button className='btn log-btn'><Link className='btn log-btn' to="/about">About Us</Link></button>
           <button className='btn reg-btn'>Download</button>
       </div>
    </div>
  )
}

export default Navbar