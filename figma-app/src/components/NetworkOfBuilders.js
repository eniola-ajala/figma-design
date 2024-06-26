// src/components/NetworkOfBuilders.js
import React from 'react';
import './NetworkOfBuilders.css';

const NetworkOfBuilders = () => {
  return (
    <section className="network-of-builders">
      <h2>Network of builders helping startup scale</h2>
      <div className="cards">
        <div className="card">
          <h3>Work with Service Incubators to expedite your time-to-market</h3>
          <p>Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
          <button className="btn">Learn More</button>
        </div>
        <div className="card">
          <h3>Access funding after your mvp is validated </h3>
          <p>Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default NetworkOfBuilders;
