import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import Home from './Pages/HomePage'; // Create a Home.jsx to group all home sections
import About from './Pages/AboutPage';
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
