import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
   
    const {clickCart} = props
    const { img, name, seller,price,ratings} = props.product;
   
    return (
        <div className='product'>
            <div className="product-data">
            <img src={img} alt="" />
            <div className="product-info">
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <div>
             <p>Manufacturer : {seller}</p>
             <p>Rating : {ratings}</p>
            </div>
            </div>
            
           
           
            </div>
            <button onClick={() => clickCart(props.product)} className='btn'>
            <p>Add To Cart</p>
            <FontAwesomeIcon className='cart-icon' icon={faShoppingCart}></FontAwesomeIcon>
          </button>
         
           
        </div>
        
        
    );
};

export default Product;