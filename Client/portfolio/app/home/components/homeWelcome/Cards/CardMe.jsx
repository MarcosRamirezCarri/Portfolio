import Image from "next/image";
import meImage from "../../../../../DatosPortfolio/images/yo/bowler.png";
import "./animations/style.css";
import React from "react";

export default function HomeCardMe({ currentPage, setState }) {
  return (
    <div className={`${currentPage === 2 ? "contents" : "hidden"} lg:contents`}>
      <div
        className="p-5 select-none rounded-[10px] relative w-[65vw] lg:w-[20vw] h-[80vh] flex flex-col text-center bg-blue-200 shadow-lg shadow-blue-700 top-[1.50rem] hover:scale-105 hover:shadow-xl hover:shadow-blue-700 duration-150 cursor-pointer animate-blur "
        onClick={() => {
          setState("About");
        }}
      >
        <p className="font-sans text-slate-900 font-medium text-xl">Sobre mí</p>
        <p className="font-sans text-slate-900 font-medium text-md relative top-[5vh]">
          Algo de información para que me puedas conocer mejor
        </p>
        <Image
          className="absolute place-self-center top-12 opacity-25 z-2 h-36 w-36"
          src={meImage}
          alt="yo"
        />
        <div className="shadow-md z-10 p-3 absolute bg-blue-300 self-center relative top-[15vh] lg:top-[14vh] ring-1 h-[17.5rem] rounded-[10px] ring-slate-600">
          <div className="bg-slate-200 rounded-[10px] flex flex-col gap-[4.7rem]  content-around p-2">
            <p className="text-xl text-center font-medium text-slate-600">
              Mi historia?
            </p>
            <p className="text-xl text-center font-medium text-slate-600">
              Mi Metodologia?
            </p>
            <p className="text-xl text-center font-medium text-slate-600">
              Que me apasiona?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
