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

      <p>{product.title}</p>
      <p className="fw-bold">{product.price}</p>
    </div>
  );
}

export default ProductCard;
