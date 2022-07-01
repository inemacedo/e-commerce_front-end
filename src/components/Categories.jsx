import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        // console.log(response);
        if (response.status === 200) {
          const data = await response.json();
          // console.log(data);
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
      <div className="flex-wrap d-flex">
        {categories.map((category) => (
          <div className="col-12 col-md-4 position-relative" key={category.id}>
            <Link
              to={`/categoria/${category.name}`}
              className="text-decoration-none position-relativ"
            >
              <div
                style={{
                  backgroundImage: `url("${category.image}")`,
                  height: "45rem",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="category-title">
                {/* <div></div> */}
                <h3 className="text-dark text-center fw-bold fs-5 text-uppercase mt-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
