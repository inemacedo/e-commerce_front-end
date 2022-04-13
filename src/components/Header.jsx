import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div className="home-images-responsive header-background d-flex flex-column align-items-center justify-content-center">
      <div>
        <h1 className="text-light m-5 m-md-0">
          {title ? title : "Tu casa, tu lugar en el mundo"}
        </h1>
      </div>
      <Link className="btn btn-lg btn-light mt-5" to="/productos">
        Explorar
      </Link>
    </div>
  );
}

export default Header;
