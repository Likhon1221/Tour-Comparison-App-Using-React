// Task 1. App.jsx (Root Component)

import React from 'react';
import Gallery from './Gallery';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Tour Comparison App</h1>
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  );
};

export default App;