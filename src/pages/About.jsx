import React from "react";
import Header from "../components/Header";
import { ReactComponent as JWT } from "../icons/jwt.svg";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiMysql,
  SiBootstrap,
  SiSequelize,
} from "react-icons/si";
import { NavLink } from "react-router-dom";
import { FaNode, FaGit } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { ReactComponent as LogoHackHome } from "../icons/logohackhome.svg";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import valeProfileImage from "../img/IMG_9500.png";
import ineProfileImage from "../img/IMG_9522.jpg";
import andyProfileImage from "../img/IMG_6236.png";

function Home() {
  return (
    <div className="home">
      {/*       <div className="text-center mt-5">
        <button className="btn btn-outline-dark mt-2">
          Iniciar sesión como administrador
        </button>
      </div> */}
      <h2 className="fw-bold my-5 text-center">¿Quiénes somos?</h2>
      <div className="container ">
        <div className="row my-5 ">
          <div className="col-md-4 text-center p-4  quienes-somos">
            <img
              style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
              className="rounded-circle border author-profile my-5"
              src={andyProfileImage}
              alt="#"
            />
            <h4 className="text-center">Andy Nievas</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
            <div className="d-flex justify-content-evenly">
              <a href="https://www.linkedin.com/in/andy-nievas/">
                <AiOutlineLinkedin color="#333333" size={35} />
              </a>
              <a href="https://github.com/andynievas">
                <AiFillGithub color="#333333" size={35} />
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center p-4 quienes-somos">
            <img
              style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
              className="rounded-circle border author-profile my-5"
              src={ineProfileImage}
              alt="#"
            />
            <h4 className="text-center">Inés Macedo</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
            <div className="d-flex justify-content-evenly">
              <a href="https://www.linkedin.com/in/inesmacedo/">
                <AiOutlineLinkedin color="#333333" size={35} />
              </a>
              <a href="https://github.com/inemacedo/">
                <AiFillGithub color="#333333" size={35} />
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center p-4 quienes-somos">
            <img
              style={{ width: "15rem", height: "15rem", objectFit: "cover" }}
              className="rounded-circle border author-profile my-5"
              src={valeProfileImage}
              alt="#"
            />
            <h4 className="text-center">Valentina Giusti</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore esse vitae quod, quos accusamus voluptate aliquid
              suscipit totam, similique officiis consectetur assumenda
              exercitationem quae at nulla delectus soluta, harum odio?
            </p>

            <div className="d-flex justify-content-evenly">
              <a href="https://www.linkedin.com/in/valentinamgo/">
                <AiOutlineLinkedin color="#333333" size={35} />
              </a>
              <a href="https://github.com/valentinagiusti">
                <AiFillGithub color="#333333" size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        .... <BsCodeSlash className="my-5" size={25} /> ....
      </div>
      {/*       <Header title="Sobre este proyecto..." /> */}

      <div className="p-4" style={{ background: "#F1F1F1" }}>
        <div className="container">
          <h2 className="fw-bold mt-5">¿Qué es Hack Home?</h2>
          <div className="row my-5">
            <div className="col-sm-4">
              <p className="fs-5">
                <span className="fw-bold">Hack Home</span> es una aplicación web
                creada por estudiantes de Hack Academy con el fin de poner en
                práctica los conocimientos adquiridos para poder maquetar un
                e-commerce en un{" "}
                <span className="fw-bold">plazo de 3 semanas</span> de curso.
              </p>
            </div>
            <div className="col-sm-4  text-center d-flex flex-column">
              <LogoHackHome style={{ height: "10rem" }} />
            </div>
            <div className="col-sm-4">
              <p className="fs-5">
                Este proyecto es la entrega final de un{" "}
                <span className="fw-bold">
                  bootcamp de desarrollo web full-stack{" "}
                </span>
                , un curso de fuerte carga teórico-práctica intensivo con una
                duración de <span className="fw-bold">3 meses</span>, el cual
                tuvo apróximadamente <span className="fw-bold">600 horas</span>{" "}
                de dedicación
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        .... <BsCodeSlash className="my-5" size={25} /> ....
      </div>

      <div className="container">
        <h2 className="fw-bold mb-5">¿Cómo fue el proceso?</h2>
        <div className="row">
          <div
            className="col-md-6 text-center "
            style={{
              objectFit: "contain",
              /* height: "40rem", */
            }}
          >
            <img
              className="img-fluid"
              style={{
                objectFit: "contain",
                height: "40rem",
              }}
              src="https://vvorvvqldkwsnrtpckzn.supabase.co/storage/v1/object/public/hackhomee/sobre-nosotros/mer-01.png"
              alt=""
            />
          </div>
          <div className="col-sm-6 ">
            <h4 className="fs-4">1 - Creación de MER</h4>
            <p className="p-1">
              Comenzamos pensando los modelos que deberíamos crear oara poder
              relacionar y llevar a cabo del proyecto, proponiendo:{" "}
              <span className="fw-bolder">
                User, Admin, Category, Order y Product
              </span>
            </p>
            <h4 className="fs-4 mt-5">2 - Temática e inspiración</h4>
            <p className="p-1">
              Nos inspiramos en{" "}
              <a
                className="fw-bold  text-dark"
                href="https://www.kavehome.com.uy/"
              >
                KaveHome
              </a>{" "}
              para obtener las imágenes y los productos. Para el diseño de la
              página{" "}
              <a className="fw-bold text-dark" href="https://cultocafe.uy/">
                CultoCafé
              </a>{" "}
              nos inpiró para recrear una maquetación similar.
            </p>
            <h4 className="fs-4 mt-5">3 - Metodología de trabajo</h4>
            <p className="p-1">
              Utilizamos <span className="fw-bold">Trello</span> para la
              organización y distribución de tareas. La organización y creación
              del sitio fue hecha de forma{" "}
              <span className="fw-bold">100% remota</span>, utilizando Discord
              para comunicarnos entre nosotros en conjunto con la metodología{" "}
              <span className="fw-bold">Scrum</span>.
            </p>
            <h4 className="fs-4 mt-5">
              4 - Elección de tecnologías a utilizar{" "}
            </h4>
            <p className="p-1">
              Analizamos el proyecto y concluímos que lo mejor era tener una{" "}
              <span className="fw-bold">base de datos relacional:</span> MySQL
              utilizamos <fw-bold>MySQL</fw-bold>. Para el almacenamiento de
              imágenes utilizamos un servidor externo (
              <span className="fw-bold">Supabase</span>)
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center ">
            <img
              className="img-fluid"
              style={{
                objectFit: "contain",
                height: "40rem",
              }}
              src="https://vvorvvqldkwsnrtpckzn.supabase.co/storage/v1/object/public/hackhomee/sobre-nosotros/rutas-02.png"
              alt=""
            />
          </div>
          <div
            className="col-sm-6  "
            style={{
              objectFit: "contain",
              /* height: "40rem", */
            }}
          >
            <img
              className="img-fluid"
              style={{
                objectFit: "contain",
                height: "40rem",
              }}
              src="https://vvorvvqldkwsnrtpckzn.supabase.co/storage/v1/object/public/hackhomee/sobre-nosotros/components-01.png"
              alt=""
            />
          </div>
        </div>
        <div className="text-center my-5">
          .... <BsCodeSlash className="my-5" size={25} /> ....
        </div>
      </div>

      <div className="container">
        <h2 className="fw-bold mb-5">
          ¿Qué tecnologias fueron usadas en este proyecto?
        </h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="fs-5">
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript (ES6+)</li>
              <li>JWT</li>
              <li> Node.js</li>
              <li>Git</li>
              <li>MySQL & Sequelize</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="d-flex col-md-6 flex-wrap align-items-center justify-content-evenly my-4">
            <SiReact className="m-3" size={60} style={{ width: "60px" }} />
            <SiMysql className="m-3" size={60} style={{ width: "60px" }} />
            <SiRedux className="m-3" size={60} style={{ width: "60px" }} />
            <SiBootstrap className="m-3" size={60} style={{ width: "60px" }} />
            <JWT className="m-3" style={{ height: "2rem" }} />
            <FaNode className="m-3" size={60} />
            <SiJavascript className="m-3" size={60} />
            <FaGit className="m-3" size={60} />
            <SiSequelize className="m-3" size={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
