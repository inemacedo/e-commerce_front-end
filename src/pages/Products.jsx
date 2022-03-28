import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect", process.env.REACT_APP_API_URL);
    const getProducts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const data = await response.json();

      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="products my-5">
      <h2 className="fs-5 text-center mb-4 fw-bold">CATÁLOGO</h2>
      <ProductsList products={products} />
    </div>
  );
}

export default Products;
