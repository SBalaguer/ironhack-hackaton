import React from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Checkout from "./views/Checkout";
import Recipe from "./views/Recipe";
import Recipes from "./views/Recipes";
import UserProfile from "./views/UserProfile";
import Navbar from "./Components/Navbar";
import NavbarTop from "./Components/NavbarTop";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Route for Single Recipe Page */}
        <Route path="/recipes/:id" component={Recipe} />
        {/* Route for Recipies Page */}
        <Route path="/recipes" component={Recipes} />
        {/* Route for Checkout Page */}
        <Route path="/checkout" component={Checkout} />
        {/* Route for User Page */}
        <Route path="/user/:id" component={UserProfile} />
        {/* Route for Home Page */}
        <Route path="/home" component={Home} />
        {/* Route for Main Page */}
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
