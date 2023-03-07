import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into furure before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h1>Links</h1>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h1>Company</h1>
          <p>Terms & conditions</p>
          <p>Privacy</p>
          <p>Contacs</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h1>Get in Touch</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>Social Media</p>
          <p>084-57676</p>
          <p>Info@hue.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
