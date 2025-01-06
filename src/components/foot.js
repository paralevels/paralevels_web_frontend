import React from 'react';

export const Foot = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="foot">
    © {currentYear} Paralevels. All rights reserved.
    </div>
  );
};
