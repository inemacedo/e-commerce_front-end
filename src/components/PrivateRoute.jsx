import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute({ element, ...rest }) {
  //props de las rutas privadas
  const user = useSelector((state) => state.user);

  if (!user.token) {
    return <Navigate to="/login" />;
  } else {
    return element;
  }
}
export default PrivateRoute;
