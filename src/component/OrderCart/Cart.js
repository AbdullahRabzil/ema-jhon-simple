import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat(((total * 10) / 100).toFixed(2));
  const grandTotal = total + shipping + tax;
  
  return (
    <div className="cart">
      <h1 className="name">Order Summary</h1>
      <p>Order Items: {cart.length} </p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping Price: ${shipping} </p>
      <p>Tax: {tax} </p>
      <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
      <button>
        <p> Clear Cart</p>
      </button>{" "}
      <br /> <br />
      <button>
        <p>Review Order</p>
      </button>
    </div>
  );
};

export default Cart;
