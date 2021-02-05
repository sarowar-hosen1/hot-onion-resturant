import React from 'react';
import './MainBanner.css'

const MainBanner = () => {
    return (
        <div className="header-banner">
                <h2 className='text-center px -4 mb-4'>BEST FOOD WATING FOR YOU HEALTH</h2>
                <div className='search'>
                    <input type="text" placeholder='Search food items' className='form-control' />
                    <button className=''>Search</button>
                </div>
        </div>
    );
};

export default MainBanner;