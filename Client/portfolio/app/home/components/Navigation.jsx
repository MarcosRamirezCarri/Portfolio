'use client'
import instragram from '../../../DatosPortfolio/images/logosTech/LogoInstagram.png';
import github from '../../../DatosPortfolio/images/logosTech/github.png';
import Linkedin from '../../../DatosPortfolio/images/logosTech/Linkedin.png';
import calendly from '../../../DatosPortfolio/images/logosTech/Calendly.png';
import Image from 'next/image';
import { useState } from "react";
import {BiArrowToLeft} from 'react-icons/bi';


export default function Navigation ({handleChange, state, setState}) {

  const [showSidebar, setShowSidebar] = useState(true);
    return(<div className="flex absolute flex-col justify-center">

{showSidebar === false ?  (
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className="fixed ease-in-out duration-300 z-30 flex items-center lg:hidden xl:hidden cursor-pointer left-6 top-6"
      fill="#3730a3"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  ): null}
       <div className={`top-0 w-[50vw] lg:w-[25vw] left-0 lg:left-9 bg-transparent text-white fixed h-full p-2 ease-in-out duration-300 z-40  ${
    showSidebar ? "translate-x-0 " : "translate-x-[-50vw]"

  }`}>
      <svg
            className={`absolute inset-0 -z-1 w-full h-full text-blue-100 lg:hidden xl:hidden ease-in-out duration-300  ${
              showSidebar ? "translate-x-0 " : "translate-x-[-50vw]"
          
            }`}
            preserveAspectRatio="none"
            viewBox="0 0 309 800"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
            />
          </svg> 
    <div className="flex flex-col gap-2 relative lg:left-0 xl:left-1/4">
    <button
      className="text-2xl lg:text-4xl xl:text-4xl text-indigo-800 lg:hidden xl:hidden cursor-pointer absolute absolute top-0 right-4 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
     <BiArrowToLeft/>
    </button>
    <div onClick={() => setState('Welcome')}  className='flex flex-col'>
    <button  className={`z-2 w-full lg:w-max top-12 relative break-normal text-xl lg:text-3xl drop-shadow-lg [text-shadow:_4px_8px_12px_rgb(13_10_20_/_40%)] font-normal transition-colors text-blue-900 mb-2 hover:text-blue-500 ${state === 'Welcome' ? 'text-blue-500' : 'text-blue-900'}`} >Marcos Ramirez</button>
    <p className='z-2 w-full lg:w-max top-8 relative text-md lg:text-lg [text-shadow:_4px_8px_12px_rgb(13_10_20_/_40%)] font-normal transition-colors text-blue-900 mb-2'>Desarrollador Full Stack</p>
    </div> 
    <button onClick={handleChange} value='About' className={`z-2 text-center lg:w-max relative mt-20 text-lg lg:text-2xl drop-shadow-md [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal  hover:-translate-y-1.5 hover:scale-110 ease-in-out duration-300 ${state === 'About' ? 'text-blue-500' : 'text-[#1f2937]'}`}>Sobre Mí</button>
    <button onClick={handleChange} value='Projects' className={`z-2 text-center lg:w-max relative mt-2 text-lg lg:text-2xl drop-shadow-md [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal  hover:-translate-y-1.5 hover:scale-110 ease-in-out duration-300 ${state === 'Projects' ? 'text-blue-500' : 'text-[#1f2937]'}`}>Proyectos</button>
    <button onClick={handleChange} value='Tech' className={`z-2 text-center lg:w-max relative mt-2 text-lg lg:text-2xl drop-shadow-md [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal  hover:-translate-y-1.5 hover:scale-110 ease-in-out duration-300 ${state === 'Tech' ? 'text-blue-500' : 'text-[#1f2937]'}`}>Tecnologías</button>
    </div>
    <div className='absolute flex flex-row gap-3 lg:gap-4 left-2 bottom-24 hover:scale-105 hover:-translate-y-1.5 ease-in-out duration-300 content-center'>
      <a href='https://calendly.com/marcos_ramirez123' target='_blank'><Image className='place-self-center z-2 h-8 w-8 lg:h-10 lg:w-10' src={calendly} alt="LinkTo" /> </a>
      <a href='https://calendly.com/marcos_ramirez123' target='_blank'><p className='text-xs lg:text-lg relative text-end self-center top-2 text-[#1f2937] [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal'>Agenda una Cita</p></a>
    </div>
    <div className='absolute flex flex-row gap-3 lg:gap-4 left-2 bottom-12'>
    <a href='https://www.linkedin.com/in/marcos-nicolas-ramirez-carrivali-b8bb77253/' target='_blank'><Image className='place-self-center z-2 h-8 w-8 lg:h-10 lg:w-10 hover:scale-105 hover:-translate-y-1.5 ease-in-out duration-300' src={Linkedin} alt="LinkTo"/></a>
    <a href='https://github.com/MarcosRamirezCarri' target='_blank'><Image className='place-self-center z-2 h-8 w-8 lg:h-10 lg:w-10 hover:scale-105 hover:-translate-y-1.5 ease-in-out duration-300' src={github} alt="LinkTo"/></a>
    <a href='https://www.instagram.com/marcos_rc49/' target='_blank'><Image className='place-self-center z-2 h-8 w-8 lg:h-10 lg:w-10 hover:scale-105 hover:-translate-y-1.5 ease-in-out duration-300' src={instragram} alt="LinkTo"/></a>
    </div>
</div>
    </div>
      
 
    )

}