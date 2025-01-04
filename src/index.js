import React from 'react';
import ReactDOM from 'react-dom/client';
import { ImagePaths } from './resources.js';
import './css/index.css'; // Import your CSS file

const App = () => (
  <div id="squares">
  {ImagePaths.map((path, index) => (
    <img class="square" key={index} src={path} alt={path}/>
  ))}
  </div>
);
const appRoot = ReactDOM.createRoot(document.getElementById('app'));
appRoot.render(<App/>);
