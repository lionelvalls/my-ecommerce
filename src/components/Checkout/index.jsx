import React, { useState } from 'react';
import './Checkout.css';
import { Link, Navigate } from "react-router-dom"

const Checkout = () => {
    const initialFormData = {
      name: '',
      email: '',
      address: '',
      city: '',
      zipCode: '',
    };
  
    const [formData, setFormData] = useState(initialFormData);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Simulando un retraso para mostrar el mensaje de pago realizado
      setIsPaymentSuccessful(true);
      setTimeout(() => {
        setIsPaymentSuccessful(false);
        setFormData(initialFormData);
      }, 2000);
    };
  
    return (
      <div className="Checkout">
        <h1>Checkout</h1>
        {isPaymentSuccessful ? (
          <div className="SuccessMessage">Pago realizado</div>
        ) : (
            <form onSubmit={handleSubmit}>
            <div className="FormGroup">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="FormGroup">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="FormGroup">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="FormGroup">
              <label htmlFor="city">Ciudad</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="FormGroup">
              <label htmlFor="zipCode">Código postal</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Realizar pago</button>
          </form>
        )}
      </div>
    );
  };
  
  export default Checkout;