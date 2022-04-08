import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, ProgressBar } from "react-bootstrap";
import Order from "../components/Order";

async function fetchData({ url, method, token, body }) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}

function MyOrders() {
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState({});

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

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchData({
        url: process.env.REACT_APP_API_URL + `/users/${user.id}`,
        method: "GET",
        token: user.token,
      });
      setUserInfo(data);
    };
    getUser();
  }, []);

  return !user.token ? (
    <Navigate to="/" />
  ) : (
    <div className="container py-5 h-100">
      <div className="row g-5">
        <div className="col-12 col-lg-7">
          <div className="d-flex justify-content-between align-items-center mb-3"></div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="fs-4 fw-bold mb-0 text-black">MIS COMPRAS</h1>
            {/* <Link to="/profile" className="btn btn-dark ms-auto">
          Editar usuario
        </Link> */}
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
        <div className="col-12 col-lg-5">
          <div className="p-5 bg-grey d-flex flex-column">
            <h3 className="fw-bold fs-4 mb-4">MIS DATOS</h3>
            <div>
              <span>Nombre: </span> <span>{userInfo.firstname}</span>
            </div>
            <div>
              <span>Apellido: </span> <span>{userInfo.lastname}</span>
            </div>
            <div>
              <span>Email: </span> <span>{userInfo.email}</span>
            </div>
            <div>
              <span>Dirección: </span> <span>{userInfo.address}</span>
            </div>
            <div>
              <span>Teléfono: </span> <span>{userInfo.phone}</span>
            </div>
            <Link
              to="/profile"
              type="button"
              className="btn btn-dark btn-block btn-lg rounded-pill align-self-end px-4 py-2 me-auto mt-4"
              data-mdb-ripple-color="dark"
            >
              Editar Usuario
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
