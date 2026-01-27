import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Head } from './components/head.js';
import { Body } from './components/body.js';
import { Foot } from './components/foot.js';
import { Terms } from './components/terms.js';
import { Privacy } from './components/privacy.js';
import { About } from './components/about.js';
import { Product } from './components/product.js';
import { Murmur } from './components/murmur.js';

import './css/index.css';

const Homepage = () => (
  <div id="app">
    <Head />
    <Body />
    <Foot />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/murmur" element={<Murmur />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
