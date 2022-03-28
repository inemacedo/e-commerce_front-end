import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/userActions";

function Register() {
  const accessToken = useSelector((state) => state.user.accessToken);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    userName: "",
    birthDate: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
  }, [accessToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        adress: user.adress,
        phone: user.phone,
        password: user.password,
      }),
    };
    try {
      const fetchResponse = await fetch(`http://localhost:8000/user`, settings);
      const data = await fetchResponse.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  return (
    <div style={{ width: "30rem" }} className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="mt-4 fs-4 fw-bold">REGÍSTRATE AQUÍ</h1>
        <Link to="/">
          <IoMdCloseCircleOutline
            style={{ color: "#353333" }}
            className="mt-4"
            size={20}
          />
        </Link>
      </div>
      <form className="mt-4" onSubmit={handleSubmit}>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                value={user.firstname}
                onChange={(ev) => {
                  setUser({ ...user, firstname: ev.target.value });
                }}
                type="text"
                id="firstname"
                className="form-control"
              />
              <label className="form-label" htmlFor="firstname">
                Nombre
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                value={user.lastname}
                onChange={(ev) => {
                  setUser({ ...user, lastname: ev.target.value });
                }}
                type="text"
                id="lastname"
                className="form-control"
              />
              <label className="form-label" htmlFor="lastname">
                Apellido
              </label>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                value={user.phone}
                onChange={(ev) => {
                  setUser({ ...user, phone: ev.target.value });
                }}
                type="text"
                id="phone"
                className="form-control"
              />
              <label className="form-label" htmlFor="phone">
                Teléfono
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                value={user.adress}
                onChange={(ev) => {
                  setUser({ ...user, adress: ev.target.value });
                }}
                type="text"
                id="adress"
                className="form-control"
              />
              <label className="form-label" htmlFor="adress">
                Dirección
              </label>
            </div>
          </div>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            value={user.email}
            onChange={(ev) => {
              setUser({ ...user, email: ev.target.value });
            }}
            type="email"
            id="email"
            className="form-control"
          />
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            value={user.password}
            onChange={(ev) => {
              setUser({ ...user, password: ev.target.value });
            }}
            type="password"
            id="form3Example4"
            className="form-control"
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>
        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            defaultValue
            id="form2Example33"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="form2Example33">
            Subscribete a nuestro newsletter
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-dark mb-4 w-100 text-center">
          Crear cuenta
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <Link className="text-muted" to="/login">
            Ya estás registrado? Logueate aquí
          </Link>

          <p>o regístrate con:</p>
          <button
            type="button"
            className="btn btn-secondary btn-floating rounded-circle mx-1"
          >
            <BsFacebook size={20} />
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-floating rounded-circle mx-1"
          >
            <BsGoogle size={20} />
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-floating rounded-circle mx-1"
          >
            <BsTwitter size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
