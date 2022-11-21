import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Faq.css'
import { Accordion, AccordionSummary, AccordionDetails} 
from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {faq} from '../../faqItem'
import Google from '../../Assets/Google.png'
import Apple from '../../Assets/Apple.png'
import FaqImg from '../../Assets/faq-img.png'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Faq = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='faq-wrapper'>
      <Navbar />
      <div className="faq-head">
        <div className='faq-top'>
            <p className='faq-title'>Frequently Asked Questions (FAQs)</p>
            <input className='faq-input' placeholder='Search for a question...' />
        </div>
        <div className="faq-accordion">
          
          {faq.map((item) => {
            return(
        <Accordion className='acc-con' key={item.id}>
                <AccordionSummary 
                sx={{ bgcolor: "#353935", color: "white" }}
                expandIcon={<ExpandMoreIcon className='acc-icon' />}>
                    <p className='typography'>
                      {item.question}
                    </p>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#353935", 
                     color: "white" }}>
                    <p className='acc-content'>
                    {item.answer}
                    </p>
                </AccordionDetails>
            </Accordion>
            )
          })}

        </div>
        <hr className='hr'/>
        </div>

               
                      {/* BOTTOM */}

        <div className="faq-tail">
          <div className="tail-left">
            <img className='faq-img' src={FaqImg} alt="..." />
          </div>
          <div className="tail-right">
            <p className='tail-title'>1 Million+ Customers</p>
            <p className='tail-words'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integer bibendum velit fermentum feugiat auctor sed id orci. Mauris et lorem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.
            </p>
            <button className='tail-btn'>Register</button>
            <div className='download'>
            <button className='g-btn down-btn'>
              <img src={Google} alt='...' />
              <span>
                <p className='t-btn-word'>Get on</p>
                <h1 className='t-btn-words'>Google Play</h1>
              </span>
              </button>
              <button className='app-btn down-btn'>
                <img src={Apple} alt='...' />
                <span>
                <p className='t-btn-word'>Download on</p>
                <h1 className='t-btn-words'>App Store</h1>
                </span>
              </button>
            </div>
          </div>
        </div>
        <hr className='hr hr-btm' />
        <Footer />
    </div>
  )
}

export default Faq