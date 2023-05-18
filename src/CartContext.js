import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Initialize items state
const [count,setCount]=useState(0)
  const addToCart = (image, title, price, category) => {
    // Add item to the cart
    const newItem = { image, title, price, category };
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const removeFromCart = (productId) => {
    setItems(items.filter((item) => item.id !== productId));
    setCount(count - 1);
  };

  return (
    <CartContext.Provider value={{ items, addToCart,count,setCount,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
