import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as LogoHackHome } from "../icons/logohackhome.svg";

function NavbarComponent() {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, elem) => (acc += Number(elem.quantity)), 0);
  return (
    <div>
      <Navbar bg="white" expand="lg" className="border">
        <Container>
          <Link to="/" className="text-decoration-none" >
            <Navbar.Brand className="g-0" id="navbar-text-logo">
              <LogoHackHome className="mb-3 me-2" style={{ height: "2.2rem" }} />
              HACK HOME
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Link className="navbar-links my-0 p-4 " to="/">
                Home
              </Link>
              <Link className="navbar-links my-0 p-4" to="/productos">
                Productos
              </Link>
              <Link className="navbar-links my-0 p-4" to="/sobre-nosotros">
                Sobre nosotros
              </Link>
            </Nav>

            <Nav className="ms-auto">
              <Link className="navbar-links navbar-icon m-0 p-4" to="/registro">
                <AiOutlineUser size={20} />
              </Link>
              <Link className="navbar-links navbar-icon m-0 p-4" to="/search">
                <IoSearchOutline size={20} />
              </Link>
              <Link
                className="navbar-links navbar-icon m-0 p-4"
                to="/carrito-de-compras"
              >
                <BsCart2 size={20} />
                <span className="badge bg-dark ms-1">{total}</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
