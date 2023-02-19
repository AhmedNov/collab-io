import React from "react";
import "../styles/footer.css";
import halfpicture from "../assets/footer/half-pictur.svg";
import halfpicture2 from "../assets/footer/half-picture2.svg";
import white from "../assets/footer/white.svg";
import logo from "../assets/img/logo.svg";
import {AiOutlineMail } from "react-icons/ai";
import {BsTelephone } from "react-icons/bs";
import {BsGlobe } from "react-icons/bs";
import {FaFacebookF } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="challenge">
        <div className="d-flex half-1" data-aos="fade-right">
          <img src={halfpicture} alt="" />
        </div>
        <div className="challenge-title" data-aos="fade-down">
          <h2>
            99.9% teams love Collab.Not convinced you’re one?We love a
            challenge.
          </h2>
          <div className="challenge-bottom">
            <a href="#">Start your free trial</a>
            <img src={white} alt="" />
          </div>
        </div>

        <div className="d-flex half-2" data-aos="fade-left">
          <img src={halfpicture2} alt="" />
        </div>
      </div>
      <div className=" container footer d-flex flex-column">
        <div className="top-footer d-flex">
          <div className="left-footer col-12 col-md-5">
            <img src={logo} alt="" />
          </div>
          <div className="right-footer col-12 col-md-7 d-flex">
            <div className="  d-flex flex-column">
              <h5>Quick Links</h5>
              <a href="">Features</a>
              <a href="">About</a>
              <a href="">Pricing</a>
              <a href=""> eCommerce</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
              <a href="">Careers</a>
            </div>
            <div className="d-flex flex-column">
              <h5>Template</h5>
              <a href="">Style Guide</a>
              <a href="">Licences</a>
              <a href="">Changelog</a>
              <a href="">Instructions</a>
              <a href="">Sign In</a>
              <a href="">Sign Up</a>
              <a href="">Forgot Password</a>
              <a href="">
                Password <br />
                Protected
              </a>
              <a href="">404 Page</a>
            </div>
            <div className=" d-flex flex-column">
              <h5>Get In Touch</h5>
              <a href=""> <AiOutlineMail/> Support@collab.com</a>
              <a href=""><BsTelephone/> +1-202-555-0144</a>
              <a href=""><BsGlobe /> Collab.webflow.io</a>
              <div className="d-flex social">
                <a href=""><FaFacebookF/></a>
                <a href=""><FaInstagram/></a>
                <a href=""><FaTwitter/></a>
                <a href=""><BsGlobe/></a>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex bottom-footer">
            <p>© All rights reserved by Conversion Flow</p>
            <p>Powered by Webflow </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
