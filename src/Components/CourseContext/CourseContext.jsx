import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  return (
    <CourseContext.Provider value={{ cart, addToCart }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
