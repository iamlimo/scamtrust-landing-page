import React from 'react'
import './Ending.css'
// import itemImg from "../Assets/item-img.png"
import {MdVerified} from "react-icons/md"
import { item } from '../../ending-item'

const Ending = () => {
  return (
    <div className='end-con'>
        <div className="end title">
            <p className='title-1'>WHY CHOOSE <br /> <span className='title-2'>ScamTrust</span></p>
        </div>
            <div className='item-wrapper'>
            {item.map((item) => {
                return(
        <div className="end-items" key={item.id}>
            <div className="item-img-div">
                <MdVerified className='item-verified' />
                <img className='item-img' src={item.img} alt="..." />
            </div>
            <div className="item-texts">
                <p className='item-title'>{item.title}</p>
                <p className='item-words'>{item.words}</p>
                <a className='item-link' href="#">Learn more</a>
            </div>
        </div>
                )
            })}
            </div>

      <hr />
        <div className="end-cta">
            <p className='cta-title'>ScamTrust</p>
            <div className='cta-action'>
                <p className='cta-word'>Ready to get started?</p>
                <button className='cta-btn'>Register</button>
            </div>
        </div>
      <hr />
    </div>
  )
}

export default Ending