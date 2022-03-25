import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const total = cart.reduce( (acc, elem)=> acc+=Number(elem.price) , 0 );

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2 border-0">
              <div className="card-body p-0">
                <div className="row gx-5">
                  <div className="col-12 col-lg-7 col-xlg-8">
                    <div className="">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fs-3 mb-0 text-black">Mis compras</h1>
                        <h6 className="mb-0 text-muted">{cart.length} items</h6>
                      </div>
                      <hr className="my-4" />
                      {cart.map((elem) => (
                        <CartItem
                          key={elem.id}
                          title={elem.title}
                          imgUrl={elem.image}
                          price={elem.price}
                        />
                      ))}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to="/productos" className="btn mb-3">
                            <AiOutlineArrowLeft />
                            Volver a lista de productos
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 col-xlg-4">
                    <div className="p-5 bg-grey d-flex flex-column">
                      <h3 className="mb-5 fs-3 mt-2 pt-1">Total</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items 3</h5>
                        <h5>USD {total}.00</h5>
                      </div>
                      <h5 className="text-uppercase mb-3">
                        Dirección de envío
                      </h5>
                      <div className="mb-4 pb-2">
                        <input
                          type="text"
                          id="form3Examplea2"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">
                          PRECIO TOTAL + 10% de Envío
                        </h5>
                        <h5>USD {total + total * 0.1}</h5>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg rounded-pill align-self-end"
                        data-mdb-ripple-color="dark"
                      >
                        COMPRAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
