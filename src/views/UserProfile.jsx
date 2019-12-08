import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./../Components/Navbar";
import NavbarTop from "./../Components/NavbarTop";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    // this.fetchData = this.fetchData.bind(this);
  }

  // fetchData() {
  //   const contr = this.props.match.params.country;
  //   CountryData.map(country => {
  //     if (country.cca3 === contr) {
  //       this.setState({
  //         name: country.name.common,
  //         capital: country.capital,
  //         area: country.area,
  //         borders: country.borders
  //       });
  //     }
  //   });
  // }

  // componentDidMount() {
  //   this.fetchData();
  // }

  // componentDidUpdate(prevProp, prevState, snapshot) {
  //   const prevParam = prevProp.match.params.id;
  //   const actParam = this.props.match.params.id;
  //   console.log('It updated!')
  //   if (actParam !== prevParam) {
  //     console.log(actParam);
  //   }
  // }

  componentDidMount() {
    // console.log(this.props.match.params.id);
  }

  render() {
    // console.log(this.props.match.params.id);
    return (
      <div>
        <NavbarTop />
        <h1>This is the user Profile Page</h1>
        <Navbar />
      </div>
    );
  }
}

export default Home;
