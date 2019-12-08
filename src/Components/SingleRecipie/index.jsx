import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class SingleRecipie extends Component {
  render() {
    // const propImg = this.props.img;
    // const img = { backgroundImage: `url(${propImg})` };
    const imgProp = this.props.img;
    const nameProp = this.props.name;
    return (
      <div class="card card-recipie">
        <img class="card-img-top" src={imgProp} alt="" />
        <div class="card-body">
          <h5 class="card-title">{nameProp}</h5>
          <Link to="#" class="btn btn-primary">
            Add to Cart
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleRecipie;
