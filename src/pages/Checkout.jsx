import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const hasProducts = cart.length > 0;

  const total = cart.reduce(
    (acc, product) => (acc += Number(product.price * product.quantity)),
    0
  );

  return !user.token ? <Navigate to="/login" /> :(
    <div className="container py-5 h-100">

      <div className="row">

        <div className="col col-lg-6 p-3 p-md-5 bg-grey d-flex flex-column" style={{ minWidth: "240px" }} >
          <h3 className="fw-bold fs-4 p-1">TU PEDIDO</h3>
          <hr />
          {cart.map((product) => (
            <div>
              <div className="d-flex justify-content-between my-3">
                <p className="">{product.title} x{product.quantity}</p>
                <span className="fw-bold">
                  USD {product.price * product.quantity}
                </span>
              </div>
              <hr className="w-100" />
            </div>
          ))}

          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <span className="fw-bold">
              USD {total>1000?total/1000:total}
            </span>
          </div>

          <div className="d-flex justify-content-between">
            <p>Total</p>
            <span className="fw-bold">
              USD {total>1000?total/1000:total}
            </span>
          </div>

          <hr/>

          <form className="mb-4" >
            <label >Numero de tarjeta</label>
            <input
              type="number"
              className="form-control form-control-lg mb-2"
              placeholder="Escribe un número..."
            />
            <label >Nombre y apellido del titular de la tarjeta</label>
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Escribe un nombre..."
            />
            <label >Fecha de vencimiento de la tarjeta</label>
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Escribe un nombre..."
            />
            <label >Security code</label>
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Escribe un nombre..."
            />
          </form>

          <hr />

          <button
            disabled={hasProducts ? "" : "disabled"}
            type="button"
            className="btn btn-dark btn-block btn-lg rounded-pill align-self-end"
            data-mdb-ripple-color="dark"
          >
            COMPRAR
          </button>
        </div>

      </div>


    </div>
  );
}

export default Cart;
