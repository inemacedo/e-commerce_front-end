import { useState } from "react";
import { Link } from "react-router-dom";

function FloatingAboutUs() {
  // useState();

  return (
    <div id="floatingAboutUs">
      <Link
        className="text-decoration-none text-dark px-4 py-1 shadow-lg"
        to="/sobre-nosotros"
      >
        <h5>Sobre nosotros</h5>
      </Link>
    </div>
  );
}

export default FloatingAboutUs;
