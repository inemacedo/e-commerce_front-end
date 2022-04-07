import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, ProgressBar } from "react-bootstrap";


function Order({ order }) {

  return <div className="p-2 rounded bg-secondary" >
    <h5>Orden {order.createdAt}</h5>
    <div className="row g-2 ">
      <div className="col-12 col-lg-5">
        <div className="card">
          <div className="card-header">Detalles</div>
          <div className="card-body">
            <p>Direccion: {order.address}</p>
            <p>Forma de pago: {order.paymentMethod}</p>
            <p>Fecha: {order.createdAt}</p>
            <p className="fw-bolder" >Estado: {order.status}</p>
            <p>Total: ${order.totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            Artículos
          </div>
          <div className="card-body">
            {order.products.map(product => <p key={product.id} >{product.title}</p>)}
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <div className="card">
          <div className="card-header">
            Acciones
          </div>
          <div className="card-body d-flex flex-column">
            <button className="btn btn-sm btn-primary" >Accion 1</button>
            <button className="btn btn-sm btn-success" >Accion 2</button>
            <button className="btn btn-sm btn-danger" >Borrar</button>
          </div>
        </div>
      </div>
    </div>
    {/* <hr /> */}
  </div>;
}

function MyOrders() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + "/orders", {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${user.token}`
          }
        });
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setOrders(data);
        }

      } catch (error) {
        console.log(error);
      }
    }
    getOrders();

  }, []);

  return !user.token ? (
    <Navigate to="/" />
  ) : <div className="container mt-5">

    <div className="d-flex flex-wrap align-items-center justify-content-between mb-5">
      <h2 className="text-uppercase m-0" >Mis Ordenes</h2>
      <Link to="/profile" className="btn btn-dark" >Editar usuario</Link>
    </div>

    {orders ? orders.map(order => <Order order={order} key={order.id} />) :
      <div className="mb-5 d-flex justify-content-center" >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>}

  </div>;

}

export default MyOrders;
