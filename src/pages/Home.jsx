import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Header from "../components/Header";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect", process.env.REACT_APP_API_URL);
    const getProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products?featured=true`
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div className="home">
      <Header />
      <h2 className="fs-4 text-center mb-5 fw-bold"> DESTACADOS</h2>
      <ProductsList products={products} />
      <div className="text-center">
        <Link
          to="/productos"
          className="btn btn-dark rounded-pill py-2 px-5 mt-5 fw-bold button-home"
        >
          Ver Todos
        </Link>
      </div>
    </div>
  );
}

export default Home;
