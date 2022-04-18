import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import Order from "../components/Order";
import { ToastContainer, Toast } from "react-bootstrap";

function MyOrders() {
  const { user, token } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  const [showToast, setShowToast] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleShowToast = (order) => {
    setShowToast(true);
    setOrderId(order.id);
  }
  const handleDelete = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "/orders",
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setOrders(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return !token ? (
    <Navigate to="/" />
  ) : (
    <div className="container py-5 h-100">
      <ToastContainer
        style={{ transition: "all .15s", zIndex: "2" }}
        className={`${showToast ? "opacity-1" : "opacity-0"} position-fixed bg-white ms-5 m-2 p-0`}
        position="top-end"
      >
        <Toast
          className="bg-"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Header
            className="d-flex justify-content-between"
            closeButton={true}
          >
            <button className="btn btn-outline-danger" onClick={handleDelete} >Cancelar la orden</button>
          </Toast.Header>
        </Toast>
      </ToastContainer>

      <div className="row g-5">
        <div className="col-12 col-lg-7">
          <div className="d-flex justify-content-between align-items-center mb-3"></div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="fs-4 fw-bold mb-0 text-black">MIS ÓRDENES</h1>
            {/* <Link to="/profile" className="btn btn-dark ms-auto">
          Editar usuario
        </Link> */}
          </div>
          <hr className="my-4" />

          {orders[0] ? (
            orders.map((order) => <Order order={order} key={order.id + 1000} handleDelete={handleShowToast} />)
          ) : (
            <div className="mb-5 d-flex justify-content-center ">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </div>
        <div className="col-12 col-lg-5">
          <div className="p-5 bg-grey d-flex flex-column">
            <h3 className="fw-bold fs-4 mb-4">MIS DATOS</h3>
            <div>
              <span>Nombre: {user.firstname}</span>
            </div>
            <div>
              <span>Apellido: {user.lastname}</span>
            </div>
            <div>
              <span>Email: {user.email}</span>
            </div>
            <div>
              <span>Dirección: {user.address}</span>
            </div>
            <div>
              <span>Teléfono: {user.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
