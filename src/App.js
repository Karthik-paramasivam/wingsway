import React from 'react';
import './App.css';
import Home from './Home';
import NavMenu from './Nav';  // Correct import

function App() {
  return (
    <div>
      <NavMenu />  {/* Correct usage of NavMenu component */}
      <Home />
    </div>
  );
}

export default App;
