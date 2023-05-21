import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setItems(parsedItems);
      setCount(parsedItems.length);
    }
  }, []);

  const addToCart = (product) => {
    const updatedItems = [...items, product];
    setItems(updatedItems);
    setCount(updatedItems.length);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const removeFromCart = (productId) => {
    const updatedItems = items.filter((item) => item.id !== productId);
    setItems(updatedItems);
    setCount(updatedItems.length);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  return (
    <CartContext.Provider value={{ items, setItems, addToCart, count, setCount, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
