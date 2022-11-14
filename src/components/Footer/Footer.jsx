import React from 'react'
import './Footer.css'
import {HiArrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
   <div className='foo-wrapper'>
    <div className='foo-con'>
        <div className="foo-news">
          <p className='news-title'>Subsribe to our newsletter</p>
          <div className="input-div">
          <input className='news-input' type="text" placeholder='Email Address' />
          <button className='news-btn'><HiArrowRight /></button>
          </div>
        </div>
        <div className="foo-links">
          <p className='links-title'>Company</p>
          <Link className='links-li' to="/about">About</Link>
          <Link className='links-li' to="/Faq">FAQs</Link>
          <a className='links-li' href="#">Blog</a>
        </div>
        <div className="foo-contact">
          <p className='contact-title'>Contact Us</p>
          <p className='contact-words'>Support@scamtrust.com</p>
        </div>
    </div>
    <hr />
   </div> 
  )
}

export default Footer