// src/components/About/About.jsx
import React from 'react';
import HeroAbout from '../components/About/HeroAbout';
import WhoWeAre from '../components/About/who-we-are';
import PillarsSection from '../components/About/PillarsSection';
import AnimatedCards from '../components/About/AnimatedCards';
import BillingPartners from '../components/About/BillingPartners';
import StatsSection from '../components/About/StatsSection';
import SplitSection from '../components/About/SplitSection';
import TechPartners from '../components/About/TechPartners';

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
