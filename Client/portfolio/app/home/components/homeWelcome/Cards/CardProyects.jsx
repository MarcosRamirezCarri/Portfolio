import './animations/style.css'
import LittleCardProject from '../../Projects/PojectLittleCard/LittleCardProject';
import Image from 'next/image';
import { datosProyectos } from '../../../../../DatosPortfolio/datosmock';
import proyectImg from '../../../../../DatosPortfolio/images/logosTech/projectt.png'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import React, { useEffect, useState, useRef  } from "react";

export default function HomeCardProyects ({currentPage, setState}) {
  const objetos = [...datosProyectos]

  const [objetoAleatorio, setObjetoAleatorio] = useState(objetos[0]);


 
  const objetosAleatorios = () => {
    const indiceAleatorio = Math.floor(Math.random() * objetos.length);
    setObjetoAleatorio(objetos[indiceAleatorio])
}
  useEffect(() => {
  
    const interval = setInterval(() => {
        objetosAleatorios();
    }, 11000);

 
    return () => clearInterval(interval);
  }, []);
  
return(
  <div className={`${ currentPage === 1 ? 'contents':'hidden' } lg:contents`}>
  
    <div className="p-5 select-none rounded-[10px] relative w-[65vw] lg:w-[20vw] h-[80vh] flex flex-col text-center bg-blue-200 shadow-lg shadow-blue-700 top-[1.50rem] hover:scale-105 hover:shadow-xl hover:shadow-blue-700 duration-150 cursor-pointer " 
    onClick={() =>{setState('Projects')}}
    >
    <p className="font-sans text-slate-900 font-medium text-xl">Mis proyectos?</p>
    <p className='font-sans text-slate-900 font-medium text-md relative top-[5vh]'>Proyectos o experiencias en las que he trabajado</p>
    <Image className='absolute place-self-center top-12 opacity-25 z-2 h-36 w-36' src={proyectImg} alt='project'/>
    <h1 className='font-sans text-center text-slate-900 font-semibold text-lg relative top-[12vh] lg:top-[12vh]'>Estos son...</h1>
    <div className="shadow-md p-2 bg-blue-300 relative top-[15vh] lg:top-[12vh] ring-1 rounded-[10px] ring-slate-600">
    <SwitchTransition>
    <CSSTransition 
    classNames='fade'
    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} 
    key={objetoAleatorio.id}
    >
    <LittleCardProject objetoAleatorio={objetoAleatorio} />
    </CSSTransition>
   </SwitchTransition>
    </div>
    
    
    </div>
    </div>

   


)
}