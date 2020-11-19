
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Home from "./components/Home";
import PurchaseConfirmation from "./components/Cart/PurchaseConfirmation";
import React from "react";




function App() {
  return (
      <Router>

          <Navbar></Navbar>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/products" component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/purchased" component={PurchaseConfirmation}/>

              <Route component={Default}/>
          </Switch>
        <Modal></Modal>
      </Router>
  );
}



export default App;
