import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/QuantityInput.css";
import cartActions from "../redux/cartActions";

//tengo q sumarle o restarle al array de cart
function QuantityInput({ handleUpdateQtty, quantityTotal, product }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(quantityTotal);
  const handleAddUnit = () => {
    dispatch(cartActions.addItemCart(product));
    setQuantity((prevValue) => prevValue + 1);
  };
  const handleRemoveUnit = () => {
    if (quantity !== 1) {
      dispatch(cartActions.removeUnitCart(product));
      setQuantity((prevValue) => prevValue - 1);
    }
  };
  return (
    <div className="quantity-wrap">
      <button className="quantity-button" onClick={handleRemoveUnit}>
        -
      </button>
      <input value={quantity} type="number" className="quantity-input" />
      <button className="quantity-button" onClick={handleAddUnit}>
        +
      </button>
    </div>
  );
}

export default QuantityInput;
