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

function Home() {
  return (
    <div className="home">
      <Header title="ABOUT THIS" />
      <div className="container">
        <h2>Que es Hack Home?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          aspernatur eum inventore, vitae expedita voluptas dolor sed tempora
          eos esse obcaecati. Dolore alias ut, deleniti hic dolorum adipisci
          tempore quibusdam. Reiciendis pariatur quasi quam consequatur
          voluptatum accusantium dolorum iusto doloremque maiores laudantium.
          Illo voluptatum consequatur incidunt perspiciatis, sapiente ea quo
          eligendi dolorem rem, optio dignissimos mollitia velit reprehenderit?
          Culpa, nihil? Dolore, animi velit eos, officiis dolorum error quo eum
          ratione quis pariatur explicabo dignissimos ab totam temporibus ut?
          Illo laudantium dignissimos dolor repudiandae alias. Aliquam, facilis
          quod! Laboriosam, mollitia nulla!
        </p>
        <hr />
        <h2>Quienes somos?</h2>
        <div className="row my-5">
          <div className="col-sm-4">
            <h4 className="text-center">Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
          </div>
          <div className="col-sm-4">
            <h4 className="text-center">Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
          </div>
          <div className="col-sm-4">
            <h4 className="text-center">Lorem ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              natus deleniti dolore dolores dolorem minima?
            </p>
          </div>
        </div>
        <hr />
        <h2>Que tecnologias estan presente en este proyecto?</h2>
        <div className="mt-5 d-flex justify-content-between align-items-center mb-5">
          <SiReact size={60} /> <SiRedux size={60} />
          <SiMysql size={60} />
          <SiBootstrap size={60} />
          <JWT style={{ height: "2rem" }} />
          <FaNode size={60} />
          <SiJavascript size={60} />
          <FaGit size={60} />
          <SiSequelize size={60} />
        </div>
      </div>
    </div>
  );
}

export default Home;
