import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Categories.css";

import { Spinner, ProgressBar } from "react-bootstrap";


function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("useEffect", process.env.REACT_APP_API_URL);
    const getCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/categories`
        );
        const data = await response.json();
        console.log(data);
        setCategories(data);
        
      } catch (error) {
        if(error.message === "Failed to fetch"){
          setCategories("Failed to fetch");
        }
      }
    };
    getCategories();
  }, []);

  return categories==="Failed to fetch" ?
      <h3 className="text-center text-secondary" >Lo sentimos mucho, estamos teniendo problemas con el servidor.</h3>
      : categories.length===0 ? <div className="d-flex" >
        <Spinner animation="border mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> : (<div className="mb-5">
      <div className="row g-0">
        {categories.map((category) => (
          <div className="col-md-4" key={category.id}>
            <NavLink
              to={`/categoria/${category.name}`}
              className="text-decoration-none"
            >
              <div
                style={{
                  backgroundImage: `url("${category.image}")`,
                  height: "45rem",
                  backgroundSize: "cover",
                  marginBottom: "7rem",
                }}
              >
                <h3 className="text-center pt-5 text-dark fs-4 text-uppercase">
                  {category.name}
                </h3>
                <p className="text-center text-dark fs-6">Descubrir</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

{
  /* <div className="row g-0">
{categories.map((category) => (
  <div className="col-md-4" key={category.id}>
    <NavLink
      to={`/categoria/${category.name}`}
      className="text-decoration-none"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-100 position-relative"
      />
      <p className="position-absolute">{category.name}</p>
    </NavLink>
  </div>
))}
</div> */
}
