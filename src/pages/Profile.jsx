import React from "react";
import { Link, Navigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

function Profile() {

  const user = useSelector(state=>state.user);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch({ type: "LOGOUT" });
  }

  return user.length === 0 ? <Navigate to="/" /> : (
    <div style={{ width: "30rem" }} className="container mt-5">
      <div className="d-flex">
        <h1 className="mt-4 fs-4 fw-bold">{user.email}</h1>
      </div>
      <form className="mt-4">
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="firstname" className="form-control" />
              <label className="form-label" htmlFor="firstname">
                Nombre
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="lastname" className="form-control" />
              <label className="form-label" htmlFor="lastname">
                Apellido
              </label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="phone" className="form-control" />
              <label className="form-label" htmlFor="phone">
                Teléfono
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="adress" className="form-control" />
              <label className="form-label" htmlFor="adress">
                Dirección
              </label>
            </div>
          </div>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control" />
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <input type="password" id="form3Example4" className="form-control" />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-dark mb-4 w-100 text-center">
          Guardar datos
        </button>
      </form>

      {/* Logout button */}
      <div className="text-center my-5">
        <button className="btn btn-danger" onClick={handleClick} >Log out</button>
      </div>
    </div>
  );
}

export default Profile;
