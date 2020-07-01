// importing required package, style file, and page
import React from 'react';
import './styles/App.css';
import Portfolio from './pages/Portfolio'

function App() {
  return (
    // rendering portfolio page
    <div className="App">
      <Portfolio/>
    </div>
  );
}

// exporting file to be used in other parts of the application
export default App;
