import { useEffect, useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleLogOut = async () => {
    await logOut();
  };

  const fetchCartData = async () => {
    if (user?.email) {
      try {
        const response = await fetch(`http://localhost:3000/carts/${user.email}`);
        const data = await response.json();
        // Count the total number of items in the cart
        const itemCount = data.reduce((total, cartItem) => total + (cartItem.quantity || 1), 0);
        setCartItemCount(itemCount);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    }
  };

  useEffect(() => {
    fetchCartData(); // Initial fetch
    const intervalId = setInterval(fetchCartData, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="w-[90%] mx-auto pt-4 flex justify-between items-center">
      <img src="https://i.ibb.co/vcvc8qX/Logo.png" alt="" />
      <div>
        <ul className="flex gap-4 text-xl">
          <Link to='/'><li>Home</li></Link>
          <li>Products</li>
          <li>Categories</li>
          <li>Custom</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <Link className="flex" to={'/cart'}>
          <TbShoppingBag size={30} />
          <div className="badge badge-secondary">+{cartItemCount}</div>
        </Link>

        {user ? (
          <>
            {user.photoURL ? (
              <img className="rounded-full me-2 w-8 h-8" title={user?.displayName} src={user.photoURL} alt="User" />
            ) : (
              <span title={user?.displayName} className="text-lg font-bold">{user?.displayName}</span>
            )}
            <button onClick={handleLogOut} className="text-xl">LogOut</button>
          </>
        ) : (
          <div>
            <Link to='/login' className="text-xl">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
