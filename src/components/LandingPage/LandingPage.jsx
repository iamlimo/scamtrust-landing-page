import React from 'react'
import './landingpage.css'
import introImg from '../../Assets/phones.png'
import Apple from '../../Assets/Apple.png'
import Google from '../../Assets/Google.png'
import scan from '../../Assets/qr-code.png'
import { BsArrowRight } from "react-icons/bs";



const LandingPage = () => {
  return (
    <>
    <div className='intro-con'>             
    <div className='intro'>
        <div className='intro-left'>
            <div className='intro-title'>
                <h1>Secure all </h1>
                <h1 className='mid-h1'>Transactions</h1>
                <h1>with us today</h1>
            </div>
            <p className='intro-words'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integeruuuu bibendum velit fermentum feugiat auctor sed idojo.
            </p>
        </div>

        <div className='intro-right'>
            <div className='circle'>
        <img className='intro-img' src={introImg} alt='...' />
            </div>
        </div>
    </div>
                   {/* DOWNLOAD */}
        <div className='btm-div'>        
                 {/* DOWNLOAD BUTTON */}
           <div className='dwn-div'>
              <button className='g-btn download-btn'>
              <img src={Google} alt='...' />
              <span>
                <p className='btn-word'>Get on</p>
                <h1 className='btn-words'>Google Play</h1>
              </span>
              </button>
              <button className='app-btn download-btn'>
                <img src={Apple} alt='...' />
                <span>
                <p className='btn-word'>Download on</p>
                <h1 className='btn-words'>App Store</h1>
                </span>
              </button>
            </div>
                      {/* SCAN DOWNLOAD */}
             <div className='scan'>
                <p className='scan-words'>
                    Scan to download ScamTrust
                    <br />
                    <BsArrowRight className='arrow-ico' />
                </p>
                <img className='scan-img' src={scan} alt="..." />
            </div>     
        </div>
    </div>

    </>
  )
}

export default LandingPage