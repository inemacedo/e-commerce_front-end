import { useDispatch } from "react-redux";
import QuantityInput from "./QuantityInput";
import { BsTrash } from "react-icons/bs";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleUpdateQtty = () => {
    console.log("Checkear si hay stock");
  };

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: item.id,
    });
  };

  return (
    <tr className="border-bottom">
      <td className="py-2">
        <img
          src={item.image}
          className="img-fluid"
          style={{ maxHeight: "200px" }}
          alt="Cotton T-shirt"
        />
      </td>
      <td>
        <h4 className="fs-5 text-muted">{item.title}</h4>
      </td>
      <td>
        <QuantityInput
          product={item}
          handleDelete={handleDelete}
          quantityTotal={item.quantity}
          handleUpdateQtty={handleUpdateQtty}
        />
      </td>
      <td>
        <h6 className="m-0 text-end">USD {item.price}.00</h6>
      </td>
    </tr>
  );
}

export default CartItem;
