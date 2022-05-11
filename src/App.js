import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, I'm Enrico</h1>
        <h2>Software Developer</h2>
        
        <a
          className="Linkedin-link"
          href="https://www.linkedin.com/in/enrico-ng/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Linkedin Profile
        </a>
        
      </header>
    </div>
  );
}

export default App;
