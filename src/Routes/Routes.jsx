import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../componenets/MainLayout";


import Cart from "../componenets/Cart";
import Home from "../componenets/Home";
import Shop from "../componenets/Shop";
import { getProductsdataAndSavedCartData } from "../loaders/getProducts&SavedCartData";

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    loader:getProductsdataAndSavedCartData ,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/shop',
          element:<Shop></Shop>
        },
        {
          path:'/cart',
          element:<Cart></Cart>
        }
    ]
  }
])

export default router