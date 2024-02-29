"use client";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HomePrin from "./components/Home";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import style from "./style.module.css";

export default function Landing() {
  const [state, setState] = useState("Welcome");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    if (val === "Projects") {
      setState("Projects");
    }
    if (val === "About") {
      setState("About");
    }
    if (val === "Tech") {
      setState("Tech");
    }
    if (val === "Welcome") {
      setState("Welcome");
    }
  };
  return (
    <div className="flex h-screen w-screen justify-around overflow-hidden select-none overflow-y-hidden">
      <div className="absolute w-screen hidden lg:contents h-screen">
        <div className={style.shapeBlob}></div>
        <div className={style.shapeBlobOne}></div>
        <div className={style.shapeBlobTwo}></div>
        <div className={style.shapeBlobThree}></div>
        <div className={style.shapeBlobFour}></div>
        <div className={style.shapeBlobFive}></div>
      </div>
      <div className="absolute -z-10 w-[70vw] h-[100vh] right-[50vw] top-[0vh] skew-x-[-10deg] bg-gradient-to-r from-blue-500 to-blue-400 shadow-xl shadow-blue-600 ring-1 ring-blue-200 lg:hidden"></div>
      <Navigation
        state={state}
        setState={setState}
        handleChange={handleChange}
      />

      <SwitchTransition>
        <CSSTransition
          classNames="Trans"
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          key={state}
        >
          <HomePrin state={state} setState={setState} />
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
