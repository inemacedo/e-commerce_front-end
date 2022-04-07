import { format, parseISO } from "date-fns";
import { BsTrash } from "react-icons/bs";

function Order({ order }) {
  return (
    <div>
      <h5 className="fw-bold">Orden {order.id}</h5>
      <div className="row">
        <div className="col-md-6">
          <p className="my-0">Direccion: {order.address}</p>
          <p className="my-0">Forma de pago: {order.paymentMethod}</p>
          <p className="my-0">
            Fecha: {format(parseISO(order.createdAt), "PP")}
          </p>
          <p className="fw-bolder my-0">Estado: {order.status}</p>
          <p className="my-0">Total: ${order.totalPrice}</p>
        </div>
        <div className="col-md-6">
          Articulos:
          {order.products.map((product) => (
            <p key={product.id} className="my-0">
              - {product.title}
            </p>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <button className="border-0 bg-white px-0 pt-0 pb-1 mt-3">
          <BsTrash size={15} color={"grey"} />
        </button>
      </div>
      <hr className="mb-4" />
    </div>
  );
}

export default Order;