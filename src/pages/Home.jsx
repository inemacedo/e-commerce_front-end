import React from "react";
import ProductsList from "../components/ProductsList";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <h2 className="fs-4 text-center mb-5 fw-bold"> DESTACADOS</h2>
      <ProductsList />
    </div>
  );
}

export default Home;
