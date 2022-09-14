import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h5>Copyright <sup>&copy;</sup> 1999 - 2022 ROBOTICI.</h5>
        All Rights Reserved.


        <a
          className="App-link"
          href="mailto:info@robotici.com"
          rel="noopener noreferrer"
        >
          info@robotici.com
        </a>
      </header>
    </div>
  );
}

export default App;
