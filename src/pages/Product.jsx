import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Product.css";
import ImageGallery from "react-image-gallery";

import { ToastContainer, Toast } from "react-bootstrap";

function Product() {
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${params.slug}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, []);

  const images = [
    {
      original: product.imgBaseUrl + "/" + product.image,
      thumbnail: product.imgBaseUrl + "/" + product.image,
      originalHeight: 800,
    },
    {
      original: product.imgBaseUrl + "/" + product.imageenvironment,
      thumbnail: product.imgBaseUrl + "/" + product.imageenvironment,
      originalHeight: 800,
    },
    {
      original: product.imgBaseUrl + "/" + product.imagemeasures,
      thumbnail: product.imgBaseUrl + "/" + product.imagemeasures,
      originalHeight: 800,
    },
  ];
  console.log(images);

  const handleClick = () => {
    setShow(true);
    dispatch({
      type: "ADD_ITEM_CART",
      payload: product,
    });
  };
  // {`${show?"bg-danger":""} p-1`}
  return (
    <div className="container position-relative">
      <ToastContainer
        style={{ transition: "all .15s", zIndex: "2" }}
        className={`${show ? "opacity-1" : "opacity-0"} bg-white ms-5 m-2 p-0`}
        position="top-end"
      >
        <Toast
          className="bg-"
          onClose={() => setShow(false)}
          show={show}
          delay={5000}
          autohide
        >
          <Link className="text-decoration-none m-0" to="/carrito-de-compras">
            <Toast.Header
              className="d-flex align-items-center"
              closeButton={false}
            >
              <BsCart2 className="text-dark align-self-start" size={24} />
              <span className="badge bg-dark fs-6 ms-1 pt-1">+1</span>
              <strong className="d-block text-dark fs-6 mx-3 my-0">
                Carrito
              </strong>
            </Toast.Header>
            <Toast.Body className="text-dark">
              Item agregado correctamente.
            </Toast.Body>
          </Link>
        </Toast>
      </ToastContainer>

      <div className="product-wrap my-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <ImageGallery
              items={images}
              onImageLoad={(ev) => {
                console.log("Imagen cargada", ev);
                ev.target.classList.add("opacity-1");
              }}
              /* showNav={false} */
              /* showFullscreenButton={false} */
              showPlayButton={false}
            />
          </div>
          <div className="col-lg-5">
            <h1 className="fs-4 fw-bold mb-1">{product.title}</h1>
            <p className="text-secondary">Art: {product.id}</p>
            <h2 className="fs-5 fw-bold my-3">USD {product.price}</h2>
            <p>{product.description}</p>
            <hr />
            <div className="d-flex flex-wrap my-5">
              <button
                type="button"
                className="btn btn-dark rounded-pill py-3 px-4 mt-4 mt-md-0"
                onClick={handleClick}
              >
                Añadir al Carrito
              </button>
            </div>
            <div className="mb-5 payment-methods-wrap">
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
            <h4 className="fw-bold">CARACTERÍSTICAS</h4>
            <div>
              <div className="row ">
                <h5 className="col-md-4">Medidas:</h5>
                <p className="col-md">{product.measures}</p>
              </div>
              <div className="row ">
                <h5 className="col-md-4">Material:</h5>
                <p className="col-md">{product.material}</p>
              </div>
              <div className="row ">
                <h5 className="col-md-4">Estilo:</h5>
                <p className="col-md" colSpan="2">
                  {product.style}
                </p>
              </div>
              <div className="row ">
                <h5 className="col-md-4">Ambiente:</h5>
                <p className="col-md" colSpan="2">
                  {product.environment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
