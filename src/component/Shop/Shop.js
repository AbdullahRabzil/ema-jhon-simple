import React, { useEffect, useState } from "react";
import Cart from "../OrderCart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCartByClick = (product) => {
    const pushCart = [...cart, product];
    setCart(pushCart);
  };

  return (
    <div className="shop">
      <div className="product-container">
        {Products.map((product) => (
          <Product
            product={product}
            clickCart={addToCartByClick}
            key={product.id}
          ></Product>
        ))}
      </div>

      <div className="order">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
