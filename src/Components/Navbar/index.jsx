import React from "react";
import { Link } from "react-router-dom";
import recipes from "./../../images/repicon.png";
import user from "./../../images/user.png";
import localmarket from "./../../images/localmarket.png";

export default function index() {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <Link to="/home" className="nav-item">
        <img src={localmarket} alt="" />
      </Link>
      <Link to="/recipes/123" className="nav-item">
        <img src={recipes} alt="" />
      </Link>
      <Link to="/user/abc" className="nav-item">
        <img src={user} alt="" />
      </Link>
    </nav>
  );
}
