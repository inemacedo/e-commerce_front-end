import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Header from "../components/Header";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";

import { Spinner, ProgressBar } from "react-bootstrap";


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products?featured=true`
        );
        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
        if(error.message === "Failed to fetch"){
          setProducts("Failed to fetch");
        }
      }
    };
    getProducts();
  }, []);

  return (
    <div className="mt-5">
      <h1 className="fs-4 text-center mb-5 fw-bold">Error 404</h1>

      {/* <ProgressBar animated variant="dark" now={45} /> */}

      <div className="text-center">
        <Link
          to="/"
          className="btn btn-dark rounded-pill py-2 px-5 mt-4 fw-bold button-home"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Home;
