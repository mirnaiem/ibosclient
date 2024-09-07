import { useEffect, useState } from "react";
import ProductCart from "../components/ProductCart";

const Products = () => {
 const [products,setProducts]=useState([]);
 useEffect(()=>{
fetch("https://ibosserver-xqsu.vercel.app/products")
.then((res)=>res.json())
.then((data)=>setProducts(data))
 },[])
 console.log(products);
 return (
 <div className="flex ">
  <div className="w-2/6">
   <ul className="text-xl text-slate-400 space-y-7  border-r h-full mr-8">
    <li>Rocking Chair</li>
    <li>Side Chair</li>
    <li>Lounge Chair</li>
   </ul>
  </div>
  <div className="grid grid-cols-3 w-full gap-5">
   {
    products?.map((product,id)=>(<ProductCart key={id} product={product}></ProductCart>))
   }
  </div>
 </div>
 );
};

export default Products;