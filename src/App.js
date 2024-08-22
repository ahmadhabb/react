import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Pastikan jalur file benar
import Footer from './components/Footer'; // Pastikan jalur file benar
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Technology from './pages/Technology';
import Solution from './pages/Solution';
import ContactUs from './pages/ContactUs.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
