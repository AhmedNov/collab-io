import React from "react";
import '../styles/StyleCompanies.css'
import logo1 from  '../assets/companies-svg/logo1.svg'
import logo2 from  '../assets/companies-svg/logo2.svg'
import logo3 from  '../assets/companies-svg/logo3.svg'
import logo4 from  '../assets/companies-svg/logo4.svg'
import logo5 from  '../assets/companies-svg/logo5.svg'
import logo6 from  '../assets/companies-svg/logo6.svg'
const Companies = () => {
  return (
    <>
    <div className="section" data-aos="fade-down">

    <div className="header2 ">
      <div className="container">
      <div className="row ">
        <div className="col-12">
          <p>More than 100,000+ teams are using Collab</p>
          </div>
          <div className="col-12 col-md-2 col-sm-3">
          <img className="img-fluid" src={logo1} alt="" />
          </div>
          <div className="col-12 col-md-2 col-sm-3">
          <img className="img-fluid" src={logo2} alt="" />
          </div>
          <div className="col-12 col-md-2 col-sm-3">
          <img className="img-fluid"src={logo3} alt="" />
          </div>
          <div className="col-12 col-md-2 col-sm-3">
          <img className="img-fluid" src={logo4} alt="" />
          </div>
          <div className="col-12 col-md-2 col-sm-3">
          <img className="img-fluid" src={logo5} alt="" />
          </div>
          <div className="col-12 col-md-2 col-sm-3 ">
          <img className="img-fluid" src={logo6} alt="" />
          </div>
        </div>
        
      </div>
      </div>
       
        
       
        
        
        
        

      </div>
      
    </>
  );
};

export default Companies;
