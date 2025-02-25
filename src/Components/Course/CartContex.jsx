// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (course) => {
//     // Ensure price is a number
//     const price = parseFloat(course.price.replace('$', '')); // Remove '$' and convert to number
//     const cartItem = { ...course, price, quantity: 1 }; // Add quantity and ensure price is a number
//     setCart((prevCart) => [...prevCart, cartItem]);
//   };

//   const removeItem = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        id: course.id,
        name: course.title,
        description: course.description,
        price: course.price,
        image: course.image,
      },
    ]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);