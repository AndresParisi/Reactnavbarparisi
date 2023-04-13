import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemsInCart = 3; // Hardcoded number for demonstration purposes

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="cart-widget__notification">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;
