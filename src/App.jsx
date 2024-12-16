import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home'; // Create a Home.jsx to group all home sections
import About from './components/About/About';
import Contact from './components/Home/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
