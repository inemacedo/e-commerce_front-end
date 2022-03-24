import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return <nav className="navbar nav text-light nav-dark bg-dark justify-content-evenly" >
    <Link to="/" >Home</Link>
    <Link to="/products" >Products</Link>
    <Link to="/about" >About</Link>
  </nav>;
}

export default Navbar;
