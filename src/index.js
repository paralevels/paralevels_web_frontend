import React from 'react';
import ReactDOM from 'react-dom/client';
import { Head } from './components/head.js';
import { Body } from './components/body.js';
import { Foot } from './components/foot.js';

import './css/index.css';

const App = () => (
  <div id="app">
    <Head />
    <Body />
    <Foot />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
