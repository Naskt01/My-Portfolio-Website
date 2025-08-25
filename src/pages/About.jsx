import React from 'react';
import '../components/About.css';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import WAVETOP from '../Assets/wave3.svg';
import WAVEBOTTOM from '../Assets/wave.svg';
import ME2 from '../Assets/Me2.png';


const About = () => {
  return (
    <section className="about-section" id="about">
      <img src={WAVETOP} alt="top wave" className="about-wave-top" />

      <div className="container about__container">
        <div className="about__me">
          <div className="about__blob"></div>
          <div className="about__blob hover"></div>
          <div className="about__me-image">
            <img src={ME2} alt="About Image" loading="lazy" />
          </div>
        </div>

        <motion.div 
          className="about__right"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -30 }} 
          transition={{ duration: 0.4 }}>
          <h5>Get To Know</h5>
          <h2>About Me!</h2>

          <h3>
            Hello, I’m Taniya Naskar — an<span className="pink"> MBA</span> graduate and a soon-to-be <span className="pink_background"> Master's in Information Systems</span> , I am passionate about building responsive, interactive, and perfomance-optimized web applications.
          </h3>
          <br />
          <h3>
            When I’m not coding, you’ll probably find me geeking out over the latest 
            <span className="pink_background"> React tricks</span>, 
            testing shiny tools like Tailwind and Framer Motion, or breaking (and fixing) my own portfolio site.
          </h3>
          <br />
          <div className="about__cards">
            <article className="about__card_div1">
              <div className="about__name">
                <FaGraduationCap className="about__icon" />
                <h4>Education</h4>
              </div>
              <h6>MS – Information Systems</h6>
              <h6>Indiana Institute of Technology</h6>
              <h6>Expected: October 2025</h6>
              <h6>GPA: 3.96/4.0</h6>
              <h6>MBA – Business Analytics</h6>
              <h6>Purdue University</h6>
              <h6>May 2024</h6>
              <h6>GPA: 3.98/4.0</h6>
            </article>

            <article className="about__card_div2">
              <div className="about__name">
                <BsCodeSlash className="about__icon" />
                <h4>Skills</h4>
              </div>
              <h6>Full-Stack Development</h6>
              <h6>JavaScript, React, Node.js</h6>
              <h6> Express, HTML/CSS</h6>
              <h6>Tailwind, Bootstrap, Vite</h6>
              <h6>Framer Motion, Git/GitHub</h6>
              <h6>SQL, NoSQL, MongoDB</h6>
              <h6>Data Mining, Data Analysis & Visualization</h6>
              <h6>OOP & DSA</h6>
            </article>
          </div>

          <a href="#contact" className="btn btn-primary">Let's Talk!</a>
        </motion.div>
      </div>
      <img src={WAVEBOTTOM} alt="bottom wave" className="about-wave-bottom" />
    </section>
  );
};

export default About;