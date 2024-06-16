const addToDB = (id) => {
  const storedData = getDataFromDB();

  //  add Quantity
  let quantity = storedData[id];
  if (quantity) {
    quantity = quantity + 1;
    storedData[id] = quantity;
  }
  else{
    storedData[id] = 1;
  }
  localStorage.setItem('shopping-cart' , JSON.stringify(storedData))
};

const getDataFromDB = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};


const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart)
      if (id in shoppingCart) {
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      }
    }
  }
  


export {addToDB,getDataFromDB,removeFromDb}