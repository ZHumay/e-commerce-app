import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Initialize items state

  const addToCart = (image, title, price, category) => {
    // Add item to the cart
    const newItem = { image, title, price, category };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Other cart-related functions

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
