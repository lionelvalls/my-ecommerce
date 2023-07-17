import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  let totalPrice = 0;
  cart.forEach((prod) => totalPrice += prod.price)
  const totalQuantity = cart.length

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay más ítems en el carrito</h1>
        <Link to="/" className="Option">Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h4>{prod.title}</h4>
          <img src={prod.image} alt={prod.title} />
          <p>Precio: ${prod.price}</p>

          <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}

      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to="/checkout" className="Option">Checkout</Link>

      <h5>Total: ${totalPrice}</h5>
    </div>
  );
};

export default Cart;
