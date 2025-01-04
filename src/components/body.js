import React from 'react';
import { ImagePaths } from '../resources.js';

export const Body = () => (
  <div id="body">
  {ImagePaths.map((path, index) => (
    <img className="square" key={index} src={path} alt={path}/>
  ))}
  </div>
);
