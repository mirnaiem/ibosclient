/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProductCart = ({product}) => {
 const{user}=useAuth()
 const navigate = useNavigate();
 const {image, name, price, description}=product;
 const handleAddToCart=(item)=>{
  if (!user) {
   navigate('/login');
   return; // Exit the function so it doesn't proceed with the fetch call
 }
  const cartInfo = {
   userEmail: user?.email, 
   product: item 
 };
 
  fetch('https://ibosserver-xqsu.vercel.app/carts', {
   method: "POST",
   headers: {
     "Content-type": "application/json"
   },
   body: JSON.stringify(cartInfo)
 })
 .then((res)=>res.json())
.then((data)=>{
 if(data.insertedId){
  alert('added to cart')
 }
})
  
 }
 return (
  <div className="p-4 space-y-3">
   <img className="w-full h-60" src={image} alt="" />
   <h1 className=" font-semibold">{name}</h1>
   <p className="space-x-10">
    <span className="font-medium">€{price}</span> 
    <span className="text-slate-500 line-through ">€350</span> 
    <span className="text-red-500 font-bold">25% OFF</span></p>
   <p>{description}</p>
   <button onClick={()=>handleAddToCart(product)} className="bg-black w-full py-3 rounded-xl text-white text-xl">Add To Cart</button>
  </div>
 );
};

export default ProductCart;