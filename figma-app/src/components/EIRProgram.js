import React, { useState } from 'react';
import styles from './EIRProgram.module.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'; 


import icon1 from './icon1.svg';
import icon2 from './icon2.svg';

const EIRProgram = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const sections = [
    {
      title: 'Application and Selection',
      description:
        "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.",
      icon: icon1,
      color: '#303030'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    {
      title: 'Alignment Meeting and Proposal Submission',
      description:
        "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      icon: icon2,
      color: '#F47733'
    },
    
  ];

  const navigateNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const navigatePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  return (
    <div className={styles.container}>
      <h2>Join Our Entrepreneur In Residence (EIR) Program</h2>
      <p>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
      <div className={styles.sections}>
        {sections.slice(currentIndex, currentIndex + 4).map((section, index) => (
          <div className={styles.section} key={index}>
            <div className={styles.circle} style={{ backgroundColor: section.color }}>
             
              <img src={section.icon} alt={`Icon ${index}`} />
            </div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
      <button className={styles.linkButton} onClick={() => window.location.href = '#'}>
        Support the Future →
      </button>
      <div className={styles.navigation}>
        <button onClick={navigatePrevious}><FaAngleLeft /></button>
        <button onClick={navigateNext}><FaAngleRight /></button>
      </div>
    </div>
  );
};

export default EIRProgram;
