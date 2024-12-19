// src/components/Home/Home.jsx
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ServicesSection from '../components/Home/ServicesSection';
import ScheduleDemo from '../components/Home/ScheduleDemo';
import SpecialitiesSection from '../components/Home/SpecialitiesSection';
import TechnologyPartners from '../components/Home/TechnologyPartners';
import MakeSchedule from '../components/Home/MakeSchedule';
import RevenueCycle from '../components/Home/RevenueCycle';
import CounterSection from '../components/Home/CounterSection';
import Testimonials from '../components/Home/Testimonials';
import ContactSection from '../components/Home/ContactSection';


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
