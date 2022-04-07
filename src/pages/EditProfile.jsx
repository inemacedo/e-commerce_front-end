import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { BiUserPin } from "react-icons/bi";

function EditProfile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch({ type: "REMOVE_CART" });
    dispatch({ type: "LOGOUT" });
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

      <form className="mt-4">
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
            />
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
            />
          </div>
          <div className=" col-12 col-md-7">
            <label className="form-label mb-0 mt-2" htmlFor="email">
              Email
            </label>
            <input
              defaultValue={user.email}
              type="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="col-12 col-md-5">
            <label className="form-label mb-0 mt-2" htmlFor="phone">
              Teléfono
            </label>
            <input
              defaultValue={user.phone}
              type="text"
              id="phone"
              className="form-control"
            />
          </div>
          <div className="d-none col-12 col-md-6">
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
          </div>
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
          >
            {user.address}
          </textarea>
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
