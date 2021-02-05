import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import FoodMenu from '../MenuList/MenuList';
import Footer from '../Footer/Footer';
import MainBanner from '../MainBanner/MainBanner';

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <FoodMenu />
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;