// src/components/About/About.jsx
import React from 'react';
import HeroAbout from './HeroAbout';
import WhoWeAre from './who-we-are';
import PillarsSection from './PillarsSection';
import AnimatedCards from './AnimatedCards';
import BillingPartners from './BillingPartners';
import StatsSection from './StatsSection';
import SplitSection from './SplitSection';
import TechPartners from './TechPartners';

const About = () => {
  return (
    <div>
      <HeroAbout />
      <WhoWeAre />
      <PillarsSection />
      <AnimatedCards />
      
      <StatsSection />
      <BillingPartners />
      <SplitSection />
      <TechPartners />
     
    </div>
  );
};

export default About;
