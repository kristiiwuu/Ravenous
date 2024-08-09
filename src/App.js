import './App.css';
import Business from './components/Business/Business.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
      <div className="App-business-row">
        <Business />
        <Business />
        <Business />
      </div>
      
  </div>
  );
}

export default App;
