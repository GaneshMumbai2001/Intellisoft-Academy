import { useCart } from '../CourseCart/CartContext';

function CourseCard({ courseName, price, description }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ courseName, price, description });
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold">{courseName}</h2>
      <p className="text-gray-700">{description}</p>
      <p className="text-lg font-bold text-blue-600">${price}</p>
      <button 
        onClick={handleAddToCart} 
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default CourseCard;
