import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

async function fetchData({ url, method, body }) {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetchData({
      url: `${process.env.REACT_APP_API_URL}/tokens`,
      method: "POST",
      body: data,
    });
    if (response.status !== 200) {
      setShowError(true);
    } else dispatch({ type: "LOGIN", payload: response.data });
  };

  return (
    <div style={{ width: "30rem" }} className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="mt-4 fs-4 fw-bold">Bienvenido!</h1>
        <Link to="/">
          <IoMdCloseCircleOutline
            style={{ color: "#353333" }}
            className="mt-4"
            size={20}
          />
        </Link>
      </div>

      <form
        className="d-flex flex-column align-items-center"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email input */}
        <div className="mt-5 form-outline mb-4 w-100">
          <input
            type="email"
            id="email"
            className={`form-control ${showError ? "border-danger" : ""}`}
            aria-describedby="emailHelp"
            placeholder="Insertar mail aquí..."
            defaultValue=""
            {...register("email", { required: "Por favor, ingresar mail" })}
          />
          <p className="text-danger">{errors.email?.message}</p>
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4 w-100">
          <input
            type="password"
            className={`form-control form-control-user ${
              showError ? "border-danger" : ""
            }`}
            id="inputPassword"
            placeholder="Password"
            defaultValue=""
            {...register("password", {
              required: "Por favor, ingresar contraseña",
            })}
          />
          <p className="text-danger">{errors.email?.message}</p>
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-dark mb-4 w-100 text-center">
          Iniciar sesión
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <Link className="text-muted" to="/register">
            No estás registrado? Click aquí para crear cuenta
          </Link>

          <p>o inicia sesión con:</p>
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

export default Login;
