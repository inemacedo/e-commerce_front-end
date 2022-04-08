import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { BiUserPin } from "react-icons/bi";
import { useForm } from "react-hook-form";

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

function EditProfile() {
  const { user } = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: true,
    delayError: undefined,
  });

  const handleClick = async () => {
    dispatch({ type: "REMOVE_CART" });
    dispatch({ type: "LOGOUT" });
  };
  const onSubmit = async (data) => {
    console.log(user);
    await fetchData({
      url: process.env.REACT_APP_API_URL + `/users/${user.id}`,
      method: "PATCH",
      token: user.token,
      body: data,
    });
    dispatch({ type: "LOGIN" });
  };
  return (
    <div style={{ maxWidth: "30rem" }} className="container mt-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between my-4">
        <h1 className="fs-4 fw-bold m-0">Editar Perfil</h1>

        <Link to="/mi-perfil" className="btn btn-outline-dark">
          Volver
        </Link>
      </div>
      <h2 className="fs-5 text-secondary m-0">Mis datos personales</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {/* 2 column grid layout with text inputs for the first and last names */}
        <div className="row">
          <div className="col-12 col-sm-6">
            <label className="form-label mb-0 mt-2" htmlFor="firstname">
              Nombre
            </label>
            <input
              defaultValue={user.firstname}
              type="text"
              id="firstname"
              className="form-control"
              {...register("firstname", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.firstname && (
              <p className="text-danger">{errors.firstname.message}</p>
            )}
          </div>
          <div className="col-12 col-sm-6">
            <label className="form-label mb-0 mt-2" htmlFor="lastname">
              Apellido
            </label>
            <input
              defaultValue={user.lastname}
              type="text"
              id="lastname"
              className="form-control"
              {...register("lastname", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.lastname && (
              <p className="text-danger">{errors.lastname.message}</p>
            )}
          </div>
          <div className=" col-12 col-md-7">
            <label className="form-label mb-0 mt-2" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", {
                required: "Este campo es obligatorio",
              })}
              defaultValue={user.email}
              type="email"
              id="email"
              className="form-control"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="col-12 col-md-5">
            <label className="form-label mb-0 mt-2" htmlFor="phone">
              Teléfono
            </label>
            <input
              {...register("phone", {
                required: "Este campo es obligatorio",
              })}
              defaultValue={user.phone}
              type="text"
              id="phone"
              className="form-control"
            />
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
          </div>
          {/*           <div className="d-none col-12 col-md-6">
            <label className="form-label mb-0 mt-2" htmlFor="password">
              Contraseña actual
            </label>
            <input type="password" id="password" className="form-control" />
          </div>
          <div className="d-none col-12 col-md-6">
            <label className="form-label mb-0 mt-2" htmlFor="confirmPassword">
              Contraseña nueva
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
            />
          </div> */}
        </div>

        {/* Direccion input */}
        <div>
          <label className="form-label mb-0 mt-2" htmlFor="address">
            Dirección
          </label>
          <textarea
            className="form-control"
            name="addres"
            id="address"
            rows="2"
            {...register("address", {
              required: "Este campo es obligatorio",
            })}
          >
            {user.address}
          </textarea>
          {errors.address && (
            <p className="text-danger">{errors.address.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-dark my-4 w-100 text-center">
          Guardar datos
        </button>
      </form>

      {/* Logout button */}
      <div className="text-center my-5">
        <button
          className="btn btn-outline-danger fw-bolder"
          onClick={handleClick}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
