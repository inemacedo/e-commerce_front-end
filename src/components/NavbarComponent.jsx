import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="border">
        <Container className="my-lg-4 ">
          <Navbar.Brand className="g-0 p-0" id="navbar-text-logo" href="/">
            HACK HOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-lg-0 d-flex"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="navbar-links " to="/">
                Home
              </Link>
              <Link className="navbar-links" to="/productos">
                Productos
              </Link>
              <Link className="navbar-links" to="/sobre-nosotros">
                Sobre nosotros
              </Link>
            </Nav>

            <div className="navbar-icons">
              <Link className="navbar-icon" to="/">
                <AiOutlineUser className="me-2" size={20} />
              </Link>
              <Link className="navbar-icon" to="/">
                <IoSearchOutline className="me-2" size={20} />
              </Link>
              <Link className="navbar-icon" to="/carrito-de-compras">
                <BsCart2 className="me-2" size={20} />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
