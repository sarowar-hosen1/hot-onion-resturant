import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './MenuList.css';
import Category from '../Category/Category';
import MenuLoader from '../Preloader/MenuLoader';
import { CartContext } from '../../App';



const FoodMenu = () => {
    const [currentMenu, setCurrentMenu] = useState([]);
    const [cart, setCart] = useContext(CartContext)
    const history = useHistory();

    useEffect(() => {
        fetch('https://polar-coast-28747.herokuapp.com/menu-lunch')
            .then(res => res.json())
            .then(lunch => setCurrentMenu(lunch))
    }, [])

    const breakfastMenuHandle = () => {
        fetch('https://polar-coast-28747.herokuapp.com/menu-breakfast')
            .then(res => res.json())
            .then(breakfast => setCurrentMenu(breakfast))
    }

    const lunchMenuHandle = () => {
        fetch('https://polar-coast-28747.herokuapp.com/menu-lunch')
            .then(res => res.json())
            .then(lunch => setCurrentMenu(lunch))
    }

    const dinnerMenuHandle = () => {
        fetch('https://polar-coast-28747.herokuapp.com/menu-dinner')
            .then(res => res.json())
            .then(dinner => setCurrentMenu(dinner))
    }

    return (
        <div className='container'>
            <ul className="nav justify-content-center my-4">
                <li className="nav-item">
                    <Link onClick={breakfastMenuHandle} className="nav-link">Breakfast</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={lunchMenuHandle} className="nav-link">Lunch</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={dinnerMenuHandle} className="nav-link">Dinner</Link>
                </li>
            </ul>
            <div className="row">
                {
                    currentMenu.length ?
                        currentMenu.map(menu => <Category menu={menu} key={menu.id}></Category>)
                        :

                        <MenuLoader></MenuLoader>
                }
                {
                    cart.length ?
                        <button onClick={() => history.push('/cart')} className="btn-brand px-5 d-block mx-auto my-5">Checkout Your Food</button>
                        :
                        <button className="btn-disable px-5 d-block mx-auto my-5" disabled>Checkout Your Food</button>
                }
            </div>
        </div>
    );
};

export default FoodMenu;
