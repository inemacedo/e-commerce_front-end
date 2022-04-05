import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { appendErrors, useForm } from "react-hook-form";
import { Spinner, ProgressBar } from "react-bootstrap";


function Cart() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const path = useSelector((state) => state.path);
  const dispatch = useDispatch();

  const [thanks, setThanks] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (order) => {
    setShowSpinner(true);
    
    try {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
        body: JSON.stringify(order)
      };
      setTimeout(async () => {
        const fetchResponse = await fetch(
          process.env.REACT_APP_API_URL + "/orders",
          settings
        );
        if (fetchResponse.status === 200) {
          const data = await fetchResponse.json();
          console.log(data);
        } else console.log("ELSE");

        setShowSpinner(false);
        setThanks(true)
      }, 2000);

    } catch (err) {
      console.log(err);
    }
  }

  const total = cart.reduce(
    (acc, product) => (acc += Number(product.price * product.quantity)),
    0
  );

  if (!path.prevPath) {
    dispatch({ type: "SAVE_PATH", payload: "/checkout" });
  }

  return !user.token ? (thanks ? <Navigate to="/gracias" /> : <Navigate to="/login" />) : (
    <div className="container py-5 h-100">

      {showSpinner && <div className=" bg-semi-transparent d-flex align-items-center justify-content-center position-fixed top-0 bottom-0 start-0 end-0" >
        <Spinner animation="border mx-auto" role="status" variant={"white"}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>}



      <div className="row g-5">

        <div className="col-12 col-lg-6" style={{ minWidth: "240px" }} >
          <form className="bg-grey p-4" onSubmit={handleSubmit(onSubmit)} >
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
            <hr />

            <button
              disabled={cart.length > 0 ? "" : "disabled"}
              type="submit"
              className="btn btn-dark btn-block btn-lg rounded-pill align-self-end"
              data-mdb-ripple-color="dark"
            >
              CONFIRMAR COMPRA
            </button>
          </form>

        </div>

        <div className="col-12 col-lg-6">
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
              USD {total}
            </span>
          </div>

          <div className="d-flex justify-content-between">
            <p>Total</p>
            <span className="fw-bold">
              USD {total}
            </span>
          </div>

        </div>

      </div>


    </div>
  );
}

export default Cart;
