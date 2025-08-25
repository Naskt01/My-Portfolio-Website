import React from 'react';
import CTA from './CTA';
import Header from '../layout/Header/Header';
import MYPIC from '../Assets/mee.png';
import WAVETOP from '../Assets/wave3.svg';
import WAVEBOTTOM from '../Assets/wave.svg';
import HeroSocials from './HeroSocials';
import '../components/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <img src={WAVETOP} alt="top wave" className="hero-wave-top" />
      <div className="hero-header-wrapper">
        <Header />
      </div>

      <div className="container hero-container">
        <div className='hero-text'>
          <div>
            <h1 className="hi">
              Hi<span className="wave1">👋</span>
              <small> there! I'm glad you're here 💻 </small>
            </h1> 
            <h2>
              I’m <strong>Taniya</strong>, your next <br /> favourite developer.
            </h2>
            <CTA />
          </div>
          <div className="avatar__container">
            <div className="round__bg"></div>
            <img src={MYPIC} alt="Taniya Avatar" className="my__img" loading="lazy" />
            <div className="blob__bg"></div>
          </div>
        </div>
        <HeroSocials />
        <a href="#about" className="scroll__down">Scroll Down</a>
      </div>
      <img src={WAVEBOTTOM} alt="bottom wave" className="wave-bottom" />
    </section >
  );
};

export default Hero;