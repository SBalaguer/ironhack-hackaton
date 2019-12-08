import React from "react";
import { Link } from "react-router-dom";
import mainpicture from "./../../images/mainpicture.png"

export default function index() {
  return (
      <Link to="/home" className="nav-item">
        <img className="main-picture" src={mainpicture} alt="" />
      </Link>
  );
}
