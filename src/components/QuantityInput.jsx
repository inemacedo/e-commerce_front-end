import React from "react";
import { useState } from "react";
import "../styles/QuantityInput.css";

//tengo q sumarle o restarle al array de cart
function QuantityInput({ handleUpdateQtty }) {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = (ev) => {
    setQuantity((prevValue) => prevValue + 1);
    handleUpdateQtty();
  };

  const handleDecrement = (ev) => {
    setQuantity((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue)); //si es mayor a 1 restarle 1, para que no de neg.
  };

  return (
    <div className="quantity-wrap">
      <button className="quantity-button" onClick={handleDecrement}>
        -
      </button>
      {/* //falta input */}
      <span className="quantity-input">{quantity}</span>
      <button className="quantity-button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default QuantityInput;
