import { useContext } from "react";
import { ProductContext, CartContext } from "./MainLayout";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utils/fakeDB";
import toast from "react-hot-toast";

const Shop = () => {
  const [allProducts, setAllProducts] = useContext(ProductContext || []);
  const [cart, setCart] = useContext(CartContext || []);

  const handleAddToCart = (product) => {
    console.log(product.id);

    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);

    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    toast.success('Product added Successfully')
    addToDB(product.id)
  };



  return (
    <div className="product-container grid grid-cols-3 gap-7 mt-14 mx-20">
      {allProducts?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
