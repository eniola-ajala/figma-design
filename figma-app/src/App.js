import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import NetworkOfBuilders from './components/NetworkOfBuilders';
import AreaOfFocus from './components/AreaOfFocus';
import StudioPortfolio from './components/StudioPortfolio';
import CoFoundWithUs from './components/CoFoundWithUs';
import EIRProgram from './components/EIRProgram';
import SINCInvestorsNetwork from './components/SINCInvestorsNetwork';
import EquityJobs from './components/EquityJobs';
import FeaturedIn from './components/FeaturedIn';
import Newsletter from './components/Newsletter';
import './App.css';
import BlogsResources from './components/BlogsResources';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <NetworkOfBuilders />
      <AreaOfFocus />
      <StudioPortfolio />
      <CoFoundWithUs />
      <EIRProgram />
      <SINCInvestorsNetwork />
      <EquityJobs />
      <BlogsResources/>
      <FeaturedIn />
      <Newsletter />
      
    </div>
  );
}

export default App;
