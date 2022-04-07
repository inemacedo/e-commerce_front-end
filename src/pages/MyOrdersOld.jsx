import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, ProgressBar } from "react-bootstrap";
import Order from "../components/Order";

function MyOrders() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_API_URL + "/orders",
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${user.token}`,
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

  return !user.token ? (
    <Navigate to="/" />
  ) : (
    <div className="container mt-5">
      {/* <div className="d-flex flex-wrap align-items-center justify-content-between mb-5"> */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="fs-4 fw-bold mb-0 text-black">MIS COMPRAS</h1>
        <Link to="/profile" className="btn btn-dark ms-auto">
          Editar usuario
        </Link>
      </div>
      <hr className="my-4" />

      {/* 
      </div> */}

      {orders ? (
        orders.map((order) => <Order order={order} key={order.id} />)
      ) : (
        <div className="mb-5 d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default MyOrders;
