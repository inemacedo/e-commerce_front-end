import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect", process.env.REACT_APP_API_URL);
    const getProducts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="products my-5">
      <ProductsList products={products} />
    </div>
  );
}

export default Products;
