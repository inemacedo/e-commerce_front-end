import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Checkout.css";
import { useNavigate } from "react-router-dom";

async function fetchData({ url, method, token, body }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const { user, token } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, product) => (acc += Number(product.price * product.quantity)),
    0
  );

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    await fetchData({
      url: process.env.REACT_APP_API_URL + "/orders",
      method: "POST",
      token: token,
      body: { cart, total },
    });
    navigate("/gracias");
    console.log(ev);
  };

  return (
    <section className="container py-5 h-100">
      <form onSubmit={handleSubmit}>
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="fs-4 fw-bold mb-0 text-black">
                DETALLES FACTURACIÓN
              </h1>
            </div>
            <hr className="my-4" />

            <div className="mb-2">
              <span className="fw-bold">Nombre y Apellido: </span>
              <span>{user.firstname} </span>
              <span>{user.lastname}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Dirección: </span>
              <span>{user.address} </span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Email: </span>
              <span>{user.address}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Teléfono: </span>
              <span>{user.phone}</span>
            </div>

            <h4 className="fs-5 fw-bold mt-4 mb-4">
              Ingresá los datos de la tarjeta
            </h4>
            {/* <img
            src="https://azioqgupehjwofkjwddr.supabase.co/storage/v1/object/public/e-commerce/paymentmethods/payment.jpg"
            alt=""
            className="payment mt-4 mb-md-5 mb-3"
          /> */}

            <div className="mb-4">
              <label className="form-label">Número de tarjeta *</label>
              <input
                type="text"
                className="form-control"
                value="1534-5627-9994-4444"
              />
            </div>
            <div className="mb-4">
              <label className="form-label">
                Nombre y apellido titular de la tarjeta *
              </label>
              <input
                type="text"
                className="form-control"
                value={`${user.firstname} ${user.lastname}`}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Fecha de vencimiento *</label>
                <input
                  type="date"
                  className="form-control me-5"
                  value="2024-07-22"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Código de Seguridad *</label>
                <input
                  type="number"
                  className="form-control me-5"
                  value="552"
                />
              </div>
              <img
                src="https://azioqgupehjwofkjwddr.supabase.co/storage/v1/object/public/e-commerce/paymentmethods/payment.jpg"
                alt=""
                className="payment mt-5 mb-md-5 mb-3"
              />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="p-5 bg-grey d-flex flex-column mb-5">
              <h3 className="fw-bold fs-4">TU PEDIDO</h3>
              {cart.map((product) => (
                <div className="row mt-4 ">
                  <div className="col-6">{product.title} </div>
                  <div className="col-6 d-flex justify-content-end">
                    <p>
                      <span className="fw-bold">
                        USD {product.price * product.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              ))}

              <hr />
              <div className="d-flex justify-content-between fw-bold pt-3">
                <p>Importe total</p>
                <p>USD {total > 1000 ? total / 1000 : total}</p>
              </div>
              <hr />
              <p className="m-1 fw-bold ms-0 mt-3">Aclaraciones</p>
              <div className="refund-details mb-1">
                <span className="fw-bold">Cambios: </span>
                <span>
                  todos los productos cuentan con 30 días para realizar cambios
                  (es necesaria la factura y el producto en perfecto estado).
                </span>
              </div>
              <div className="refund-details">
                <span className="fw-bold">Devoluciones: </span>
                <span>
                  Todos los productos cuentan con 5 días para devolución y
                  reembolso del dinero. Envíos desde el interior corren por
                  cuenta del cliente.
                </span>
              </div>
              <button
                type="submit"
                className={`${
                  cart.length > 0 ? "" : "disabled"
                } btn btn-dark btn-block btn-lg rounded-pill align-self-end px-4 py-2 me-auto mt-4`}
                data-mdb-ripple-color="dark"
              >
                REALIZAR PEDIDO
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Checkout;
