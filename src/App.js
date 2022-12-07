import Data from './components/back/Data/Data';
import React, { useState } from 'react';
import Header from './components/front/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/front/Cart/Cart';
import Products from './components/front/Products/Products';

const App = () => {
  const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id 
        ? {...ProductExist, quantity: ProductExist.quantity + 1}
        : item
        )
      );
    }
    else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity-1} : item)
      )
    }
  }
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Products productItems = {productItems} handleAddProduct = {handleAddProduct} />} exact></Route>
        <Route path="/cart" element={<Cart cartItems = {cartItems} handleAddProduct = {handleAddProduct} handleRemoveProduct = {handleRemoveProduct} />} exact></Route>
      </Routes>
    </div>
  );
};

export default App;
