import React from "react";

const Cart = (props) => {
    const {cart} = props
  return (
    <div>
      <h1 className="name">Order Summary</h1>
       <p>Order Items : {cart.length} </p> 
    </div>
  );
};

export default Cart;
