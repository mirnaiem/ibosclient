import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddToCart from "../components/AddToCart";
import Private from "./PrivateRoutes";

export const Routes = createBrowserRouter([
 {
   path: "/",
   element: <MainLayout/>,
   children:[
    {
     path:'/',
     element:<Home/>
    },
    {
      path:'cart',
      element:<Private><AddToCart/></Private>
     }
   ]
 },
 {
  path:'login',
  element:<Login/>
 },
 {
  path:'signup',
  element:<SignUp/>
 },
 
]);