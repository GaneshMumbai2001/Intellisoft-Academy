// import { useState } from "react";

// const initialCourses = [
//   {
//     id: 1,
//     name: "React Mastery",
//     price: 4999,
//     description: "Learn React from scratch to advanced.",
//     thumbnail: "",
//     companyLogo: "https://via.placeholder.com/50",
//     rating: 4.8,
//   },
 
// ];

// export default function CoursePurchase() {
//   const [courses, setCourses] = useState(initialCourses);

//   const removeCourse = (id) => {
//     setCourses(courses.filter((course) => course.id !== id));
//   };

//   const totalPrice = courses.reduce((sum, course) => sum + course.price, 0);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Course Store</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {courses.map((course) => (
//           <div key={course.id} className="shadow-lg rounded-lg p-4 relative bg-white">
//             <img
//               src={course.thumbnail}
//               alt={course.name}
//               className="w-full h-40 object-cover rounded"
//             />
//             <div className="p-3">
//               <div className="flex justify-between items-center">
//                 <h2 className="font-semibold text-lg">{course.name}</h2>
//                 <img
//                   src={course.companyLogo}
//                   alt="Company Logo"
//                   className="w-8 h-8 rounded-full"
//                 />
//               </div>
//               <p className="text-sm text-gray-500">{course.description}</p>
//               <p className="text-yellow-500 font-bold">⭐ {course.rating}</p>
//               <p className="text-lg font-semibold mt-2">₹{course.price}</p>
//               <button
//                 className="w-full mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => removeCourse(course.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right shadow-md">
//         <h2 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h2>
//         <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Purchase Now
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CreditCard, Landmark, Smartphone } from "lucide-react";

const initialCourses = [
  {
    id: 1,
    name: "React Mastery",
    price: 4999,
    description: "Learn React from scratch to advanced.",
    thumbnail: "https://via.placeholder.com/300",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.8,
  },
  {
    id: 1,
    name: "React Mastery",
    price: 4999,
    description: "Learn React from scratch to advanced.",
    thumbnail: "https://via.placeholder.com/300",
    companyLogo: "https://via.placeholder.com/50",
    rating: 4.8,
  },
  
];

export default function CoursePurchase() {
  const [courses, setCourses] = useState(initialCourses);
  const [isOpen, setIsOpen] = useState(false);

  const removeCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const totalPrice = courses.reduce((sum, course) => sum + course.price, 0);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Course Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="shadow-lg rounded-lg p-4 relative bg-white">
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-40 object-cover rounded"
            />
            <div className="p-3">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">{course.name}</h2>
                <img
                  src={course.companyLogo}
                  alt="Company Logo"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-500">{course.description}</p>
              <p className="text-yellow-500 font-bold">⭐ {course.rating}</p>
              <p className="text-lg font-semibold mt-2">₹{course.price}</p>
              <button
                className="w-full mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeCourse(course.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-right shadow-md">
        <h2 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h2>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsOpen(true)}
        >
          Purchase Now
        </button>
      </div>

      {/* Payment Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Choose Your Payment Method</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-black font-bold py-3 px-4 rounded">
              <CreditCard className="w-5 h-5" /> Pay with Credit/Debit Card
            </button>
            <button className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
              <Smartphone className="w-5 h-5" /> Pay with Google Pay
            </button>
            <button className="w-full flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded">
              <Landmark className="w-5 h-5" /> Pay via Net Banking
            </button>
          </div>
          <button
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </div>
  );
}