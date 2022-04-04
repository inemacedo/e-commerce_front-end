import React from "react";
import { GrStatusGood } from "react-icons/gr";

function ThankYou() {
  return (
    <div className="container text-center mb-5">
      <GrStatusGood className="mt-5" size="70" />
      <h1 className="mt-5 mb-5">Muchas gracias por tu compra!</h1>
      <p className="text-center">
        En breves recibirás un correo de confirmación.{" "}
      </p>
    </div>
  );
}

export default ThankYou;
