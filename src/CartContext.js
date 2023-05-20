import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); 

const [count,setCount]=useState(0)


  const addToCart = (image, title, price, category) => {
    const newItem = { image, title, price, category };
    setItems((prevItems) => [...prevItems, newItem]);
    setCount(count + 1);
  };


  const removeFromCart = (productId) => {
    setItems(items.filter((item) => item.id !== productId));
    if (count > 0) {
      setCount(count - 1)}
    
  };

  return (
    <CartContext.Provider value={{ items,setItems, addToCart,count,setCount,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
