import React from "react";
import { Link } from "react-router-dom";
import basket from "./../../images/basket.png";

import "./style.css";

export default function index() {
  return (
    <div className="navbar navbar-light navbar-top">
      <div className="user-search">
        <h3>Be Sustainable</h3>
        <form action="">
          <input type="Search" />
        </form>
      </div>
      <div className="checkout-icon">
        <Link to="/checkout">
          <img className="basket" src={basket} alt="" />
        </Link>
      </div>
    </div>
  );
}
