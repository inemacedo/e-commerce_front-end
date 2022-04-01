import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: product,
    });
    navigate(`/producto/${product.slug}`);
  };
  return (
    <div>
      <NavLink to={`/producto/${product.slug}`}>
        <img
          onMouseOver={(e) => (e.currentTarget.src = product.imageenvironment)}
          onMouseOut={(e) => (e.currentTarget.src = product.image)}
          src={product.image}
          alt={product.title}
          className="mb-2 img-fluid"
        ></img>
      </NavLink>
      <button
        onClick={handleClick}
        className="btn border btn-outline-dark w-100 mb-2"
      >
        Agregar al Carrito
      </button>
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
