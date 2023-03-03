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
           <button className='log-btn ab-btn'><Link className='btn log-btn' to="/about">About Us</Link></button>
           <button className='btn reg-btn log-btn-1'>
            <a className='btn-link'
            href="https://scamtrust-webapp.vercel.app/" target="_blank" rel="noreferrer">Login
            </a>
            </button>
           <button className='sign-btn'>
           <a className='btn-link'
            href="https://scamtrust-webapp.vercel.app/" target="_blank" rel="noreferrer">Sign up
            </a>
           </button>
       </div>
    </div>
  )
}

export default Navbar