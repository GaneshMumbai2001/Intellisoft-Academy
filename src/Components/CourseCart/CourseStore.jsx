// import React from 'react';
// import { useCart } from '../Course/CartContex.jsx'; // Correct import

// function CourseStore() {
//   const { cart } = useCart(); // Use the useCart hook

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Course Store</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cart.map((course, index) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//             <img src={course.image} alt={course.title} className="w-full rounded-lg mb-4" />
//             <h2 className="text-xl font-bold">{course.title}</h2>
//             <p className="text-gray-600 mt-2">{course.description}</p>
//             <p className="text-gray-500 mt-1">Price: {course.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CourseStore;

import React from 'react';
import { useCart } from '../Course/CartContex.jsx'; // Correct import

function CourseStore() {
  const { cart } = useCart(); // Use the useCart hook

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Course Store</h1>

      {cart?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((course) => (
            <div key={course.id || course.title} className="bg-white shadow-lg rounded-lg p-6">
              <img src={course.image} alt={course.title} className="w-full rounded-lg mb-4" />
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-500 mt-1">Price: {course.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-4">No courses available in the cart.</p>
      )}
    </div>
  );
}

export default CourseStore;
