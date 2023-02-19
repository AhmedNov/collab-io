import React, { useEffect, useState } from "react";
import bracketup from "../assets/img/brackets.svg";
import bracketdown from "../assets/img/brackets2.svg";
import stars from "../assets/img/stars.svg";
import robert from "../assets/img/robert.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { comment } from "../comment.js";

import "../styles/StyleBubbleJob.css";

const BubbleJob = () => {
  const [people, pesetPeople] = useState(comment);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (currentIndex < 0) {
        setCurrentIndex(lastIndex)
    }
    if (currentIndex > lastIndex) {
        setCurrentIndex(0);
    }
}, [currentIndex, people]);

useEffect(() => {
    let slider = setInterval(() => setCurrentIndex(prevState => prevState + 1), 5000);
    return () => {
        clearInterval(slider);
    }
}, [currentIndex])

  return (
    <div>
      {/* <div className='BubbleJob'>
        <h1>Hear what teams around the world <br /> saying about Collab</h1>
        <div>
            <img className='bracket1' src={bracketup} alt="" />
            <div>
                <img src={stars} alt="" />
                <h1>I want my team to spend time thinking about high level UX problems, rather than mindlessly repeating busy work. Collab helps them do that.</h1>
                <p></p>
            </div>
            <img className='bracket2' src={bracketdown} alt="" />
        </div>
        <div className='justify-content-evenly'>
            <img className='' src={robert} alt="" />
              <div className=' button-div '>
              <button><BiLeftArrowAlt className='prev'/></button>
              <button><BiRightArrowAlt className='next'/></button>
                </div>
            
        </div>
        
    </div> */}
    

   
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === currentIndex) {
              position = "activeSlide";
            }

            if (
              personIndex === currentIndex - 1 ||
              (currentIndex === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <div className='BubbleJob'data-aos="fade-down">
        <h1>Hear what teams around the world <br /> saying about Collab</h1>
        <div>
            <img className='bracket1' src={bracketup} alt="" />
            <div>
                <img src={stars} alt="" />
                <h1 className="display-4">{quote}</h1>
                <h5>{name}</h5>
            </div>
            <img className='bracket2' src={bracketdown} alt="" />
        </div>
        <div className='justify-content-evenly'>
            <img className='' src={robert} alt="" />
              <div className=' button-div '>
              <button
            className="prev"
            onClick={() => setCurrentIndex((prevState) => prevState - 1)}
          >
            <BiLeftArrowAlt  className="left-arrow"/>
          </button>

          <button
            className="next"
            onClick={() => setCurrentIndex((prevState) => prevState + 1)}
          >
            <BiRightArrowAlt className="right-arrow" />
          </button>
                </div>
            
        </div>
        
    </div>
              </article>
            );
          })}

         
        </div>
      
    </div>
  );
};

export default BubbleJob;