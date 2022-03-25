import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuantityInput from "../components/QuantityInput";

import "../styles/Product.css";

function Product() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
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

  return (
    <div className="m-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-7">
            <img
              src="https://f.fcdn.app/imgs/9d72e8/www.kavehome.com.uy/kaveuy/d9bf/webp/catalogo/CC6003M43_CC6003M43_1/900x1125/mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm-mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-5">
            <h1 className="fs-4 fw-bold mb-1">
              Mesa De Centro Alaia De Madera Maciza De Acacia Con Acabado
              Natural 115 X 65 Cm
            </h1>
            <p className="text-secondary">Art:CC6003M43</p>
            <h2 className="fs-5 fw-bold my-3">USD 756</h2>
            <p>Mesa de centro. Madera maciza. Estilo Colonial.</p>
            <hr />
            <div className="d-flex flex-wrap my-5">
              <QuantityInput />
              <button
                type="button"
                className="btn btn-dark rounded-pill py-3 px-4 fw-bold mt-4 mt-md-0"
              >
                Añadir al Carrito
              </button>
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
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>Material:</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>Estilo:</td>
                  <td colSpan="2">Larry the Bird</td>
                </tr>
                <tr>
                  <td>Ambiente:</td>
                  <td colSpan="2">Larry the Bird</td>
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
