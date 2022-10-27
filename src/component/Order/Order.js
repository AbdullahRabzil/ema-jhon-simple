import React from 'react';
import useProducts from '../../hook/Order';
import Cart from '../OrderCart/Cart';

const Order = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='shop-con'>
            <div className="product-con">

            </div>
            <div className="cart-con">
                <Cart cart></Cart>
            </div>
          
        </div>
    );
};

export default Order;