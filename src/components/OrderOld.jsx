import { format, parseISO } from "date-fns";

function Order({ order }) {
  return (
    <div>
      <div className="card my-4 w-50">
        <div className="card-header">Orden {order.id}</div>
        <div className="card-body p-4">
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
        </div>
      </div>
    </div>
  );
}

export default Order;
