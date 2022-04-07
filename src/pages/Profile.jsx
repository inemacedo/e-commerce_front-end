import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { BiUserPin } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch({ type: "REMOVE_CART" });
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div style={{ maxWidth: "30rem" }} className="container mt-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between my-4">
        <h1 className="fs-4 fw-bold m-0">Hola {user.firstname}!</h1>
      </div>
      <h2 className="fs-5 text-secondary m-0">Mis detalles</h2>
      <div className="mt-5 row border p-4 bg-light">
        <div className="col-4">
          <div className="circle-profile text-center">
            <p className="circle-profile-letters mt-3 text-white fs-1 text-center">
              {user.firstname.charAt(0)}
              {user.lastname.charAt(0)}
            </p>
          </div>
        </div>
        <div className="col-8">
          <div className="d-flex flex-column ms-5 mt-3">
            <p className="fw-bold d-block">
              {user.firstname}
              &nbsp;
              {user.lastname}
            </p>
            <p className="">{user.email}</p>
          </div>
        </div>
      </div>
      <div className="row mt-5 p-4">
        <div className="col-4 text-center">
          <BsCartCheck className="mt-4" size={40} />
        </div>
        <div className="col-8  text-center">
          <div className="d-flex flex-column ms-5">
            <Link to="/mis-pedidos" className="btn btn-outline-dark mt-4">
              Mis pedidos
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt-5 p-4">
        <div className="col-4 text-center">
          <BiUserPin className="mt-4" size={40} />
        </div>
        <div className="col-8  text-center">
          <div className="d-flex flex-column ms-5">
            <p>Teléfono: {user.phone}</p>
            <p>Dirección: {user.address}</p>
            <p>Uruguay</p>
            <Link to="/editar-perfil" className="btn btn-outline-dark mt-4">
              Editar Perfil
            </Link>
          </div>
        </div>
      </div>

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

export default Profile;
