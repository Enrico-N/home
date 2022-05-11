import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, I'm Enrico</h1>
        <h2>Software Developer</h2>
        
        <FontAwesomeIcon icon={faLinkedin} className="Linkedin-link" href="https://www.linkedin.com/in/enrico-ng/" target="_blank" />
        
        
      </header>
    </div>
  );
}

export default App;
