import React from 'react'
import './Intro.css'
import spiralDot from '../../Assets/spiral-dot.png'
import videoImg from '../../Assets/video.png'
import { VscPlayCircle } from "react-icons/vsc";

const About = () => {
  return (
    <div className='about-con'>
        <div className='about-top'>
            <p className='about-title'>How it works</p>
            <div className='img-div'>
            <img className='spiral-img' src={spiralDot } alt="..." />
            </div>
            
            <div className="point-div">
                <div className='point'>
                    <p className='figure'>1</p>
                    <div>
                        <p className='point-title'>
                            Lorem Ipsum mffkkxf
                        </p>
                        <p className='point-words'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. 
                        </p>
                        <a className='point-link'>Learn more</a>
                    </div>
                </div>

                <div className='point point2'>
                    <p className='figure'>2</p>
                    <div>
                        <p className='point-title'>
                            Lorem Ipsum mffkkxf
                        </p>
                        <p className='point-words'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. 
                        </p>
                        <a className='point-link' href="#">Learn more</a>
                    </div>
                </div>

                <div className='point point3'>
                    <p className='figure'>3</p>
                    <div>
                        <p className='point-title'>
                            Lorem Ipsum mffkkxf
                        </p>
                        <p className='point-words'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. 
                        </p>
                        <a className='point-link' href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>

                        {/* BOTTOM */}
        <div className='about-bottom'>
            <div className="left">
                <p className='btm-title'>
                    <span style={{color: '#f6d645'}}>Do not </span>
                    pay to <br /> online vendor <br /> without
                    <span style={{color: '#5597fa'}}> ScamTrust</span>
                </p>
                <p className='btm-words'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo leo consequat sit purus. Cras integeruuuu bibendum velit fermentum feugiat auctor sed idojo.
                </p>
                <a className='point-link' href="#">Learn more</a>
            </div>
            <div className="right">
                <img  className='video-img' src={videoImg} alt="..." />
                <div className='img-action'>
                <VscPlayCircle className="play-icon" />
                <div>
                    <p className='play'>Play this video</p>
                    <p className='play-words'>to see why you need ScamTrust</p>
                </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default About