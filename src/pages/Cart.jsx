import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const hasProducts = cart.length > 0;
  const totalCartItems = cart.reduce(
    (acc, elem) => (acc += Number(elem.quantity)),
    0
  );
  const total = cart.reduce(
    (acc, product) => (acc += Number(product.price * product.quantity)),
    0
  );

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
                        <h1 className="fs-4 fw-bold mb-0 text-black">
                          MIS COMPRAS
                        </h1>
                        <h6 className="mb-0 text-muted">
                          {totalCartItems} items
                        </h6>
                      </div>
                      <hr className="my-4" />
                      {hasProducts ? (
                        cart.map((product) => (
                          <CartItem key={product.id} item={product} />
                        ))
                      ) : (
                        <p>No hay productos en el carrito aún</p>
                      )}
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
                      <h3 className="fw-bold fs-4 text-uppercase">Subtotal</h3>
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

                      <hr/>
                      <p className="fw-bold text-end" >USD {total>1000?total/1000:total}</p>
                      <hr/>

                      <Link
                        to="/checkout"
                        type="button"
                        className={`${cart.length>0 ? "" : "disabled"} btn btn-dark btn-block btn-lg rounded-pill align-self-end`}
                        data-mdb-ripple-color="dark"
                      >
                        FINALIZAR COMPRA
                      </Link>
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
