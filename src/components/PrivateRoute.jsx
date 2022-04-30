import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ element, ...rest }) {
  //props de las rutas privadas
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const path = useLocation();

  if (!user.token) {
    dispatch({ type: "SAVE_PATH", payload: path.pathname });
    return <Navigate to="/login" />;
  } else {
    return element;
  }
}
export default PrivateRoute;
