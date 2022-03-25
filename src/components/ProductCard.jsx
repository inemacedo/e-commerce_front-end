import React from "react";
import { NavLink } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <NavLink to={`/producto/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="mb-2 img-fluid"
        ></img>
      </NavLink>

      <NavLink
        className="text-decoration-none text-dark"
        to={`/producto/${product.id}`}
      >
        {product.title}
      </NavLink>
      <p className="fw-bold">USD {product.price}</p>
    </div>
  );
}

export default ProductCard;
