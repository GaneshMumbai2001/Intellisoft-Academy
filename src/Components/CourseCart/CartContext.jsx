import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (course) => {
    setCartItems((prevItems) => [...prevItems, course]);
  };

  const removeFromCart = (course) => {
    setCartItems((prevItems) => prevItems.filter(item => item !== course));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
