// src/components/Home/Home.jsx
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ScheduleDemo from './ScheduleDemo';
import SpecialitiesSection from './SpecialitiesSection';
import TechnologyPartners from './TechnologyPartners';
import MakeSchedule from './MakeSchedule';
import RevenueCycle from './RevenueCycle';
import CounterSection from './CounterSection';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ScheduleDemo />
      <SpecialitiesSection />
      <TechnologyPartners />
      
      <RevenueCycle />
      <CounterSection />
      <MakeSchedule />
      
      <ContactSection />
      <Testimonials />
      
    </div>
  );
};

export default Home;
