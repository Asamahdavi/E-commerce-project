import React from "react";
import { useState } from 'react';
import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./pages/LandingPage";
import Data from "./Components/Assets/Data";
import Mdata from "./Components/MobileSection/Mdata";
import Basket from "./Components/Basket/Basket";
import ProductDetailed from "./Components/DetailedProduct/ProductDetailed";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const { productItems } = Data;
  const { shopItems } = Mdata;


  //Step 2 :
  const [CartItem, setCartItem] = useState([])
const [id, setId]= useState("")
const idSetter=(id)=>{
  setId(id)
}
  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <>
      <Router>
        <Header  />
        <Switch>
          <Route path="/" exact>
            <LandingPage productItems={productItems} addToCart={addToCart} shopItems={shopItems} id={id} />
          </Route>
          <Route path='/cart' exact>
            <Basket CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/ProductDetailed">
            <ProductDetailed idSetter={idSetter} productItems={productItems}  />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
