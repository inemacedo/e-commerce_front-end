import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../components/ProductsList";

function Category() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProductsByCategory = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products?category=${params.nombre}`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    getProductsByCategory();
  }, []);

  return (
    <div>
      <h2 className="fs-5 text-center mb-4 fw-bold">CATÁLOGO</h2>
      <ProductsList products={products} />
    </div>
  );
}

export default Category;
