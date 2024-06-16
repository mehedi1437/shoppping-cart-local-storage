import { getDataFromDB } from "../utils/fakeDB";

export const getProductsdataAndSavedCartData = async () => {
  const productsdata = await fetch("products.json");
  const products = await productsdata.json();

  let initialCart = [];

  const savedCart = getDataFromDB();
  for(const  id in savedCart){
     const foundProduct = products.find(pd => pd.id === id)
     if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }
 
  return {products, initialCart};
};
