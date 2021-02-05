import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { CartContext, QuantityContext } from '../../App';
import './Cart.css'


const Cart = () => {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState(null);
    const [cart, setCart] = useContext(CartContext)

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        setUserInfo(data)
        alert("Now confirm order")
    };

    const handleOrderConfirm = () => {
        alert("Thank you for order")
        setCart([])
        history.push('/')
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-7">
                    <div className="shipping-contact">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input name="door" className='form-control' ref={register({ required: true })} placeholder='Delivery to Door' />
                                {errors.door && <span className='text-danger text-sm'>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="road" className='form-control' ref={register({ required: true })} placeholder='Road No' />
                                {errors.road && <span className='text-danger text-sm'>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="flat" className='form-control' ref={register({ required: true })} placeholder='Holding, Flat or Suite' />
                                {errors.flat && <span className='text-danger text-sm'>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input name="business" className='form-control' ref={register()} placeholder='Business Name (Optional)' />
                            </div>
                            <div className="form-group">
                                <input name="instraction" className='form-control' ref={register()} placeholder='Delivery instruction (Optional)' />
                            </div>
                            <div className="form-group">
                                <input type="submit" className='btn btn-danger w-100' value='Save & Continue' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-5">
                        <div className="cart">
                            <span>From <strong>Comilla Town Hall</strong></span>
                            <p>Arriving in 20-30 minutes</p>
                            <p>Comilla, Town Hall</p>

                            <div className="row">
                                {
                                    cart.map(crt =>
                                        <div className='col-md-12'>
                                            <div className='d-flex align-items-center cart-item my-3'>
                                                <div className="cart-img mr-4">
                                                    <img src={crt.picture} alt="" />
                                                </div>
                                                <div style={{ width: '50%' }} className='cart-content'>
                                                    <p>{crt.food}</p>
                                                    <p>$ <strong className='text-danger'>{crt.price}</strong></p>
                                                    <p className='text-muted'><small>Free Delivery</small></p>
                                                </div>
                                                <div style={{ width: '25%' }}>
                                                    <button className='btn font-weight-bold'>+</button>
                                                    <input value={crt.quantity} id='menu-count' type="number" className='text-center w-25 border-0' />
                                                    <button className='btn btn-outline-none text-danger font-weight-bold'>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="d-flex justify-content-between">
                                <h6>Sub Total {cart.length} items</h6>
                                <h6>$11050</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Tax</h6>
                                <h6>$5</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Delivery Free</h6>
                                <h6>$2</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>Delivery Free</h5>
                                <h6>$1057</h6>
                            </div>
                            {
                                userInfo ?
                                <button onClick={handleOrderConfirm} className="btn-brand d-block mx-auto mt-4">Confirm Order</button>
                                :
                                <button className="btn-disable d-block mx-auto mt-4" disabled>Confirm Order</button>
                            }
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;