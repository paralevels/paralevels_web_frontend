import React from 'react';

export const Foot = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="foot">
    &copy; {currentYear} Paralevels. All rights reserved.
    </div>
  );
};
