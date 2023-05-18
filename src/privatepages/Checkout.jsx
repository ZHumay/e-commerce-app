import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function Checkout() {
  const { items } = useContext(CartContext);

  return (
    <>
      <div>Checkout</div>

      {items.map((item) => (
        <div key={item.title}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </>
  );
}

export default Checkout;
