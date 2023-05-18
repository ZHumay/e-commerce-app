import React, { useContext } from 'react';
import CartContext from '../CartContext';

function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div>Checkout</div>

      {cartItems.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </>
  );
}

export default Checkout;
