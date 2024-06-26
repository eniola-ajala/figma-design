import React from 'react';
import styles from './StudioPortfolio.module.css';
import logo1 from './logo1.jpeg';

const StudioPortfolio = () => {
  
  const logos = Array.from({ length: 48 }, (_, index) => ({ id: index + 1, src: logo1 }));

  return (
    <div className={styles.container}>
      <h2>Our Studio Portfolio</h2>
      <p>Our 2024 Service Incubator Portfolio Companies</p>
      <div className={styles.logos}>
        {logos.map((logo, index) => (
          <div className={styles.logoCard} key={logo.id}>
            <img src={logo.src} alt={`Logo ${logo.id}`} className={styles.logo} />
          </div>
        ))}
      </div>
      <button className={styles.linkButton} onClick={() => window.location.href = '#'}>
        View All Companies →
      </button>
    </div>
  );
};

export default StudioPortfolio;
