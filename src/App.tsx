import React from 'react'
import { Header } from './components';
import { Characters } from './containers';

import './App.css';

const App = () => {
  return (
    <div className='rick__app'>
      <Header />
      <Characters />
    </div>
  )
}

export default App
