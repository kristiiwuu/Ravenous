import React from 'react';
import Business from '../Business/Business.js';
import './BusinessList.css';

function BusinessList(props) {
    const indvBusiness = props.businesses.map((business) => {
                                            // need key
        return <Business business={business} key={business.id}/>; 
    });
    return (
        <div className='BusinessList-row'>
            {indvBusiness}
        </div>
    )
}

export default BusinessList;