import React from 'react';
import '../styles/footer.css';
import halfpicture from "../assets/footer/half-pictur.svg";
import halfpicture2 from "../assets/footer/half-picture2.svg";
import white from '../assets/footer/white.svg'


const Footer = () => {
  return (
    <div className='challenge'>
        <div className='d-flex half-1'data-aos="fade-right"><img src={halfpicture} alt="" /></div>
        <div className='challenge-title'data-aos="fade-down">
            <h2>99.9% teams love Collab.Not convinced you’re one?We love a challenge.</h2> 
            <div className='challenge-bottom'>
              <a href='#'>Start your free trial</a>
              <img src={white} alt="" />
            </div>
        </div>
       
        <div className='d-flex half-2'data-aos="fade-left"><img src={halfpicture2} alt="" /></div>


        <div className='footer'>
            
        </div>
    </div>
  )
}

export default Footer