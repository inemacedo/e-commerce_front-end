import React from "react";
import ProductsList from "../components/ProductsList";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <ProductsList />
    </div>
  );
}

export default Home;
