import React, { useRef, useState } from "react";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles/integrates.css";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
//
import demo from "../assets/integrates/demo.svg";
import discord from "../assets/integrates/discord.svg";
import drive from "../assets/integrates/drive.svg";
import gmail from "../assets/integrates/gmail.svg";
import slack from "../assets/integrates/slack.svg";
import webflow from "../assets/integrates/webflow.svg";
import google from "../assets/integrates/google.svg";
import dropbox from "../assets/integrates/dropbox.svg";
import youtube from "../assets/integrates/youtube.svg";
import figma from "../assets/integrates/figma.svg";
import photo1 from '../assets/articles/photo.svg';
import photo2 from '../assets/articles/photo2.svg';
import photo3 from '../assets/articles/photo3.svg';
const İntegrates = () => {
  return (
    <div className="container ">
      <div className="row" data-aos="fade-up">
        <img className="img-fluid" src={demo} alt="" />
      </div>
      <div className="integrate d-flex" >
        <h1 data-aos="fade-down">
          Collab integrates with all <br /> your favourite tools.
        </h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Navigation]}
          className="mySwiper"
        >
          <div className="top-integrate d-flex row mt-2  "data-aos="fade-down">
          <SwiperSlide>
              <a target="_blank" href="https://discord.com/">
                {" "}
                <img src={discord} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a target="_blank" href="https://slack.com/">
                {" "}
                <img className="second" src={slack} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a target="_blank" href="https://webflow.com/">
                {" "}
                <img src={webflow} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a target="_blank" href="https://drive.google.com/">
                {" "}
                <img  className="second" src={drive} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank" href="https://mail.google.com/">
                {" "}
                <img src={gmail} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.google.com/">
                {" "}
                <img className="second" src={google} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.youtube.com/">
                {" "}
                <img src={youtube} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.figma.com/">
                {" "}
                <img className="second"src={figma} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.dropbox.com/">
                {" "}
                <img src={dropbox} alt="" />
              </a>
            </SwiperSlide>
          </div>
        </Swiper>
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          freeMode={true}
          autoplay={{
            delay: 1300,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode, Navigation]}
          className="mySwiper"
        >
          <div className="top-integrate d-flex row mt-2  "data-aos="fade-down" data-aos-delay="500">
          <SwiperSlide>
              <a target="_blank" href="https://discord.com/">
                {" "}
                <img src={discord} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a target="_blank" href="https://slack.com/">
                {" "}
                <img className="second" src={slack} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a target="_blank" href="https://webflow.com/">
                {" "}
                <img src={webflow} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a target="_blank" href="https://drive.google.com/">
                {" "}
                <img  className="second" src={drive} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank" href="https://mail.google.com/">
                {" "}
                <img src={gmail} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.google.com/">
                {" "}
                <img className="second" src={google} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.youtube.com/">
                {" "}
                <img src={youtube} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.figma.com/">
                {" "}
                <img className="second"src={figma} alt="" />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a target="_blank"href="https://www.dropbox.com/">
                {" "}
                <img src={dropbox} alt="" />
              </a>
            </SwiperSlide>
          </div>
        </Swiper>
        
      </div>
      <div className="title-article">
        <h3 className=""  data-aos="fade-down">Read latest articles of Collab</h3>
        <div className="img-area row " >
            <div className="col-12 col-md-4 col-lg-4 mt-3 flex-column" data-aos="fade-down" data-aos-delay="300"><img src={photo1} alt="" />
            <div className="flex-column branding" data-aos="fade-down">
              <p>Branding</p>
              <h5>Branding with personality: <br/>What makes you stand out</h5>
              <div className="line"></div>
              <span className="data"> April 22, 2022 . 5 min read</span>
            </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 mt-3 flex-column"  data-aos="fade-down"data-aos-delay="300"><img src={photo2} alt="" />
            <div className="flex-column busines" data-aos="fade-down">
              <p>Business</p>
              <h5>Is the generic visual brand guide outdated?</h5>
              <div className="line"></div>
              <span className="data"> April 22, 2022 . 8 min read</span>
            </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 mt-3 flex-column"  data-aos="fade-down"data-aos-delay="300"><img src={photo3} alt="" /><div className="flex-column startup" data-aos="fade-down">
              <p>Startup</p>
              <h5>30 ads that made our heads turn: Making ads that convert</h5>
              <div className="line"></div>
              <span className="data"> April 22, 2022 . 4 min  read</span>
            </div></div>
        </div>
      </div>
      
    </div>
  );
};

export default İntegrates;
