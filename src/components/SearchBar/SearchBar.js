import React from 'react';
import './SearchBar.css';

function SearchBar() { // alternative: const SearchBar = () => 
    const sort_by = { // this can be moved outside function
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    // Answer Key: created function 'const renderSortByOptions = () =>
    // Object.keys(sort_by) --> returns the object's keys
    // .map((sortByOption) => { let sortByOptionValue = sortByOptions[sortByOption]; return <li>...</li>}) --> maps through the keys and accesses value
    const keys = ['Best Match', 'Highest Rated', 'Most Reviewed'];

    const listItems = keys.map( key => <li key={sort_by[key]}>{key}</li>);

    return (
        <div className='SearchBar-parent'>
            <div className='SearchBar-sortby'>
                <ul>{listItems}</ul> 
                {/* instead of listItems, calls renderSortByOptions() here*/}
            </div>
            <div className='SearchBar-input'>
                <form>
                    <input placeholder='Search Businesses'></input>
                    <input placeholder='Where?'></input>
                </form>
            </div>
            <div>
                <button className='SearchBar-button'>Let's Go</button>
            </div>
        </div>
    )
}

export default SearchBar;