import { Login } from "@mui/icons-material";
import Register from "../PublicPages/Register";
import ActionAreaCard from "../privatepages/ActionAreaCard";
import Checkout from "../privatepages/Checkout";
import ProductPage from "../privatepages/ProductPage";
import Products from "../privatepages/Products";
import LoginPage from "../PublicPages/LoginPage";
export const routes = [
    {
        path:'/products',
        element:<Products/>
    },
    {
        path:'/',
        element:<ProductPage/>
    },
    {
        path:'/checkout',
        element:<Checkout/>
    },

    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
]