import React from "react";

const Template2 = ({
  basliq,
  mid,
  bottom1,
  bottom2,
  bottom3,
  imgLink,
  ppimg,
}) => {
  return (
    <div className="temp1">
      <div className="container mt-5">
        <div className="row d-flex">
          <div className="  col-12 col-md-6 col-lg-7">
            <div className="title">
              <h1 className="title-first">{basliq}</h1>
              <p className="mid-title ">{mid}</p>
              <div className="pparea d-flex">
               <div className=" ">
                   <img src={ppimg} alt="" />
               </div>
              

               <div className="pptitle   " >
                  <p className="bottom-title">{bottom1}</p>
              <p className="bottom-title">{bottom2}</p>
               </div>
                
              </div>
             
              
              <div className="learn_more">
                <a href="#">Learn more</a>
              </div>
            </div>
            
          </div>
          <div className=" img-temp col-12 col-md-6 col-lg-5">
            <img src={imgLink} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
