import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
      <div className='App-searchbar'>
        <SearchBar />
      </div>
      <div className="App-business-row">
        <BusinessList />
      </div>
      <div className="App-business-row">
        <BusinessList />
      </div>
      
  </div>
  );
}

export default App;
