import React from "react";
import QuantityInput from "../components/QuantityInput";

function Product() {
  return (
    <div className="mx-5 my-5">
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
            <h1 className="fs-2 fw-bold">
              Mesa De Centro Alaia De Madera Maciza De Acacia Con Acabado
              Natural 115 X 65 Cm
            </h1>
            <p>Art:CC6003M43</p>
            <h2 className="fs-3 fw-bold">USD 756</h2>
            <div className="d-flex mb-0">
              <QuantityInput />
              <button
                type="button"
                className="btn btn-dark rounded-pill py-3 px-4 fw-bold"
              >
                Añadir al Carrito
              </button>
            </div>
            <hr />
            <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
