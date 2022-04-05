import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import { Spinner } from "react-bootstrap";

function Category() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProductsByCategory = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products?category=${params.name}`
      );
      const data = await response.json();
      setProducts(data);
    };
    getProductsByCategory();
  }, [params]);

  return (
    <div className="products my-5">
      <h2 className="fs-5 text-center mb-4 fw-bold text-uppercase">
        {params.name}
      </h2>
      {products.length === 0 ? 
      <div className="d-flex" >
       <Spinner animation="border mx-auto" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      </div>
      :
        <ProductsList products={products} />}
    </div>
  );
}

export default Category;
