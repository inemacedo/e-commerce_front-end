import React from "react";
import { Link } from "react-router-dom";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";

function Login() {
  return (
    <div style={{ width: "30rem" }} className="container mt-5">
      <h1 className="mt-4 fs-4 fw-bold">Bienvenido!</h1>
      <form
        className="d-flex flex-column align-items-center"
        action="#"
        onSubmit={(ev) => ev.preventDefault()}
      >
        {/* Email input */}
        <div className="mt-5 form-outline mb-4 w-100">
          <input type="email" id="email" className="form-control" />
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4 w-100">
          <input type="password" id="form3Example4" className="form-control" />
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
          <Link className="text-muted" to="/login">
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
