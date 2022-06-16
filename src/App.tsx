import React from 'react';
import { Header, Footer } from './components';
import { Characters } from './containers';

import './App.css';

const App = () => {
  return (
    <div className='rick__app'>
      <Header />
      <Characters />
      <Footer />
    </div>
  );
};

export default App;
