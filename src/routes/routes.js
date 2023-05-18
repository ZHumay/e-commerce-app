import ActionAreaCard from "../privatepages/ActionAreaCard";
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

]