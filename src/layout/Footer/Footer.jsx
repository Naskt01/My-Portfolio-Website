import React from 'react'
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <a href="#" className='footer__logo'>TANIYA NASKAR</a>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/taniyanaskar07/" target="_blank" rel="noreferrer" title="LinkedIn"><BsLinkedin/></a>
          <a href="https://github.com/Naskt01"target="_blank" rel="noreferrer" title="GitHub"><FaGithubAlt /></a>
        </div>
        <div className="footer__copyright">
          <small>Copyright © {new Date().getFullYear()} Taniya Naskar. All rights reserved.</small>
        </div>
      </div>      
    </footer>
  )
}

export default Footer