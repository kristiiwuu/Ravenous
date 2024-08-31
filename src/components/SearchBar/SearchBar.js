import React, { useState } from 'react';
import styles from './SearchBar.css'; // can name 'styles' anything; could be classes, Style, etc

function SearchBar(props) { // alternative: const SearchBar = () => 
    
    const [searchTerm,setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleSearch = ({target}) => {
        setSearchTerm(target.value);
    };

    const handleLocation = ({target}) => {
        setLocation(target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchYelp(searchTerm, location, sortBy); // send info to top-level 
        setSearchTerm('');
        setLocation('');
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    }
    
    const sort_by = { // this can be moved outside function
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const getSortByClass = (sortByOptionValue) => {
        if(sortBy == sortByOptionValue) {
            return 'active';
        }
        return "";
    };

    // Answer Key: created function 'const renderSortByOptions = () =>
    // Object.keys(sort_by) --> returns the object's keys
    // .map((sortByOption) => { let sortByOptionValue = sortByOptions[sortByOption]; return <li>...</li>}) --> maps through the keys and accesses value
    const keys = ['Best Match', 'Highest Rated', 'Most Reviewed'];

    const listItems = keys.map( key => {
        let sortByOptionValue = sort_by[key];
        return (
            <li 
                className={getSortByClass(sortByOptionValue)}
                key={sortByOptionValue}
                onClick={() => {
                    handleSortByChange(sortByOptionValue);
                }}
            >
                {key}
            </li>
        );
    });

    return (
        <div className='SearchBar-parent'>
            <div className='SearchBar-sortby'>
                <ul>{listItems}</ul> 
                {/* instead of listItems, calls renderSortByOptions() here*/}
            </div>
            <form onSubmit={handleSubmit}> 
            {/* put onSubmit here, not in button tag */}
                <div className='SearchBar-input'>
                    <input value={searchTerm} placeholder='Search Businesses' onChange={handleSearch}></input>
                    <input value={location} placeholder='Where?' onChange={handleLocation}></input>
                </div>
                <div>
                    <button className='SearchBar-button' type="submit">Let's Go</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;

