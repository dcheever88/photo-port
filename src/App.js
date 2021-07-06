import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
require('dotenv').config();

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
    );
}

export default App;
