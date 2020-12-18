import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact strict component={ Home } />
          <Route path="/products" exact strict component={ Products } />
          <Route path="/services" exact strict component={ Services } />
          <Route path="/sign-up" exact strict component={ SignUp } />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
