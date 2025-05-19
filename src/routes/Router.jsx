import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../components/Services";
import Products from "../pages/Products";
import Tips from "../pages/Tips";

import Gallery from "../pages/Gallery";
import Faqs from "../pages/faqs";
import Contact from "../components/Contact";




const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:([
            {path:"/",element:<Home/>},
            {path:"/about",element:<About/>},
            {path:"/services",element:<Services/>},
            {path:"/products",element:<Products/>},
            {path:"/tips",element:<Tips/>},
            {path:"/gallery",element:<Gallery/>},
            {path:"/faqs",element:<Faqs/>},
            {path:"/reviews",element:<Home/>},
            {path:"/contact",element:<Contact/>},

        ])
    },
    
   
])
export default router;