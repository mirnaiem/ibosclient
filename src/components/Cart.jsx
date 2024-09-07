import { useState } from "react";

/* eslint-disable react/prop-types */
const Cart = ({ cart, onQuantityChange, onRemove }) => {
  const { image, name, price, _id } = cart.product;
  const [quantity, setQuantity] = useState(cart.quantity || 1);

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
    onQuantityChange(cart.product._id, newQuantity);
  };

  const handleRemove = () => {
    fetch(`https://ibosserver-xqsu.vercel.app/carts/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(() => onRemove(_id))  // Remove item from UI after successful deletion
      .catch((error) => {
        console.error('Error removing item:', error);
        // Optionally, show an error message to the user
      });
  };

  return (
    <div className="flex justify-between border-b pb-8 mb-5">
      <div className="flex items-center gap-4">
        <p className="flex border border-slate-400 py-1 px-3 rounded-lg space-x-1">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span className="font-semibold">{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </p>
        <div className="flex gap-2">
          <img className="w-20 h-20 rounded-xl" src={image} alt={name} />
          <h1 className="font-bold">{name}</h1>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button onClick={handleRemove} className="text-red-500">X</button>
        <p className="font-bold">€{(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
