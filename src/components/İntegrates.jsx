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
const İntegrates = () => {
  return (
    <div className="container ">
      <div className="row" data-aos="fade-up">
        <img className="img-fluid" src={demo} alt="" />
      </div>
      <div className="integrate d-flex" data-aos="fade-down">
        <h1>
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
          <div className="top-integrate d-flex row mt-2  ">
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
          <div className="top-integrate d-flex row mt-2  ">
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
        <div>
        <h3>Read latest articles of Collab</h3>
      </div>
      </div>
      
    </div>
  );
};

export default İntegrates;
