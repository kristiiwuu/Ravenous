import React from 'react';

function SearchBar() {
    const sort_by = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };


    return (
        <div className='SearchBar-parent'>
            <div className='SearchBar-sortby'>
                
            </div>
            <div className='SearchBar-input'>
                <form>
                    <input placeholder='Search Business'></input>
                    <input placeholder='Where?'></input>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;