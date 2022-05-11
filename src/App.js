import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, I'm Enrico</h1>
        <h2>Software Developer</h2>
        <div id='Social-icons'>
        <FontAwesomeIcon icon={faLinkedin} href="https://www.linkedin.com/in/enrico-ng/" target="_blank"/>
        <FontAwesomeIcon icon={faGithub} href="https://github.com/Enrico-N" target="_blank"/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
