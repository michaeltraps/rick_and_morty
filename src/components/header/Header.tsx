import React from 'react';
import logo from '../../assets/logo.png';

import './header.css';

const Header = () => {
  return (
    <div className='rick__header'>
      <div className='rick__header-title'>
        {/* <h1>Rick and Morty</h1> */}
        <img src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Header;
