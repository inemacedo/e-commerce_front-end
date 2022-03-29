import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink to={`/categoria/${category.name}`}>
              <img src={category.image} alt={category.name} className="w-100" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
