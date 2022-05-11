import logo from './logo.svg';
import './App.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, I'm Enrico</h1>
        <h2>Software Developer</h2>
        
        <i class="fa-brands fa-linkedin" href="https://www.linkedin.com/in/enrico-ng/">
        <a
          className="Linkedin-link"
          href= ""
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        </i>
        
      </header>
    </div>
  );
}

export default App;
