import React from 'react';
import logo from './logo.svg';
import './App.css';

import Index from './homepage/index'

require('dotenv').config()



function App() {
  return (
    <div className="App">
      <Index/>

    </div>
  );
}

export default App;
