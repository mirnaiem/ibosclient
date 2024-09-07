import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const {createUser,user}=useAuth();
 const navigate=useNavigate();
 const location=useLocation();
 const from=location?.state?.from?.pathname || '/';
const handleRegister=async (e)=>{
e.preventDefault()
const form=e.target;
const email=form.email.value;
const name=form.name.value;
const password=form.pass.value;
const userCredential = await createUser(email, password);
const createdUser = userCredential.user;
await updateProfile(createdUser, {
  displayName: name
});
console.log(user);}

useEffect(()=>{
  if(user){
    navigate(from,{replace:true});
  }
 },[user,from,navigate])

 return (
  <div className="h-screen flex">
     
     <div className="w-1/2 flex justify-center items-center bg-gray-50">
       <form onSubmit={handleRegister} className="w-full max-w-sm mx-auto p-8 bg-white shadow-lg rounded-lg">
         <h2 className="text-xl font-bold text-center mb-2">Welcome To!</h2>
         <h1 className="text-4xl font-bold text-center">
           Furni<span className="text-blue-400">Flex</span>
         </h1>
         <p className="text-center text-gray-500 mb-6">
         Signup for purchase your desire products         </p>

         <div className="mb-4">
           <label className="block text-sm mb-2" htmlFor="name">Full Name</label>
           <input
           name="name"
             id="name"
             type="text"
             placeholder="Enter your full name"
             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
         </div>
         <div className="mb-4">
           <label className="block text-sm mb-2" htmlFor="email">Email address</label>
           <input
           name="email"
             id="email"
             type="email"
             placeholder="Enter your email"
             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
         </div>

         <div className="mb-4">
           <label className="block text-sm mb-2" htmlFor="password">Password</label>
           <input
           name="pass"
             id="password"
             type="password"
             placeholder="Enter your password"
             className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
             required
           />
           <a href="#" className="text-sm text-blue-500 mt-1 inline-block">Forgot Password?</a>
         </div>

         <div className="mb-6">
           <label className="flex items-center text-sm">
             <input type="checkbox" className="mr-2" required />
             I agree to the{" "}
             <a href="#" className="text-blue-500">Terms & Policy</a>
           </label>
         </div>

         <div className="mb-4">
           <button className="w-full bg-black text-white p-3 rounded hover:bg-gray-800">
             Sign In
           </button>
         </div>

         <div className="flex justify-between mb-4">
           <button className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded mr-2">
             <img
               src="https://i.ibb.co.com/NFNtYmt/icons8-google-1.png"
               alt="Google"
               className="w-6 h-6 mr-2"
             />
             Google
           </button>
           <button className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded ml-2">
             <img
               src="https://i.ibb.co.com/x7BKtpS/icons8-apple-logo-1.png"
               alt="Apple"
               className="w-6 h-6 mr-2"
             />
             Apple
           </button>
         </div>

         <p className="text-center text-sm">
           Have an account?{" "}
            <Link to='/login' className="text-blue-500">Login</Link>
         </p>
       </form>
     </div>

     
     <div className="w-1/2 ">
       
       <div className=" h-screen bg-[url('https://i.ibb.co/GpBjwyp/chris-lee-70l1t-DAI6r-M-unsplash-1.png')] bg-cover bg-center"> 
       <div className=" text-white text-center p-8 flex flex-col justify-center items-center h-full">
         <img 
           src="https://i.ibb.co/zbktQH1/icon.png"
           alt="FurniFlex Logo"
           className="mb-4 w-12 h-12"
         />
         <h1 className="text-4xl font-bold">
           Furni<span className="text-blue-400">Flex</span>
         </h1>
         <p className="mt-4 max-w-md mx-auto">
           Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
         </p>
       </div></div>

       
      
     </div>
   </div>
 );
};

export default SignUp;