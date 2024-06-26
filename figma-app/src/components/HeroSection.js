import React from 'react';
import styles from './HeroSection.module.css'; // Ensure correct path and file name
import hero from './hero.jpeg';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>SINC Partners is a service incubation company</h1>
        <p>Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).</p>
        <button className={styles.ctaButton} onClick={() => window.location.href = '#'}>Sign up with us</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={hero} alt="Hero" className={styles.heroImage} />
      </div>
    </div>
  );
};

export default HeroSection;
