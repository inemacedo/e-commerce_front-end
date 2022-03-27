import { useDispatch, useSelector } from "react-redux";
import QuantityInput from "../components/QuantityInput";
import { BsTrash } from "react-icons/bs";

function CartItem({ title, imgUrl, price }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleUpdateQtty = () => {
    console.log("Checkear si hay stock");
  };

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: cart.id,
    });
  };

  return (
    <>
      <div className="row gy-4 justify-content-between align-items-center">
        <div className="col-md-3">
          <img src={imgUrl} className="w-100" alt="Cotton T-shirt" />
        </div>
        <div className="col-md-3 col-lg-6">
          <h4 className="fs-5 text-muted">{title}</h4>
        </div>
        <div className="col-md-3">
          <QuantityInput handleUpdateQtty={handleUpdateQtty} />
        </div>
        <div className="col-md-3 ms-auto text-end">
          <div className="d-flex justify-content-end align-items-center">
            <h6 className="mb-0 me-3">USD {price}.00</h6>
            <button className="border-0 bg-white px-0 pt-0 pb-1">
              <BsTrash size={14} color={"grey"} onClick={handleDelete} />
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
