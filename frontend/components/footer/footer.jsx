import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
      <div className="footer-container">
        <p>© Charlie Sheppard | 2022</p>
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/charlespsheppard/" target="_blank" className="footer-social-link"><FaLinkedin size={28} /></a>
          <a href="https://github.com/charliepsheppard/trendy_camp" target="_blank" className="footer-social-link"><FaGithub size={28} /></a>
        </div>
      </div>
  );
};

export default Footer;