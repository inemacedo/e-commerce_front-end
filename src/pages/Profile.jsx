import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import EditUserForm from "../components/EditUserForm";

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await fetch();
        if (response.status === 200) {
          const data = response.json();
        }

      } catch (error) {
        console.log(error);
      }
    }
    getOrders();

  }, []);

  return !user.token ? (
    <Navigate to="/" />
  ) : showEditForm ? (<EditUserForm />) :
    <div className="container mt-5">

      <h2 className="text-uppercase mb-4" >My Orders</h2>

      <div className="row g-2 pb-2 rounded bg-secondary">
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-header">
              Artículos
            </div>
            <div className="card-body">
              Mesa 1
              Mesa 2
              Silla
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-header">Info de la compra</div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card">
            <div className="card-header">
              Acciones de la compra
            </div>
          </div>
        </div>
      </div>
      <hr />

    </div>;

}

export default Profile;
