import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, deletedCart } = useContext(CartContext);

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
          <img src={prod.img} alt={prod.title} />
          <p>Precio: ${prod.price}</p>

          <button onClick={() => deletedCart(prod.id)}>Eliminar</button>
        </div>
      ))}

      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to="/checkout" className="Option">Checkout</Link>

      <h5>Total: ${total()}</h5>
    </div>
  );
};

export default Cart;
