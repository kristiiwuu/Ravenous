import React from 'react';
import './Business.css';
function Business( {business} ) {
    return (
        <div className='Business-parent'>
            <div className='Business-imgContainer'>
                <img className='Business-image' src={business.img} alt='sushi'></img>
            </div>
            <h3 className='Business-name'>{business.name}</h3>
            <div className='Business-info'>
                <div className='Business-address'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipcode}</p>
                </div>
                <div className='Business-misc'>
                    <p>{business.category}</p>
                    <p>{business.stars} stars</p>
                    <p>{business.reviews} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;

