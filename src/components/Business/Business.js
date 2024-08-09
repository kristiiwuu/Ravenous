import React from 'react';
import './Business.css';
function Business() {
    return (
        <div className='Business-parent'>
            <img className='Business-img' src='https://www.craftycookbook.com/wp-content/uploads/2024/04/nigiri-sushi-1200.jpg' alt='sushi'></img>
            <h3 className='Business-name'>Restaurant Name</h3>
            <div className='Business-info'>
                <div className='Business-address'>
                    <p>1010 Paddington Way</p>
                    <p>Bordertown</p>
                    <p>NY 10101</p>
                </div>
                <div className='Business-misc'>
                    <p>Italian</p>
                    <p>4.5 stars</p>
                    <p>90 reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;