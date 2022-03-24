import React from "react";
import ProductsList from "../components/ProductsList";
import NavbarComponent from "../components/NavbarComponent";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <NavbarComponent />
      <Header />
      <ProductsList />
    </div>
  );
}

export default Home;
