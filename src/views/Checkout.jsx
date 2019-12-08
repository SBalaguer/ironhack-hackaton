import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../Components/Navbar";
import NavbarTop from "./../Components/NavbarTop";
import checkout from "./../images/checkout.jpg";

export class Checkout extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <img
          style={{ marginBottom: "50px" }}
          src={checkout}
          alt=""
        />
        <Navbar />
      </div>
    );
  }
}

export default Checkout;
