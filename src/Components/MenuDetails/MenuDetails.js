import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext, QuantityContext } from '../../App';
import './MenuDetails.css'

const MenuDetails = () => {
    const { menuId } = useParams();

    const [item, setItem] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useContext(CartContext)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        fetch(`https://polar-coast-28747.herokuapp.com/menu/${menuId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const handleAddToCart = (item) => {
        const alreadyAdded = cart.find(crt => crt._id === item._id)
        item.quantity = quantity;
        setCart([...cart, item]);
        setIsSuccess(true)
        if (alreadyAdded) {
            const remainingCart = cart.filter(crt => crt._id !=item)
            setCart(remainingCart)
        }else{
            setCart([...cart, item]);
        }
    }


    return (
        <div className="container">
            <div className='row d-flex justify-content-center align-items-center menu-details'>
                <div className="col-md-7">
                    <div className="desc-content">
                        <h1>{item.food}</h1>
                        <p>{item.description}</p>
                        <div className='d-flex align-items-center'>
                            <h3>$ <span id='menu-price'>{item.price}</span></h3>
                            <div className='menu-quantity-handler d-flex align-items-center justify-content-center'>
                                <button onClick={() => setQuantity(quantity + 1)} className='btn font-weight-bold'>+</button>
                                <input id='menu-count' type="number" value={quantity} className='text-center w-25 border-0' />
                                <button onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)} className='btn btn-outline-none text-danger font-weight-bold'>-</button>
                            </div>
                        </div>
                        <button
                            onClick={() => handleAddToCart(item)}
                            className='add-cart-btn'>
                            Add
                        </button>
                        <span className='successMsg'>{isSuccess && "Product added to cart"}</span>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={item.picture} alt="" className='menu-details-img' />
                </div>
            </div>
        </div>
    );
};

export default MenuDetails;