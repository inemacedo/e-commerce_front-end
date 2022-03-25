import React from "react";
import "../styles/Header.css";

function Header({title}) {
  return (
    <div className="header-background d-flex align-items-center justify-content-center">
      <h1 className="text-light">{ title ? title : "Tu casa, tu lugar en el mundo"}</h1>
    </div>
  );
}

export default Header;
