import React from "react";
import "../styles/StyleTemplate.css";

const TemplatesData = ({ basliq, mid, bottom1, bottom2, bottom3, imgLink }) => {
  return (
    <>
      <div className="temp1"data-aos="fade-down">
        <div className="container mt-5">
          <div className="row d-flex">
            <div className=" img-temp col-12 col-md-6 col-lg-7">
              <img src={imgLink} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="title">
                <h1 className="title-first">{basliq}</h1>
                <p className="mid-title ">{mid}</p>
                <p className="bottom-title">{bottom1}</p>
                <p className="bottom-title">{bottom2}</p>
                <p className="bottom-title">{bottom3}</p>
                <div className="learn_more">
                <button className='hovers'>Learn More
                      </button>
            </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className=" temp d-flex">
        <div className="temp-left-side"></div>
        <div className="temp-right-side "></div>
      </div>
    </>
  );
};

export default TemplatesData;
