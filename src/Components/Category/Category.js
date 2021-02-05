import React from 'react';
import { useHistory } from 'react-router-dom';
import './Category.css'

const Category = (props) => {
    const { picture, food, short_desc, price, _id } = props.menu;
    const history = useHistory();
    const showDetails = () => {
        history.push(`/menu/${_id}`)
    }
    
    return (
        <div onClick={showDetails} className='col-md-4'>
            <div className="card">
                <img className='card-img-top mx-auto d-block w-50' src={picture} alt="" />
                <div className="card-body">
                    <h4 className='card-title'>{food}</h4>
                    <p className="card-text">{short_desc}</p>
                    <h3 className='card-price'>$ <span>{price}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Category;