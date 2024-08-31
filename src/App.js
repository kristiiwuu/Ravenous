import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const businessObj1 = {
  name: 'Restaurant 1',
  img: 'https://www.craftycookbook.com/wp-content/uploads/2024/04/nigiri-sushi-1200.jpg',
  address: '1010 Paddington Way',
  city: 'Bordertown', 
  state: 'NY',
  zipcode: "10101",
  category: 'Italian',
  stars: 4.5,
  reviews: 90
};

const businessObj2 = {
  name: 'Restaurant 2',
  img: 'https://www.craftycookbook.com/wp-content/uploads/2024/04/nigiri-sushi-1200.jpg',
  address: '1010 Paddington Way',
  city: 'Bordertown', 
  state: 'NY',
  zipcode: "10101",
  category: 'Italian',
  stars: 4.5,
  reviews: 90
};

const businessObj3 = {
  name: 'Restaurant 3',
  img: 'https://www.craftycookbook.com/wp-content/uploads/2024/04/nigiri-sushi-1200.jpg',
  address: '1010 Paddington Way',
  city: 'Bordertown', 
  state: 'NY',
  zipcode: "10101",
  category: 'Italian',
  stars: 4.5,
  reviews: 90
};

const businesses = [businessObj1, businessObj2, businessObj3];

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
        <BusinessList businesses={businesses}/>
      </div>      
  </div>
  );
}

export default App;
