import React, { Component } from "react";
import singleRecipe from "./../images/recipedetails.jpg";
import Navbar from "./../Components/Navbar";
import NavbarTop from "./../Components/NavbarTop";

export class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.match.params.id);
  // }

  render() {
    return (
      <div>
        <NavbarTop />
        <img
          style={{ width: "100vw", marginBottom: "50px" }}
          src={singleRecipe}
          alt=""
        />
        <Navbar />
      </div>
    );
  }
}

export default Recipe;
