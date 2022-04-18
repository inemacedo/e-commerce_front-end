import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Header({ title }) {
  return (
    <div className="home-images-responsive header-background d-flex flex-column align-items-center justify-content-center">
      <div>
        <h1 className="text-light m-5 m-md-0">
          {title ? title : "TU CASA, TU LUGAR EN EL MUNDO"}
        </h1>
      </div>
      <Link
        className="header-button btn btn-lg mt-4 border text-light px-4 py-2 fs-6"
        to="/productos"
      >
        Explorar <BsArrowRight className="ms-2" size={15} />
      </Link>
    </div>
  );
}

export default Header;
