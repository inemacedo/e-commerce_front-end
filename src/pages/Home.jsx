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
    console.log("useEffect", process.env.REACT_APP_API_URL);
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
    <div className="home">
      <Header />
      <h2 className="fs-4 text-center mb-5 fw-bold">DESTACADOS</h2>

      { products==="Failed to fetch" ?
      <h3 className="text-center text-secondary" >Lo sentimos mucho, estamos teniendo problemas con el servidor.</h3>
      : products.length===0 ? <div className="d-flex" >
        <Spinner animation="border mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> : <ProductsList products={products} /> }

      {/* <ProgressBar animated variant="dark" now={45} /> */}

      <div className="text-center">
        <Link
          to="/productos"
          className="btn btn-dark rounded-pill py-2 px-5 mt-4 fw-bold button-home"
        >
          Ver Todos
        </Link>
      </div>
      <h2 className="fs-4 text-center mb-5 fw-bold">CATEGORÍAS</h2>
      <Categories />
    </div>
  );
}

export default Home;
