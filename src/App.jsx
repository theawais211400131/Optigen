import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from './pages/Home';
import Footer from './pages/Footer';
import Navbar from './components/Navbar'; // shared across sections

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Home scrollTo="project" />} />
        <Route path="/services" element={<Home scrollTo="services" />} />
        <Route path="/howwework" element={<Home scrollTo="howwework" />} />
        <Route path="/customer" element={<Home scrollTo="customer" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
