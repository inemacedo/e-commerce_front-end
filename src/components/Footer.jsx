import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="text-center text-lg-start mt-auto">
      <hr />
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3  mb-4">
              <h6 className="text-uppercase fw-bold">HACK HOME</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                Hack Home tiene como objetivo revelar historias, provocar
                emociones y aportar luz y color a tu casa a través de mobiliario
                y decoración.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Sobre nosotros</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <Link className="footer-link" to="#!">
                  Sobre nosotros
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="#!">
                  Blog
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="#!">
                  Hack Cares
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="#!">
                  Hack Pro
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="#!">
                  Tienda
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Suíguenos!</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <Link className="footer-link" to="#!">
                  <FaInstagram className="me-2" />
                  Instagram
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="#!">
                  <AiOutlineFacebook className="me-2" />
                  Facebook
                </Link>
              </p>
              <p>
                <Link className="footer-link" to="#!">
                  <AiOutlineLinkedin className="me-2" />
                  Linkedin
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Comprar</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>Como comprar</p>
              <p>Términos y condiciones</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center text-secondary p-3"
        style={{ backgroundColor: "#eadfd7" }}
      >
        © 2022 Copyright:
      </div>
    </footer>
  );
}

export default Footer;
