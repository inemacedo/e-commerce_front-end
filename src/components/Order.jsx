import { format, parseISO } from "date-fns";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Modal }
import { ToastContainer, Toast } from "react-bootstrap";

function Order({ order, handleDelete }) {

  const { products } = order;

  return (
    <div>

      <div className="my-2 d-flex align-items-center justify-content-between" >
        <h5 className="fw-bold m-0">Orden {order.id}</h5>
        <button className="btn p-0" onClick={() => handleDelete(order)} >
          <BsTrash size={20} color={"grey"} />
        </button>
      </div>
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
          <ul>
            {products[0] && products.map((product) => (
              <li key={product.id} className="my-0">{product.title} (x{product.quantity})</li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="mb-4" />
    </div>
  );
}

export default Order;
