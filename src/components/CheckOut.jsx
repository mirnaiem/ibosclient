/* eslint-disable react/prop-types */
const CheckOut = ({ subtotal, total }) => {
 return (
   <>
     <div className="border border-slate-400 py-4 px-2 rounded-xl mb-3">
       <div className="pb-2 border-b space-y-2">
         <div className="flex justify-between">
           <p>Subtotal</p>
           <p>€{subtotal.toFixed(2)}</p>
         </div>
         <div className="flex justify-between">
           <p>Shipping</p>
           <p>Free</p>
         </div>
         <div className="flex justify-between">
           <p>Estimated Tax</p>
           <p>€ -</p>
         </div>
       </div>
       <div className="flex justify-between mt-4">
         <p>Total</p>
         <p className="font-bold">€{total.toFixed(2)}</p>
       </div>
     </div>
     <button className="bg-black w-full py-2 rounded-lg text-white text-xl uppercase">
       Go to Checkout
     </button>
   </>
 );
};

export default CheckOut;
