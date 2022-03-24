import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Header from "../components/Header";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    console.log("useEffect", process.env.REACT_APP_API_URL);
    const getProducts = async ()=>{
      const response = await fetch(`${"http://localhost:8000"}/products`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }
    getProducts();
  } , [] )

  return (
    <div className="home">
      <Header />
      <ProductsList products={products} />
    </div>
  );
}

export default Home;
