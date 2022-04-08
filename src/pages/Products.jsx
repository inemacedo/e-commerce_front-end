import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import { Spinner, ProgressBar } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error.message === "Failed to fetch") {
          setProducts("Failed to fetch");
        }
      }
    };
    getProducts();
  }, []);

  return (
    <div className="products my-5">
      <h2 className="fs-5 text-center mb-4 fw-bold">CATÁLOGO</h2>
      {products === "Failed to fetch" ? (
        <h3 className="text-center text-secondary">
          Lo sentimos mucho, estamos teniendo problemas con el servidor.
        </h3>
      ) : products.length === 0 ? (
        <div className="d-flex">
          <Spinner animation="border mx-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
}

export default Products;
