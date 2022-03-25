import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


function Cart() {

  const store = [
    {
      title: "Butaca Plegable Chabeli Madera Maciza Acacia",
      imgUrl: "https://f.fcdn.app/imgs/e9eaa1/www.kavehome.com.uy/kaveuy/6298/webp/catalogo/CC2094J_12_1/900x1125/butaca-plegable-chabeli-madera-maciza-acacia-y-beige-fsc-100.jpg",
      price: 247,
    },
    {
      title: "Sofá Debra 2 Plazas Terciopelot",
      imgUrl: "https://f.fcdn.app/imgs/485c46/www.kavehome.com.uy/kaveuy/68f7/webp/catalogo/S547JU_85_1/900x1125/sofa-debra-2-plazas-terciopelo-topo-182-cm.jpg",
      price: 928,
    },
    {
      title: "Mesa Deyanira De Chapa De Roble Y Patas De Madera Maciza De Roble",
      imgUrl: "https://f.fcdn.app/imgs/28972c/www.kavehome.com.uy/kaveuy/c936/webp/catalogo/IT0288M40_IT0288M40_1/900x1125/mesa-deyanira-de-chapa-de-roble-y-patas-de-madera-maciza-de-roble-220-x-110-cm-mesa-deyanira-de-chapa-de-roble-y-patas-de-madera-maciza-de-roble-220-x-110-cm.jpg",
      price: 576,
    },
  ]

  const total = store.reduce( (acc, elem)=> acc+=elem.price , 0 );

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
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4" />
                      { store.map( elem=><CartItem
                          title={elem.title}
                          imgUrl={elem.imgUrl}
                          price={elem.price}
                        />) }


                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to="/productos" className="text-body">
                            <AiOutlineArrowLeft />
                            Volver a lista de productos
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 col-xlg-4">
                    <div className="p-5 bg-grey">
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
                        <h5 className="text-uppercase">PRECIO TOTAL + 10% de Envío</h5>
                        <h5>USD {total + (total*0.1)}</h5>
                      </div>
                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg rounded-pill"
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
