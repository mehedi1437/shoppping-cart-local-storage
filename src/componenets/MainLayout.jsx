import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createContext, useState } from "react";
import { getProductsdataAndSavedCartData } from "../loaders/getProducts&SavedCartData";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const MainLayout = () => {
  // const products = useLoaderData();
  
  const { products, initialCart } = useLoaderData()
  console.log(' carts from main layout ',initialCart);
  console.log(' products from main layout ',products);
  const [allProducts, setAllProducts] = useState(products);
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <CartContext.Provider value={[cart, setCart]}>
        <ProductContext.Provider value={[allProducts, setAllProducts]}>
          <Navbar></Navbar>
          <div className="min-h-[calc(100vh-100px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </ProductContext.Provider>
      </CartContext.Provider>
    </div>
  );
};

export default MainLayout;
