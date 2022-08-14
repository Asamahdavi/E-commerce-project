import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "../Components/Assets/Data";
function Page() {
  const { productItems } = Data;
 
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage productItems={productItems} />
            
          </Route>
          {/* <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Page;
