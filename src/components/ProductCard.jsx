import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(true);
  const [envImage, setEnvImage] = useState("");

  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: product,
    });
    navigate(`/producto/${product.slug}`);
  };
  return (
    <>
      <NavLink className="d-flex position-relative" to={`/producto/${product.slug}`}>
        <img
          onLoad={()=>setShowSpinner(false)}
          src={product.image}
          alt={product.title}
          className={`${showSpinner?"opacity-0":""} productImg mb-2 img-fluid`}
          style={{minHeight: "5rem"}}
        />
        <img
          src={product.imageenvironment}
          alt={product.title}
          className={`${showSpinner?"opacity-0":""} envImg position-absolute mb-2 img-fluid`}
          />
        { showSpinner && <div className="position-absolute start-0 end-0 top-0 bottom-0 d-flex bg-secondary" style={{pointerEvents: "none"}} >
          <Spinner animation="border m-auto" variant="dark" role="status"></Spinner>
        </div> }
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
    </>
  );
}

export default ProductCard;
