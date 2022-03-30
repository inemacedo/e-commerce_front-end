import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Product.css";
import ImageGallery from "react-image-gallery";

function Product() {
  const dispatch = useDispatch();
  const params = useParams();
  const [product, setProduct] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${params.slug}`
      );
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    getProduct();
  }, []);

  const images = [
    {
      original: product.image,
      thumbnail: product.image,
      originalHeight: 800,
    },
    {
      original: product.imageenvironment,
      thumbnail: product.imageenvironment,
      originalHeight: 800,
    },
    {
      original: product.imagemeasures,
      thumbnail: product.imagemeasures,
      originalHeight: 800,
    },
  ];

  const handleClick = () => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: product,
    });
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
    setShowAlert(true);
  };

  return (
    <div className="container">
      <div className="product-wrap my-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <ImageGallery
              items={images}
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
                className="btn btn-dark rounded-pill py-3 px-4 fw-bold mt-4 mt-md-0"
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
            <table className="table ">
              <tbody>
                <tr>
                  <td className="fw-bold">CARACTERÍSTICAS</td>
                </tr>

                <tr>
                  <td>Medidas:</td>
                  <td>{product.measures}</td>
                </tr>
                <tr>
                  <td>Material:</td>
                  <td>{product.material}</td>
                </tr>
                <tr>
                  <td>Estilo:</td>
                  <td colSpan="2">{product.style}</td>
                </tr>
                <tr>
                  <td>Ambiente:</td>
                  <td colSpan="2">{product.environment}</td>
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
