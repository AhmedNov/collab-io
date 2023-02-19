import React from "react";
import "../styles/StyleFeatures.css";
import img1 from "../assets/features/img1.svg";
import img2 from "../assets/features/img2.svg";
import img3 from "../assets/features/img3.svg";
import img4 from "../assets/features/img4.svg";
import img5 from "../assets/features/img5.svg";
import img6 from "../assets/features/img6.svg";
import img7 from "../assets/features/img7.svg";
import img8 from "../assets/features/img8.svg";

const Features = () => {
  return (
    <div className="features" data-aos="fade-down">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="titles">
        <h1>Features that get you results</h1>
        <p>
          Transform how your teams collaborate. Brainstorm together,
          <br /> develop strategies and build ads that guarantee customers.
        </p>
            </div>
          </div>
        </div>
        <div className="row mt-5" data-aos="fade-down">
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img1} alt="" />
           <p>Live Collaboration</p>
          </div>
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img2} alt="" />
            <p>1M+ Templates</p>
          </div>
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img3} alt="" />
            <p>Searchable Assets</p>
          </div>
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img4} alt="" />
            <p>Unlimited Reviewers</p>
          </div>
        
       
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img5} alt="" />
          <p>Notifications</p>
          </div>
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img6} alt="" />
           <p>Responsive Design</p>
          </div>
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img7} alt="" />
            <p>Multiple media support</p>
          </div>
          <div className="col-12 col-md-3 mt-5 top-side">
          <img src={img8} alt="" />
            <p>Version history</p>
          </div>
          </div>
      </div>
    </div>
   
  );
};

export default Features;
