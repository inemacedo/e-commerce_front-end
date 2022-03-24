import React from "react";
import { NavLink } from "react-router-dom";

function ProductComponent() {
  return (
    <div>
      <NavLink to="/producto">
        <img
          src="https://f.fcdn.app/imgs/9d72e8/www.kavehome.com.uy/kaveuy/d9bf/webp/catalogo/CC6003M43_CC6003M43_1/900x1125/mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm-mesa-de-centro-alaia-de-madera-maciza-de-acacia-con-acabado-natural-115-x-65-cm.jpg"
          alt="Mesa De Centro"
          className="mb-2 img-fluid"
        ></img>
      </NavLink>

      <p>
        Mesa De Centro Alaia De Madera Maciza De Acacia Con Acabado Natural 115
        X 65 Cm
      </p>
      <p className="fw-bold">USD 756</p>
    </div>
  );
}

export default ProductComponent;
