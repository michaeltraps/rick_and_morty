import React from 'react';
import footer from '../../assets/RickMorty_Transparent.png';

import './footer.css';

const Footer = () => {
  return (
    <div className='rick__footer'>
      <p>© 2022 Michael Trapani</p>
      <img src={footer} alt='Rick holding Morty and pushing towards screen' />
      <p>Built using the Rick and Morty API</p>
    </div>
  );
};

export default Footer;
