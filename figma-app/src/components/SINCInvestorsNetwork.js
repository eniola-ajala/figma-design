import React from 'react';
import './SINCInvestorsNetwork.css';

const SINCInvestorsNetwork = () => {
  return (
    <section className="sinc-investors-network">
      <h2>SINC Investors Network</h2>
      <p>Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuations, you are guaranteed at least 2x-5x, usually being the first to invest.</p>
      <p><strong>Disclaimer:</strong> These deal flows are projections and may vary from stage to stage and venture to venture. The guarantee applies to Deal 1, typically the first to invest.</p>
      
      <div className="section-heading">
        <h3><strong>Micro Angel Investors & Service Incubators</strong> (Invest from $500 & above)</h3>
      </div>
      
      <div className="deals">
        <div className="deal">
          <h3>Deal 1</h3>
          <p>✓ Idea Stage: $5k for 5% Equity<br />
          ✓ Expected Revenue at This Stage: $0/mth<br />
          ✓ Duration of Raise: 1 month<br />
          ✓ Who Can Invest: People with Domain Expertise and Advisors</p>
        </div>
        <div className="deal">
          <h3>Deal 2</h3>
          <p>✓ Build Stage: $25k worth of service for 10% Equity<br />
          ✓ Expected Revenue at This Stage: $100+/mth<br />
          ✓ Duration of Raise: 1-3 months<br />
          ✓ Who Can Invest: Developers, Engineers, Growth Marketers</p>
        </div>
        <div className="deal">
          <h3>Deal 3</h3>
          <p>✓ Scale Stage: $100k for 15% Equity<br />
          ✓ Expected Revenue at This Stage: $1,000+/mth<br />
          ✓ Duration of Raise: 3-6 months<br />
          ✓ Who Can Invest: Venture Capitalists, Strategic Investors</p>
        </div>
        <div className="deal">
          <h3>Deal 4</h3>
          <p>✓ Expansion Stage: $250k for 20% Equity<br />
          ✓ Expected Revenue at This Stage: $10,000+/mth<br />
          ✓ Duration of Raise: 6-12 months<br />
          ✓ Who Can Invest: Institutional Investors, Angel Networks</p>
        </div>
      </div>
      
      <div className="section-heading">
        <h3><strong>Angel Investors and Venture Capital</strong> (Invest from $50k & above)</h3>
      </div>
      
      <div className="deals">
        <div className="deal">
          <h3>Deal 5</h3>
          <p>✓ Early Stage: $50k for 25% Equity<br />
          ✓ Expected Revenue at This Stage: $5,000+/mth<br />
          ✓ Duration of Raise: 1-3 months<br />
          ✓ Who Can Invest: High Net Worth Individuals, Early Stage Investors</p>
        </div>
        <div className="deal">
          <h3>Deal 6</h3>
          <p>✓ Growth Stage: $200k for 30% Equity<br />
          ✓ Expected Revenue at This Stage: $20,000+/mth<br />
          ✓ Duration of Raise: 3-6 months<br />
          ✓ Who Can Invest: Venture Capital Firms, Growth Equity Investors</p>
        </div>
        <div className="deal">
          <h3>Deal 7</h3>
          <p>✓ Expansion Stage: $500k for 35% Equity<br />
          ✓ Expected Revenue at This Stage: $50,000+/mth<br />
          ✓ Duration of Raise: 6-12 months<br />
          ✓ Who Can Invest: Institutional Investors, Family Offices</p>
        </div>
        <div className="deal">
          <h3>Deal 8</h3>
          <p>✓ Late Stage: $1M for 40% Equity<br />
          ✓ Expected Revenue at This Stage: $100,000+/mth<br />
          ✓ Duration of Raise: 12+ months<br />
          ✓ Who Can Invest: Private Equity Firms, Strategic Investors</p>
        </div>
      </div>
      
      <button className="join-button">Join SINC Network</button>
    </section>
  );
};

export default SINCInvestorsNetwork;
