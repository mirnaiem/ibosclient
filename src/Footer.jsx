import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
 return (
  <div className="bg-black pt-20">
   <div className="w-[90%] mx-auto flex justify-between ">
    <div className="w-3/6">
     <img src="https://i.ibb.co.com/F0YFvDm/Logo-1.png" alt="" />
    </div>
    <div className="flex justify-between w-full">
     <div>
      <h1 className="text-white mb-4">About US</h1>
      <div className="text-gray-500 space-y-1">
       <p>Master Plan</p>
       <p>Jobs</p>
       <p>Pressroom</p>
       <p>Blog</p>
       <p>Contact</p>
      </div>
     </div>
     <div >
      <h1 className="text-white mb-4">Explore EEVE</h1>
      <div className="text-gray-500 space-y-1">
       <p>Unlock my Robot Power</p>
       <p>Starlight</p>
       <p>Robot Platform</p>
       <p>EEVE Roadmap</p>
      </div>

     </div>
     <div >
      <h1 className="text-white mb-4">Community & Support</h1>
      <div className="text-gray-500 space-y-1">
       <p>Willow X Community</p>
       <p>Developer & Maker Access</p>
       <p>Special Cases</p></div>

     </div>
    </div>
   </div>
 <hr className="w-[90%] border border-[#191b2b] mx-auto mt-20 mb-10" />
 <div className="w-[90%] mx-auto flex justify-between">
  <div className="flex gap-4 text-gray-200">
  <FiFacebook />
  <IoLogoInstagram />
  <FaXTwitter />
  <FiLinkedin />
  </div>
  <div className="flex gap-5 text-gray-500">
   <p>March22 Recap</p>
   <p>Privacy Policy</p>
   <p>General Terms</p>
   <p>Contact</p>
  </div>
  <div>
   <p className="flex gap-2 items-center justify-center text-gray-500">
    <span className="mt-1">
     <img src="https://i.ibb.co.com/my0cN5n/Frame-1000001262.png" alt="" />
     </span> 
     United States (English)</p>
  </div>
 </div>

 <div className="text-gray-500 text-center py-5">
  <p>EEVE © 2024. All rights reserved.</p>
 </div>
  </div>
 );
};

export default Footer;