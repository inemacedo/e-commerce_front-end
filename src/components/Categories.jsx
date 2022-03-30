import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("useEffect", process.env.REACT_APP_API_URL);
    const getCategories = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/categories`
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <div className="mb-5">
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
