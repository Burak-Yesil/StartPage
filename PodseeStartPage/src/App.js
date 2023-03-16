import logo from './PodseeLogo3.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>
          See the Discussion
        </h2>
        <p>
          Updates Coming Soon!!!
        </p>

        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank" rel="noopener noreferrer">
          <button className="btn-watch-video">Try Now</button>
        </a>

      </header>
    </div>
  );
}

export default App;
