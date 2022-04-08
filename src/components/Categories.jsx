import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Categories.css";

import { Spinner, ProgressBar } from "react-bootstrap";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/categories`
        );
        console.log(response);
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setCategories(data);
        }
      } catch (error) {
        if (error.message === "Failed to fetch") {
          setCategories("Failed to fetch");
        }
      }
    };
    getCategories();
  }, []);

  return categories === "Failed to fetch" ? (
    <h3 className="text-center text-secondary">
      Lo sentimos mucho, estamos teniendo problemas con el servidor.
    </h3>
  ) : categories.length === 0 ? (
    <div className="d-flex">
      <Spinner animation="border mx-auto" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <div className="home-images-responsive mb-5">
      <div className="d-flex">
        {categories.map((category) => (
          <div className="col-12 col-md-4" key={category.id}>
            <NavLink
              to={`/categoria/${category.name}`}
              className="text-decoration-none"
            >
              <div
                style={{
                  backgroundImage: `url("${category.image}")`,
                  height: "45rem",
                  backgroundSize: "cover",
                }}
              ></div>
              <h3 className="text-dark fs-5 text-uppercase mt-2 text-center">
                {category.name}
              </h3>
              {/* <p className="text-center text-dark fs-6">Descubrir</p> */}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
