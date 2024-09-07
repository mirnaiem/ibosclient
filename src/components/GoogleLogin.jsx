import useAuth from "../hooks/useAuth";

const GoogleLogin = () => {
 const {googleLogin}=useAuth()
 const handleGoogleLogin=()=>{
  googleLogin()
  .then(result=>{
   const user=result.user;
   console.log(user);
  })
  
 }
 return (
 
   <button onClick={handleGoogleLogin} className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded mr-2">
             <img
               src="https://i.ibb.co.com/NFNtYmt/icons8-google-1.png"
               alt="Google"
               className="w-6 h-6 mr-2"
             />
             Google
           </button>
  
 );
};

export default GoogleLogin;