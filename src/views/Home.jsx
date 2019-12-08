import React, { Component } from "react";
import { Link } from "react-router-dom";
import SingleRecipie from "./../Components/SingleRecipie";
import SingleProduct from "./../Components/SingleProduct";
import Carousel from "./../Components/Carousel";
import Navbar from "./../Components/Navbar";
import NavbarTop from "./../Components/NavbarTop";

import kiwi from "./../images/kiwi.png";
import mushroom from "./../images/mushroom.png";
import orange from "./../images/orange.png";
import peach from "./../images/peach.png";
import pepper from "./../images/pepper.png";
import tomato from "./../images/tomato.png";

export class Home extends Component {
  render() {
    return (
      <div>
        <NavbarTop />
        <div className="content">
          <header>
            <h4 className="main-claim">
              What we eat has major implications for climate change
            </h4>
          </header>

          <div className="products">
            <h3>Products</h3>
            <div className="products-list">
              <SingleProduct img={kiwi} name="Kiwi" />
              <SingleProduct img={mushroom} name="Mushroom" />
              <SingleProduct img={orange} name="Orange" />
              <SingleProduct img={peach} name="Peach" />
              <SingleProduct img={pepper} name="Pepper" />
              <SingleProduct img={tomato} name="Tomato" />
            </div>
          </div>
          <div className="recipies-list">
            <h3>Recipes</h3>
            <Link to="/recipes/123">
              <Carousel />
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Home;
