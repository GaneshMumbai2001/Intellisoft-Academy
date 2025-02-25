// CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the CartContext
const CartContext = createContext();

// Create a CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a course to the cart
  const addToCart = (course) => {
    setCart((prevCart) => {
      // Check if the course is already in the cart
      const isCourseInCart = prevCart.some((item) => item.id === course.id);
      if (!isCourseInCart) {
        return [...prevCart, course]; // Add the course if it's not already in the cart
      }
      return prevCart; // Return the existing cart if the course is already added
    });
  };

  // Function to remove a course from the cart
  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== courseId));
  };

  // Provide the cart state and functions to the context
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};