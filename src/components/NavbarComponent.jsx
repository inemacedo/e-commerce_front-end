import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap";

import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container className="my-4">
          <Navbar.Brand id="navbar-text-logo" href="#">
            HACK HOME
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/about">Sobre nosotros</Nav.Link>
            </Nav>
            <div className="d-flex ">
              <Nav.Link className="navbar-icons">
                <AiOutlineUser size={20} />
              </Nav.Link>
              <Nav.Link className="navbar-icons">
                <IoSearchOutline className="mx-5" size={20} />
              </Nav.Link>
              <Nav.Link className="navbar-icons">
                <BsCart2 size={20} />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
