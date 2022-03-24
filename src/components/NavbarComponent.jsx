import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Navbar,
  Nav,
} from "react-bootstrap";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="my-4">
          <Navbar.Brand href="#">Hack Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/productos">Products</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
