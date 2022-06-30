
import { Button, Modal } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

function ModalBootstrap({ show, handleClose }) {

  const resetDB = async () => {
    await fetch("https://api-ecommerce-ha.vercel.app/db/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reset: true }),
    });
    handleClose("reset");

  }

  return (<Modal size="lg" show={show} onHide={handleClose} centered >
    <Modal.Header closeButton>
      <Modal.Title>Bienvenido a Hack Home!</Modal.Title>
    </Modal.Header>
    <Modal.Body className="bg-dark text-light">
      <p>Estamos muy contentos de que estés aquí</p>
      <p ><b>Hack Home</b> es un proyecto construido como entrega final de un Bootcamp de Desarrollo Web Fullstack, un curso de fuerte carga teórico-práctico, muy intensivo, durante 3 meses con un promedio de 9 horas diarias y un total de +600 horas de dedicación.</p>
      <p >Te invitamos a que visites la sección <b>Sobre este proyecto</b> para más información.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-dark" onClick={resetDB}>
        Reset DataBase
      </Button>
      <Button variant="dark" onClick={() => handleClose("Sobre este proyecto")}>
        Sobre este proyecto
      </Button>
    </Modal.Footer>
  </Modal>);
}

export default ModalBootstrap;
