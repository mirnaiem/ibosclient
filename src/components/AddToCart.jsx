import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Cart from "./Cart";
import CheckOut from "./CheckOut";

const AddToCart = () => {
  const { user } = useAuth();
  const [cartInfo, setCartInfo] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/carts/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCartInfo(data))
        .catch((error) => console.error('Error fetching cart data:', error));
    }
  }, [user]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartInfo((prevCart) =>
      prevCart.map((cart) =>
        cart.product._id === productId
          ? { ...cart, quantity: newQuantity }
          : cart
      )
    );
  };

  const handleRemove = (productId) => {
    setCartInfo((prevCart) =>
      prevCart.filter((cart) => cart.product._id !== productId)
    );
  };

  const getSubtotal = () => {
    return cartInfo.reduce((total, cart) => total + (cart.quantity || 1) * cart.product.price, 0);
  };

  const getTotal = () => {
    // You can add shipping or other fees if needed
    return getSubtotal();
  };

  return (
    <div className="w-[90%] mx-auto flex mt-20 mb-40 gap-10 justify-between">
      <div className="w-4/6">
        {cartInfo.map((cart) => (
          <Cart
            key={cart.product._id}
            cart={cart}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <div className="w-1/5">
        <CheckOut subtotal={getSubtotal()} total={getTotal()} />
      </div>
    </div>
  );
};

export default AddToCart;
