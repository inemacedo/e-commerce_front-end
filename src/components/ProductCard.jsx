
import "../styles/productCard.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
    <Link
      className="product text-decoration-none"
      to={`/producto/${product.slug}`}
    >
      <div className="d-flex position-relative" >
        <img
          onLoad={() => setShowSpinner(false)}
          src={product.imgBaseUrl + "/" + product.image}
          alt={product.title}
          className={`${showSpinner ? "opacity-0" : ""
            } productImg mb-2 img-fluid`}
          style={{ minHeight: "5rem" }}
        />
        <img
          src={product.imgBaseUrl + "/" + product.imageenvironment}
          alt={product.title}
          className={`${showSpinner ? "opacity-0" : ""
            } envImg position-absolute mb-2 img-fluid`}
        />
        {showSpinner && (
          <div
            className="position-absolute start-0 end-0 top-0 bottom-0 d-flex bg-secondary"
            style={{ pointerEvents: "none" }}
          >
            <Spinner
              animation="border m-auto"
              variant="dark"
              role="status"
            ></Spinner>
          </div>
        )}
      </div>
      <p className="fw-bold"> {product.title} USD {product.price}</p>

    </Link>

  );
}

export default ProductCard;
