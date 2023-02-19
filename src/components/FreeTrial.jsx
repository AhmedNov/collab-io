import React from 'react'
import '../styles/StyleFreeTrial.css'
import required from '../assets/img/cardrequired.svg'
// import neoncam from '../assets/img/neoncam.svg'
// import manageUser from '../assets/img/manageUser.svg'
// import ppblue from '../assets/img/ppblue.svg'
// import ppred from '../assets/img/ppred.svg'
// import robbert from '../assets/img/robbert.svg'
import Companies from './Companies'
import talpa from '../assets/img/talpa.svg'
import Features from './Features'



export const FreeTrial = () => {
  return (
    <>
      <div className='container' >
        <div className="row mt-5">
        <div className='left-side col-12 col-md-6  'data-aos="fade-right">
            <h1>Transform your <br/> teamwork with <br/> a powerful <br/> design tool</h1>
            <p>
            Stop wasting time with clunky, siloed teamwork. Get every stakeholder on the same page with a design tool that help you work better, faster.
            </p>
            <div className='left-bottom'>
              <a href='#'>Start your free trial</a>
              <img src={required} alt="" />
            </div>
            
        </div>
        <div className='col-12 col-md-6 right-side 'data-aos="fade-left">
            
              <img src={talpa} className='talpa img-fluid' alt="" />

        </div>
        </div>

        
        </div>
       <Companies/>

       <Features/>
    </>
  )
}

export default FreeTrial;