import React from 'react';
import { Head } from './head.js';
import { Foot } from './foot.js';

const Body = () => (
<div id="body" class="liminal">

<p>Paralevels is a company that creates simple, unique experiences shaped by twilight, fog, and mystery. We explore unusual ideas and turn them into quiet, atmospheric encounters designed to spark curiosity and invite discovery. The experience itself is the product.</p>

<p>For more information, contact support@paralevels.com.</p>

</div>
);

export const Product = () => (
  <div id="app">
    <Head />
    <Body />
    <Foot />
  </div>
);
