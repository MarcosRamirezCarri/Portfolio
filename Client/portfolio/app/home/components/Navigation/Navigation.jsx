"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import Link from "next/link";

const NavBar = () => {
  const [bar, setBar] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setBar(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      onClick={() => setBar(false)}
      className={`w-[100%] z-[101] h-[100vh] absolute ${
        bar ? "bg-slate-950/[0.4]" : "bg-transparent"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[60%] lg:w-[30%] ring-1 lg:ring-0 ring-indigo-700  h-[100vh] font-lato  items-start flex flex-col bg-indigo-500 lg:bg-transparent px-8 py-5 gap-5 font-titilium transition-all duration-300 fixed lg:top-[4.5rem] ${
          bar
            ? "translate-x-[0vw]"
            : "translate-x-[-100vw] lg:translate-x-[0vw]"
        }`}
      >
        <Link
          href={"/home/welcome"}
          className={` flex flex-col  transition-all duration-200  ${
            path === "/home/welcome"
              ? "  text-indigo-950 "
              : " hover:text-indigo-800 text-slate-950"
          } `}
        >
          <p className="text-2xl lg:text-4xl font-semibold">Marcos Ramirez</p>
          <p className="text-md ">Desarrollador Full Stack</p>
        </Link>
        <Link
          href={"/home/technologies"}
          className={` flex flex-col text-xl lg:text-2xl text-left  transition-all duration-200  ${
            path === "/home/technologies"
              ? "  text-indigo-950 "
              : " hover:text-indigo-800 text-slate-950"
          } `}
        >
          Tecnologías
        </Link>

        <Link
          href={"/home/about"}
          className={` flex flex-col   text-xl lg:text-2xl text-left transition-all duration-200  ${
            path === "/home/about"
              ? "  text-indigo-950 "
              : " hover:text-indigo-800 text-slate-950"
          } `}
        >
          Sobre Mí
        </Link>

        <Link
          href={"/home/projects"}
          className={` flex flex-col text-xl lg:text-2xl text-left transition-all duration-200  ${
            path === "/home/projects"
              ? "  text-indigo-950 "
              : " hover:text-indigo-800 text-slate-950"
          } `}
        >
          Proyectos
        </Link>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setBar(true)}
        className={`w-fit mx-5 ${
          !bar ? "flex lg:hidden" : "hidden"
        } relative bg-indigo-900 animate-pulse p-2 rounded-2xl top-[4rem]`}
      >
        <BiArrowFromLeft className="text-4xl" />
      </button>
      </div>
    
    </div>
  );
};
export default NavBar;
