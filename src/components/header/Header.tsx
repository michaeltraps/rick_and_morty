import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className='rick__header'>
      <div className='rick__header-title'>
        <h1>Rick and Morty</h1>
      </div>
      <div className='rick__header-subtitle'>
        <h2>Portal Tech</h2>
        <h3>Use the portal to grab characters from across the multiverse</h3>
      </div>
    </div>
  );
};

export default Header;
