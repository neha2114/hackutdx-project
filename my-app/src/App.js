import logo from './logo.svg';
import './App.css';
import SwipeableTextMobileStepper from './CarouselSwipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React is really lame!
        </a>
        <SwipeableTextMobileStepper />
      </header>
    </div>
  );
}

export default App;
