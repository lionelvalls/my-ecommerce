import React, { useContext } from 'react';
import CartSVG from './assets/cart.svg';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget" style={{ display: cart.length > 0 ? 'block' : 'none' }}>
      <img className="CartImg" src={CartSVG} alt="cart-widget" />
      {cart.length}
    </Link>
  );
};

export default CartWidget;