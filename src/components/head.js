import React from 'react';
import { Slogans } from '../resources.js';

export const Head = () => (
  <div id="head">
    <div class="right"><a href="/terms">Terms</a></div>
    <div class="right"><a href="/privacy">Privacy</a></div>
    <div class="right"><a href="/about">About</a></div>
    <div>{Slogans.head}</div>
  </div>
);
