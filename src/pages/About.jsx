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
import { FaNode, FaGit } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { ReactComponent as Mer } from "../icons/mer-01.png";

function Home() {
  return (
    <div className="home">
      <Header title="Sobre este proyecto..." />
      <div className="container">
        <h2 className="fw-bold">¿Qué es Hack Home?</h2>
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
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <p className="fs-5">
              Este proyecto es la entrega final de un{" "}
              <span className="fw-bold">
                bootcamp de desarrollo web full-stack{" "}
              </span>
              teórico-práctico intensivo con una duración total de{" "}
              <span className="fw-bold">3 meses</span>, donde se realizaron más
              de 600 horas de programación de código.
            </p>
          </div>
        </div>
        <div className="text-center my-5">
          .... <BsCodeSlash className="my-5" size={25} /> ....
        </div>
        <h2 className="fw-bold my-5">¿Quiénes somos?</h2>
        <div className="row my-5">
          <div className="col-md-4 text-center">
            <img
              className="img-circle rounded-circle border author-profile my-5"
              src="https://secure.gravatar.com/avatar/4248974b59a6bd4a9ac6b62a6cff0e89?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg"
              alt="#"
            />
            <h4 className="text-center">Andy Nievas</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-circle rounded-circle border author-profile my-5"
              src="https://secure.gravatar.com/avatar/4248974b59a6bd4a9ac6b62a6cff0e89?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg"
              alt="#"
            />
            <h4 className="text-center">Inés Macedo</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-circle rounded-circle border author-profile my-5"
              src="https://secure.gravatar.com/avatar/4248974b59a6bd4a9ac6b62a6cff0e89?s=96&d=https%3A%2F%2Fstatic.teamtreehouse.com%2Fassets%2Fcontent%2Fdefault_avatar-ea7cf6abde4eec089a4e03cc925d0e893e428b2b6971b12405a9b118c837eaa2.png&r=pg"
              alt="#"
            />
            <h4 className="text-center">Valentina Giusti</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
          </div>
        </div>
        <div className="text-center my-5">
          .... <BsCodeSlash className="my-5" size={25} /> ....
        </div>
        <h2 className="fw-bold">¿Cómo fue el proceso?</h2>
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
          <div className="col-sm-6 text-center mt-5">
            <h4 className="text-center ">Creación de MER</h4>
            <p className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
            <h4 className="text-center ">Creación de MER</h4>
            <p className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
          </div>
        </div>
        <div className="text-center my-5">
          .... <BsCodeSlash className="my-5" size={25} /> ....
        </div>
        <h2>Que tecnologias estan presente en este proyecto?</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-evenly my-4">
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
  );
}

export default Home;
