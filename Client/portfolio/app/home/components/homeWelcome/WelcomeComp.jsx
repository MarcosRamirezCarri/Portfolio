"use client";

import meImage from "../../../../DatosPortfolio/images/yo/bowler.png";
import techImg from "../../../../DatosPortfolio/images/logosTech/tech.png";
import proyectImg from "../../../../DatosPortfolio/images/logosTech/projectt.png";
import { techs } from "../../../../DatosPortfolio/tecnologiasMock";
import { datosProyectos } from "../../../../DatosPortfolio/datosmock";
import CardAll from "./Cards/CardAll";
import { useState } from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

export default function WelcomeHome({ setState }) {
  const [currentPage, setCurrentPage] = useState(1);
  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(3);
    }
    if (currentPage === 3) {
      setCurrentPage(2);
    }
    if (currentPage === 2) {
      setCurrentPage(1);
    }
  };
  const nextPage = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
    }
    if (currentPage === 2) {
      setCurrentPage(3);
    }
    if (currentPage === 3) {
      setCurrentPage(1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <button
        className="relative max-h-[10vh] top-80 right-0 lg:hidden"
        onClick={() => prevPage()}
      >
        <BiChevronsLeft className="h-8 w-8 hover:scale-125 duration-300 drop-shadow-lg text-blue-700" />
      </button>
      <CardAll
        currentPage={currentPage}
        imageBg={proyectImg}
        intendPage={1}
        delay={10000}
        title={"Mis Proyectos"}
        text={"Proyectos o experiencias en las que he trabajado"}
        object={datosProyectos}
      />
      <CardAll
        currentPage={currentPage}
        imageBg={techImg}
        intendPage={2}
        delay={5000}
        title={" Mi Stack"}
        text={"Tecnologías Web las cuales he estudiado durante mi vida"}
        object={techs}
      />
      <CardAll
        currentPage={currentPage}
        imageBg={meImage}
        intendPage={3}
        title={"Sobre mí"}
        text={"Algo de mi historia para conocerme mejor"}
      />
      <button
        className="relative max-h-[10vh] top-80 left-[2vw] lg:hidden"
        onClick={() => nextPage()}
      >
        <BiChevronsRight className="h-8 w-8 hover:scale-125 duration-300 drop-shadow-lg text-blue-700" />
      </button>
    </div>
  );
}
