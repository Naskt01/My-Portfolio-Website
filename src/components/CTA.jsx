import React from 'react';
import { FiDownload } from "react-icons/fi";


const CTA = () => {
  return (
    <div className="cta">
        <a
        href="https://drive.google.com/uc?export=download&id=1XyzAbC12345ABCDE"
        download
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FiDownload className="cta-icon"/> Resume
        </a>
        <a href="#contact" className="btn btn-primary">
            Let's Connect!
        </a>
    </div>
  );
};

export default CTA;