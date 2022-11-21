import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import img1 from '../../Assets/img-1.png' 
import img2 from '../../Assets/img-2.png' 
import img3 from '../../Assets/img-3.png' 
import img4 from '../../Assets/img-4.png' 
import img5 from '../../Assets/img-5.png' 
import img6 from '../../Assets/img-6.png' 
import img7 from '../../Assets/img-7.png' 
import midImg from '../../Assets/faq-img.png'
import aboutItems from '../../aboutItems'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div id='about-page'>
      <Navbar />
      <div className="about-con">

                    {/* T  O  P */}
        <div className="about-top">
          <div className="ab-top-left">
            <p className='ab-top-title'>
              Our Mission
            </p>
            <p className='ab-top-words'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integer bibendum velit fermentum feugiat auctor sed id orci. Mauris et lorem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.
            </p>
          </div>          
          <div className="ab-top-right">
            <div className="img-col-1">
              <img className='ab-tall-img ab-img-1' src={img1} alt="..." />
            </div>
            <div className="img-col-2">
              <img className='ab-small-img' src={img2} alt="..." />
              <img className='ab-tall-img ab-img-space' src={img3} alt="..." />
              <img className='ab-smaller-img ab-img-4' src={img4} alt="..." />
            </div>
            <div className="img-col-3">
              <img className='ab-tall-img ab-img-5' src={img5} alt="..." />
              <img className='ab-smaller-img ab-img-space ab-img-6' src={img6} alt="..." />
              <img className='ab-tall-img' src={img7} alt="..." />
            </div>
          </div>          
        </div>
                
                     {/* M  I  D */}

        <div className="about-mid">
          <div className="ab-mid-left">
            <img className='ab-mid-img' src={midImg} alt="..." />
          </div>
          <div className="ab-mid-right">
            <p className='ab-mid-title'>
              Our Story
            </p>
            <p className='ab-mid-words'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integer bibendum velit fermentum feugiat auctor sed id orci. Mauris et lorem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integer bibendum velit fermentum feugiat auctor sed id orci. Mauris et lorem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integer bibendum velit fermentum feugiat auctor sed id orci. Mauris et lorem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.
            </p>
          </div>
        </div>
              
                      {/* B O T T O M */}

        <div className="about-bottom">
          <div className="ab-bottom-top">
            <p className='ab-bottom-title'>
            The Team
            </p>
            <p className='ab-bottom-words'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integer bibendum velit fermentum feugiat auctor sed id orci. Mauris et lorem in nunc sed sit urna. Libero massa tortor magna cursus suspendisse.
            </p>
          </div>
          <div className="ab-bottom-bottom">
             {aboutItems.map((item) => {
              return(
            <div className='ab-img-div' key={item.id}>
            <img className='ab-bottom-img' src={item.img} alt="..." />
            <p className='ab-name'>{item.name}</p>
            <p className='ab-position'>{item.position}</p>
            </div>
              )
             })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About