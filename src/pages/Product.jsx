import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import QuantityInput from "../components/QuantityInput";

import "../styles/Product.css";

function Product() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("useEffect", process.env.REACT_APP_API_URL);
    const getProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${params.id}`
      );
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    getProduct();
  }, []);

  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: product,
    });
  };

  return (
    <div className="m-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="fs-4 fw-bold mb-1">{product.title}</h1>
            <p className="text-secondary">Art:{product.id}</p>
            <h2 className="fs-5 fw-bold my-3">USD {product.price}</h2>
            <p>{product.description}</p>
            <hr />
            <div className="row gy-3 my-4 align-items-center">
              <div className="col-12 col-lg-6 d-flex" ><QuantityInput /></div>
              <div className="col-12 col-lg-6 d-flex">
                <button
                  type="button"
                  className="btn btn-dark rounded-pill fw-bold py-3 px-4 w-100"
                  onClick={handleClick}
                  style={{"height": "4rem", "border": "none"}}
                >Añadir al Carrito</button>
              </div>
            </div>

            <div className="mb-5">
              <p>Métodos y costos de envío</p>
              <p className="fw-bold mb-1">A todo Montevideo:</p>
              <p>
                Envío sin costo en compras mayores a USD 100 | Costo normal: USD
                6
              </p>
              <p className="fw-bold mb-1">
                Interior (a cargo del cliente). Lo depositamos en DAC:
              </p>
              <p>Costo variable según tamaño del paquete.</p>
              <p className="fw-bold mb-1">
                A todo Maldonado, vía DePunta (a cargo del cliente):
              </p>
              <p>Costo variable según tamaño del paquete.</p>
            </div>
            <table className="table ">
              <tbody>
                <tr>
                  <td className="fw-bold">CARACTERÍSTICAS</td>
                </tr>

                <tr>
                  <td>Medidas:</td>
                  <td>{product.measures}</td>
                </tr>
                <tr>
                  <td>Material:</td>
                  <td>{product.material}</td>
                </tr>
                <tr>
                  <td>Estilo:</td>
                  <td colSpan="2">{product.style}</td>
                </tr>
                <tr>
                  <td>Ambiente:</td>
                  <td colSpan="2">{product.environment}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
