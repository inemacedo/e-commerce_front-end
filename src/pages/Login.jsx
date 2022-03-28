import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

async function fetchData({url,method,body}){
  const response = await fetch(
    url, {
      method: method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const data = await response.json();
  return data;
}

function Login() {

  const user = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const data = await fetchData({
      url: `${process.env.REACT_APP_API_URL}/tokens`,
      method: "POST",
      body: { email, password }
    });
    console.log(data);
    dispatch({type: "LOGIN", payload: data});
  }

  return user.length !== 0 ? <Navigate to="/profile" /> : (
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
        onSubmit={handleSubmit}
      >
        {/* Email input */}
        <div className="mt-5 form-outline mb-4 w-100">
          <input type="email" id="email" className="form-control" value={email} onChange={(ev)=>setEmail(ev.target.value)} />
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4 w-100">
          <input type="password" id="form3Example4" className="form-control" value={password} onChange={(ev)=>setPassword(ev.target.value)} />
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
