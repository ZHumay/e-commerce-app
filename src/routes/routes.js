import { Login } from "@mui/icons-material";
import Register from "../PublicPages/Register";
import ActionAreaCard from "../privatepages/ActionAreaCard";
import Checkout from "../privatepages/Checkout";
import ProductPage from "../privatepages/ProductPage";
import Products from "../privatepages/Products";
import LoginPage from "../PublicPages/LoginPage";
import ProtectedRoute from './ProtectedRoute'; 
import { Routes, Route } from "react-router-dom";

export const routes = [
  {
    path: '/products',
    element: <ProtectedRoute path="/products" element={<Products/>} />, // Use ProtectedRoute for the /products route
  },
  {
    path: '/',
    element: <ProductPage />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];


