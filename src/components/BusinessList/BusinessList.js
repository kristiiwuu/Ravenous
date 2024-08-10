import React from 'react';
import Business from '../Business/Business.js';
import './BusinessList.css';

function BusinessList() {
    return (
        <div className='BusinessList-row'>
            <Business />
            <Business />
            <Business />
        </div>
    )
}

export default BusinessList;