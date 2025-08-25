import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';

const HeroSocials = () => {
  return (
    <div className='hero__socials'>
      <a href="https://www.linkedin.com/in/taniyanaskar07/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Naskt01" target="_blank" rel="noopener noreferrer">
        <FaGithubAlt />
      </a>
    </div>
  );
};

export default HeroSocials;