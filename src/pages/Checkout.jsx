import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "../styles/Checkout.css";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const hasProducts = cart.length > 0;
  const totalCartItems = cart.reduce(
    (acc, elem) => (acc += Number(elem.quantity)),
    0
  );
  const path = useSelector((state) => state.path);
  const dispatch = useDispatch();

  const [thanks, setThanks] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (order) => {
    setShowSpinner(true);
    
    try {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
        body: JSON.stringify(order)
      };
      setTimeout(async () => {
        const fetchResponse = await fetch(
          process.env.REACT_APP_API_URL + "/orders",
          settings
        );
        if (fetchResponse.status === 200) {
          const data = await fetchResponse.json();
          console.log(data);
        } else console.log("ELSE");

        setShowSpinner(false);
        setThanks(true)
      }, 2000);

    } catch (err) {
      console.log(err);
    }
  }

  const total = cart.reduce(
    (acc, product) => (acc += Number(product.price * product.quantity)),
    0
  );

  return (
    <section className="container py-5 h-100">
      <div className="row g-5">
        <div className="col-12 col-lg-7">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="fs-4 fw-bold mb-0 text-black">
              DETALLES FACTURACIÓN
            </h1>
          </div>
          <hr className="my-4" />

          <div className="mb-5">
            <p>Nombre y Apellido:</p>
            <p>Dirección:</p>
            <p>Email:</p>
            <p>Teléfono:</p>
          </div>

          <h4 className="fs-5 fw-bold mt-4 mb-4">
            Ingresá los datos de la tarjeta
          </h4>

          <form>
            <div className="mb-4">
              <label className="form-label">Número de tarjeta *</label>
              <input type="number" className="form-control" />
            </div>
            <div className="mb-4">
              <label className="form-label">
                Nombre y apellido titular de la tarjeta *
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Fecha de nacimiento *</label>
                <input type="date" className="form-control me-5" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Código de Seguridad *</label>
                <input type="email" className="form-control me-5" />
              </div>
              <img
                src="https://azioqgupehjwofkjwddr.supabase.co/storage/v1/object/public/e-commerce/paymentmethods/payment.jpg"
                alt=""
                className="payment mt-5 mb-md-5 mb-3"
              />
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-5">
          <div className="p-5 bg-grey d-flex flex-column">
            <h3 className="fw-bold fs-4 text-uppercase">Tu Pedido</h3>
            {cart.map((product) => (
              <div className="row mt-4 ">
                <div className="col-6">{product.title} </div>
                <div className="col-6 d-flex justify-content-end">
                  <p>
                    <span className="fw-bold">
                      USD {product.price * product.quantity}
                    </span>
                  </p>
                </div>
              </div>
            ))}

  if (!path.prevPath) {
    dispatch({ type: "SAVE_PATH", payload: "/checkout" });
  }

  return !user.token ? (thanks ? <Navigate to="/gracias" /> : <Navigate to="/login" />) : (
    <div className="container py-5 h-100">

      {showSpinner && <div className=" bg-semi-transparent d-flex align-items-center justify-content-center position-fixed top-0 bottom-0 start-0 end-0" >
        <Spinner animation="border mx-auto" role="status" variant={"white"}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>}
      
            <hr />
            <div className="d-flex justify-content-between fw-bold pt-3">
              <p>Importe total</p>
              <p>USD {total > 1000 ? total / 1000 : total}</p>
            </div>
            <hr />
            <p className="m-1 fw-bold ms-0 mt-3">Aclaraciones</p>
            <div className="refund-details mb-1">
              <span className="fw-bold">Cambios: </span>
              <span>
                todos los productos cuentan con 30 días para realizar cambios
                (es necesaria la factura y el producto en perfecto estado).
              </span>
            </div>
            <div className="refund-details">
              <span className="fw-bold">Devoluciones: </span>
              <span>
                Todos los productos cuentan con 5 días para devolución y
                reembolso del dinero. Envíos desde el interior corren por cuenta
                del cliente.
              </span>
            </div>
            <Link
              to="/gracias"
              type="button"
              className={`${
                cart.length > 0 ? "" : "disabled"
              } btn btn-dark btn-block btn-lg rounded-pill align-self-end px-4 py-2 me-auto mt-4`}
              data-mdb-ripple-color="dark"
            >
              REALIZAR PEDIDO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
