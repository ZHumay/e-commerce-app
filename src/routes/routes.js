import ActionAreaCard from "../privatepages/ActionAreaCard";
import Checkout from "../privatepages/Checkout";
import Products from "../privatepages/Products";
export const routes = [
    {
        path:'/products',
        element:<Products/>
    },
    {
        path:'/',
        element:<ActionAreaCard/>
    },
    {
        path:'/checkout',
        element:<Checkout/>
    },

]