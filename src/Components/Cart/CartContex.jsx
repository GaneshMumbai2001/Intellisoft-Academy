// import React, { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       // Check if the item already exists in the cart
//       const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         // If it exists, increase the quantity
//         return {
//           ...state,
//           cartItems: state.cartItems.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         // If it doesn't exist, add it to the cart with a quantity of 1
//         return {
//           ...state,
//           cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
//           courseTitles: [...state.courseTitles, action.payload.title], // Add the course title
//         };
//       }
//     case "REMOVE_ITEM":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//         courseTitles: state.courseTitles.filter(
//           (title) => title !== state.cartItems.find((item) => item.id === action.payload)?.title
//         ), // Remove the course title
//       };
//     case "CLEAR_CART":
//       return {
//         cartItems: [], // Clear the cart
//         courseTitles: [], // Clear the course titles
//       };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, {
//     cartItems: [], // Array of cart items
//     courseTitles: [], // Array of course titles
//   });

//   const addToCart = (item) => {
//     dispatch({ type: "ADD_ITEM", payload: item });
//   };

//   const removeItem = (id) => {
//     dispatch({ type: "REMOVE_ITEM", payload: id });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart: state.cartItems, // Cart items
//         courseTitles: state.courseTitles, // Course titles
//         addToCart,
//         removeItem,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// import React, { createContext, useContext, useReducer, useEffect } from "react";

// const CartContext = createContext();

// // Helper function to load cart data from localStorage
// const loadCartFromLocalStorage = () => {
//   const cartData = localStorage.getItem("cart");
//   return cartData ? JSON.parse(cartData) : { cartItems: [], courseTitles: [] };
// };

// // Helper function to save cart data to localStorage
// const saveCartToLocalStorage = (cart) => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// const cartReducer = (state, action) => {
//   let newState;

//   switch (action.type) {
//     case "ADD_ITEM":
//       // Check if the item already exists in the cart
//       const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         // If it exists, increase the quantity
//         newState = {
//           ...state,
//           cartItems: state.cartItems.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         // If it doesn't exist, add it to the cart with a quantity of 1
//         newState = {
//           ...state,
//           cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
//           courseTitles: [...state.courseTitles, action.payload.title], // Add the course title
//         };
//       }
//       break;

//     case "REMOVE_ITEM":
//       newState = {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//         courseTitles: state.courseTitles.filter(
//           (title) => title !== state.cartItems.find((item) => item.id === action.payload)?.title
//         ), // Remove the course title
//       };
//       break;

//     case "CLEAR_CART":
//       newState = {
//         cartItems: [], // Clear the cart
//         courseTitles: [], // Clear the course titles
//       };
//       break;

//     default:
//       newState = state;
//   }

//   // Save the updated cart to localStorage
//   saveCartToLocalStorage(newState);
//   return newState;
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, loadCartFromLocalStorage());

//   const addToCart = (item) => {
//     dispatch({ type: "ADD_ITEM", payload: item });
//   };

//   const removeItem = (id) => {
//     dispatch({ type: "REMOVE_ITEM", payload: id });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart: state.cartItems, // Cart items
//         courseTitles: state.courseTitles, // Course titles
//         addToCart,
//         removeItem,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

// Helper function to load cart data from localStorage
const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : { cartItems: [], courseTitles: [] };
};

// Helper function to save cart data to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "ADD_ITEM":
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If it exists, increase the quantity
        newState = {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        newState = {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          courseTitles: [...state.courseTitles, action.payload.title], // Add the course title
        };
      }
      break;

    case "REMOVE_ITEM":
      newState = {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        courseTitles: state.courseTitles.filter(
          (title) => title !== state.cartItems.find((item) => item.id === action.payload)?.title
        ), // Remove the course title
      };
      break;

    case "CLEAR_CART":
      newState = {
        cartItems: [], // Clear the cart
        courseTitles: [], // Clear the course titles
      };
      break;

    default:
      newState = state;
  }

  // Save the updated cart to localStorage
  saveCartToLocalStorage(newState);
  return newState;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, loadCartFromLocalStorage());

  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cartItems, // Cart items
        courseTitles: state.courseTitles, // Course titles
        addToCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);