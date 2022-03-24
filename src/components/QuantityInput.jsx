import React from "react";
import { useState } from "react";

function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = (ev) => {
    setQuantity((prevValue) => prevValue + 1);
  };

  const handleDecrement = (ev) => {
    setQuantity((prevValue) => prevValue - 1);
  };

  return (
    <div>
      <span className="border py-2 px-3" onClick={handleIncrement}>
        -
      </span>
      <input type="number" className="border w-25" value={quantity} />
      <span className="border py-2 px-3" onClick={handleDecrement}>
        +
      </span>
    </div>
  );
}

export default QuantityInput;
