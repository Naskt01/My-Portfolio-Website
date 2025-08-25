import React from 'react';
import "../components/Portfolio.css";
import { motion } from 'framer-motion';
import WAVE from '../Assets/wave3.svg';
import WAVEBOTTOM from '../Assets/wave.svg';
import IMAGE1 from "../Assets/DiceGame.png";
import IMAGE2 from "../Assets/DrumKit.png";
import IMAGE3 from "../Assets/Simon-Game.png";


const data = [

  {
    id: 1,
    image: IMAGE1,
    title: "Dice Game",
    github: "https://github.com/Naskt01/The-Dice-Challenge",
    demo: "https://naskt01.github.io/The-Dice-Challenge/",
  },

  {
    id: 2,
    image: IMAGE2,
    title: "Drum Kit",
    github: "https://github.com/Naskt01/Drum-Kit",
    demo: "https://naskt01.github.io/Drum-Kit/",
  },

  {
    id: 3,
    image: IMAGE3,
    title: "The Simon Game",
    github: "https://github.com/Naskt01/The-Simon-Game",
    demo: "https://naskt01.github.io/The-Simon-Game/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <img src={WAVE} alt="top wave" className="portfolio-wave-top" />
      <motion.div 
        className="portfolio-heading" 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -30 }} 
        transition={{ duration: 0.4 }}
      >
        <h5>My Recent Projects</h5>
        <h2>Portfolio</h2>
      </motion.div>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <p className="end-line">
        more coming soon<span className="dots"></span>
      </p>
      <img src={WAVEBOTTOM} alt="bottom wave" className="portfolio-wave-bottom" />
    </section>
  );
}

export default Portfolio;
