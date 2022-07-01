
import "../styles/navbar.css";
import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Overlay,
  Popover,
} from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LogoHackHome } from "../icons/logohackhome.svg";

// si cambia el params cerrar la nav

function NavbarComponent() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const welcomeModal = useSelector((state) => state.welcome);
  const params = useParams();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [showPopover, setShowPopover] = useState(false);
  const [target, setTarget] = useState(null);
  const [showNav, setShowNav] = useState(welcomeModal.show);
  const [showNavDropdown, setShowNavDropdown] = useState(false);

  const handleLogout = async () => {
    dispatch({ type: "REMOVE_CART" });
    dispatch({ type: "LOGOUT" });
  };

  const ref = useRef(null);

  const handleClickPopover = (event) => {
    setShowPopover(!showPopover);
    setTarget(event.target);
  };


  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/categories`
        );
        if (response.status === 200) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        if (error.message === "Failed to fetch") {
          setCategories("Failed to fetch");
        }
      }
    };
    getCategories();
  }, []);

  let canToggle = true;

  useEffect(() => {
    setShowNavDropdown(false);
    if (!welcomeModal.show) { setShowNav(false); }
    setShowPopover(false);
  }, [params]);
  useEffect(() => {
    setShowPopover(false);
  }, [showNav]);

  return (<Navbar
    expand="lg"
    className={`zindex-4 ${!welcomeModal.show && "border-bottom"}`}
    expanded={showNav}
    onToggle={() => setShowNav((prev) => !prev)}
  >
    <Container>
      <Link to="/" className="text-decoration-none">
        <Navbar.Brand className="g-0" id="navbar-text-logo">
          <LogoHackHome
            className="mb-1 me-2"
            style={{ height: "2.2rem" }}
          />
          HACK HOME
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto">
          <NavDropdown
            className={`navbar-links m-0 ms-xl-4 mb-lg-0 ms-xxl-5 pointer d-flex flex-column align-items-center ${showNavDropdown ? "mb-4" : ""
              }`}
            title="Productos"
            id="navbarScrollingDropdown"
            show={showNavDropdown}
            onToggle={() => {
              if (canToggle) setShowNavDropdown((prev) => !prev);
              canToggle = false;
              setTimeout(() => {
                canToggle = true;
              }, 100);
            }}
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categoria/${category.name}`}
                className="text-decoration-none text-dark dropdown-item text-capitalize mb-2"
              >
                {category.name}
              </Link>
            ))}
            <NavDropdown.Divider />
            <Link
              to={`/productos`}
              className="text-decoration-none text-dark dropdown-item text-capitalize"
            >
              Ver todos los productos
            </Link>
          </NavDropdown>

          <Link
            className="navbar-links m-0 ms-xl-4 ms-xxl-5 p-4 zindex-4"
            id="sobre-nosotros"
            to="/sobre-este-proyecto"
          >
            Sobre este proyecto
          </Link>
          <a
            className="navbar-links m-0 ms-xl-4 ms-xxl-5 p-4 "
            href="https://e-commerce-front-end-admin.vercel.app"
            target="_blank"
          >
            Admin
          </a>
        </Nav>

        <Nav className="ms-auto ">
          <div className="position-relative text-center"
            onClick={handleClickPopover}
            ref={ref}>
            <button
              type="button"
              className="navbar-links navbar-icon m-0 p-4 bg-white border-0 text-center w-100"
            >
              <AiOutlineUser size={20} style={{ pointerEvents: "none" }} />
              {user.user && <span className="d-none d-lg-bloc position-absolut" style={{ left: "0", right: "0", bottom: "0px", pointerEvents: "none" }} >{user.user.firstname}</span>}
            </button>
            {user.token ? (
              <Overlay
                show={showPopover}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Header as="h3" style={{ minWidth: "120px" }}>
                    Hola {user.user.firstname}!
                  </Popover.Header>
                  <Popover.Body className="d-flex flex-column align-items-"  >
                    <Link
                      className="text-dark text-decoration-none"
                      to="/mi-perfil"
                    >
                      Mi perfil
                    </Link>
                    <Link
                      to="/mis-compras"
                      className="text-decoration-none text-dark mt-2"
                    >
                      Mis compras
                    </Link>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={handleLogout}
                      className="text-decoration-none mt-2 text-danger"
                    >
                      Cerrar sesión
                    </div>
                  </Popover.Body>
                </Popover>
              </Overlay>
            ) : (
              <Overlay
                show={showPopover}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Header as="h3" style={{ minWidth: "150px" }}>Iniciar sesión</Popover.Header>
                  <Popover.Body className="d-flex flex-column">
                    <Link className="btn btn-outline-dark " to="/login">
                      Login
                    </Link>
                    <span className="mt-3">No estás registrado? </span>
                    <Link to="/registro" className="text-dark">
                      Create una cuenta!
                    </Link>
                  </Popover.Body>
                </Popover>
              </Overlay>
            )}
          </div>

          <Link
            className="navbar-links navbar-icon m-0 p-4"
            to="/productos"
          >
            <IoSearchOutline size={20} />
          </Link>
          <Link
            className="navbar-links navbar-icon m-0 p-4"
            to="/carrito-de-compras"
          >
            <BsCart2 size={20} />
            <span className="badge bg-dark ms-1">{totalItems}</span>
          </Link>
          {welcomeModal.show && <div className="position-absolute dark-opacity-bg" ></div>}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}
//<div></div>

export default NavbarComponent;
