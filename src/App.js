import logo from './logo.svg';
import linkedin from './linkedin-brands.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, I'm Enrico</h1>
        <h2>Software Developer</h2>
        
        <FontAwesomeIcon icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/enrico-ng/" target="_blank" />
        
        
      </header>
    </div>
  );
}

export default App;
