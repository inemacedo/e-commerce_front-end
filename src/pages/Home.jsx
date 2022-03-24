import React from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <ProductsList />
      </div>
    </div>
  );
}

export default Home;
