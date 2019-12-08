import React, { Component } from "react";

export class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Single Product page</h1>
      </div>
    );
  }
}

export default Product;

