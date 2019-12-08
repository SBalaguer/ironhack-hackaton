import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class SingleProduct extends Component {
  render() {
    const propImg = this.props.img;
    //const img = {backgroundImage:`url(${propImg})`}
    return (
      <div className="card">
        <img className="card-img-top" src={`${propImg}`} alt="" />
        <div className="card-body">
          <p className="card-text">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
