import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './utils/Yelp';
import { useState } from 'react';

function App() {

  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async(term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy); // wait for response
    setBusinesses(businesses);
    console.log(businesses);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
      <div className='App-searchbar'>
        <SearchBar searchYelp={searchYelp}/>
      </div>
      <div className="App-business-row">
        <BusinessList businesses={businesses}/>
      </div>      
  </div>
  );
}

export default App;
