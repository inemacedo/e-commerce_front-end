import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { appendErrors, useForm } from "react-hook-form";
import userActions from "../redux/userActions";

function Register() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (body) => {
    console.log(JSON.stringify(body) + "body");
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      const fetchResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/users`,
        settings
      );
      const data = await fetchResponse.json();
      dispatch({ type: "SIGN_UP", payload: data });
      navigate("/profile");
      console.log("usuario creado");
      return data;
    } catch (err) {
      return err;
    }
  };
  return user.length !== 0 ? (
    <Navigate to="/profile" />
  ) : (
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
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label fw-bold" htmlFor="firstname">
                Nombre
              </label>
              <input
                {...register("firstname", {
                  required: "Por favor, ingresar nombre.",
                })}
                defaultValue=""
                type="text"
                id="firstname"
                className="form-control"
                style={{
                  border: errors.firstname && "0.1rem solid #dc3545",
                }}
              />
              <p className="text-danger">{errors.firstname?.message}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label fw-bold" htmlFor="lastname">
                Apellido
              </label>
              <input
                {...register("lastname", {
                  required: "Por favor, ingresar apellido.",
                })}
                style={{
                  border: errors.lastname && "0.1rem solid #dc3545",
                }}
                defaultValue=""
                type="text"
                id="lastname"
                className="form-control"
              />
              <p className="text-danger">{errors.lastname?.message}</p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label fw-bold" htmlFor="phone">
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                defaultValue=""
                {...register("phone", {
                  required: "Por favor, ingresar teléfono.",
                })}
                style={{
                  border: errors.phone && "0.1rem solid #dc3545",
                }}
              />
              <p className="text-danger">{errors.phone?.message}</p>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label fw-bold" htmlFor="address">
                Dirección
              </label>
              <input
                {...register("address", {
                  required: "Ingresar dirección",
                })}
                defaultValue=""
                style={{
                  border: errors.address && "0.1rem solid #dc3545",
                }}
                type="text"
                id="address"
                className="form-control"
              />
              <p className="text-danger">{errors.address?.message}</p>
            </div>
          </div>
        </div>

        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label fw-bold" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Por favor, ingresar email.",
            })}
            defaultValue=""
            style={{
              border: errors.email && "0.1rem solid #dc3545",
            }}
            type="email"
            id="email"
            className="form-control"
          />
          <p className="text-danger">{errors.email?.message}</p>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label fw-bold" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", {
              required: "Por favor, ingresar password.",
            })}
            defaultValue=""
            style={{
              border: errors.password && "0.1rem solid #dc3545",
            }}
            type="password"
            id="form3Example4"
            className="form-control"
          />
          <p className="text-danger">{errors.password?.message}</p>
        </div>
        {/* Checkbox */}
        <div className="form-check d-flex justify-content-center mb-4">
          {/*           <input
            onChange={(ev) => ev.target.value}
            className="form-check-input me-2"
            type="checkbox"
            defaultValue
            id="form2Example33"
            defaultChecked
          /> */}
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
