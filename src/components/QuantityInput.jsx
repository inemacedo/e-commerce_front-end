import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/QuantityInput.css";
import cartActions from "../redux/cartActions";

//tengo q sumarle o restarle al array de cart
function QuantityInput({ handleUpdateQtty, quantityTotal }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(quantityTotal);

  return (
    <div className="quantity-wrap">
      <button
        className="quantity-button"
        onClick={() => dispatch(cartActions.removeItemCart)}
      >
        -
      </button>
      <input
        value={quantityTotal}
        onChange={(ev) => setQuantity(ev.target.value)}
        type="number"
        className="quantity-input"
      />
      <button
        className="quantity-button"
        onClick={() => dispatch(cartActions.addItemCart)}
      >
        +
      </button>
    </div>
  );
}

export default QuantityInput;
