import React from "react";
import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./pages/LandingPage"; 
import "./App.css"
import {BrowserRouter as Router, Switch ,Route,Link} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <LandingPage/>
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

export default App;
