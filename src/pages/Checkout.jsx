import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { appendErrors, useForm } from "react-hook-form";
import { Spinner, ProgressBar } from "react-bootstrap";


function Cart() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const [thanks, setThanks] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (order)=>{
    setShowSpinner(true);
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    };

    try {
      const fetchResponse = await fetch(
        process.env.REACT_APP_API_URL+"/orders",
        settings
      );
      const data = await fetchResponse.json();
      if( data.status === 200 ){
        setTimeout( ()=>setThanks(true) , 2000 );
      }
      console.log("usuario creado");
      return data;
    } catch (err) {
      return err;
    }
  }

  const total = cart.reduce(
    (acc, product) => (acc += Number(product.price * product.quantity)),
    0
  );

  return !user.token ? ( thanks ? <Navigate to="/gracias"/> : <Navigate to="/login"/> ) :(
    <div className="container py-5 h-100">

      {showSpinner&&<Spinner animation="border mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}

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

          <form className="mb-4" onSubmit={handleSubmit(onSubmit)} >
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
              COMPRAR
            </button>
          </form>

        </div>

      </div>


    </div>
  );
}

export default Cart;
