import React from 'react';
import logo from '../../assets/logo.png';

import './header.css';

const Header = () => {
  return (
    <div data-testid='Header-1' className='rick__header'>
      <div className='rick__header-title'>
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Header;
