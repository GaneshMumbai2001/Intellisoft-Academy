import { useCart } from '../CourseCart/CartContext';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-4">
            <div>
              <h3 className="text-xl">{item.courseName}</h3>
              <p>{item.description}</p>
              <p className="text-lg font-bold">${item.price}</p>
            </div>
            <button 
              onClick={() => removeFromCart(item)} 
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
}

export default CartPage;
