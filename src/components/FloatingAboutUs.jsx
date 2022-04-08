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
        <span>Sobre nosotros</span>
      </Link>
    </div>
  );
}

export default FloatingAboutUs;
