import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lake Line</h1>
        <main>
          <Forecast />
          {/* add trail fetching component */}
        </main>
        <footer>
          Page created by Ross Perry
        </footer>
      </header>
    </div>
  );
}

export default App;
