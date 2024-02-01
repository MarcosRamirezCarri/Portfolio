'use client'
import Link from "next/link"
import Image from "next/image";
import './styleBlob.css'
import { useState, useEffect } from "react";
import yoSinFondo from '../DatosPortfolio/images/yo/yoNoFondo.png'
import IconoMio from '../DatosPortfolio/images/yo/logo_large.png'
import { BiCaretRightCircle } from "react-icons/bi";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseMove = (e) => {
    setIsHovered(true);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  const handleClick = () => {
    setExpanded(true);
  }


  return (
      <div className="h-screen -z-10 select-none w-screen bg-gradient-to-r from-blue-500 to-blue-300 -z-5 place-content-center grid overflow-hidden">
      <div className="absolute -z-5  w-[70vw] h-[100vh] right-[50vw] top-[0vh] skew-x-[-10deg] bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl shadow-blue-600 ring-1 ring-blue-200"></div>
      <div className="absolute -z-5  w-[70vw] h-[100vh] left-[60vw] top-[0vh] skew-x-[-10deg] bg-gradient-to-l from-blue-400 to-blue-600 shadow-xl shadow-blue-600 ring-1 ring-blue-200 invisible lg:visible"></div>
      <div className="animate">

     
      <div className={` ${expanded ? 'expanded' : 'circle'}`}>
        
        <div   
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove} 
        style={{   transform: isHovered ? ` translateX(${mousePosition.y / 200}px) translateY(${mousePosition.x / 200}px)` : 'none'}} 
        className={`absolute invisible lg:visible h-fit w-fit origin-center right-0 transition-all ${expanded ? 'hidden' : 'content'} `} >
        <Image width={420} height={420} 
        src={yoSinFondo}
        className=' h-80 w-80 rounded-full transition-all duration-300 scale-90 blur-[0.5px] grayscale hover:grayscale-0 hover:scale-100 hover:blur-none'/>
        </div>
        
        
        <Image width={420} height={420} 
        src={IconoMio}  
        className={`absolute h-48 w-48 visible top-[30vh] lg:invisible  ${expanded ? 'hidden' : 'content'} `}/>
      {expanded ? (
        <div>
         <svg aria-hidden="true" className="w-24 h-24 text-blue-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
        </div>
      ) : (
        <div className="relative flex flex-col w-[70vw] lg:w-fit h-full gap-2 lg:gap-5 text-center lg:text-left lg:right-32">
          <div className="gap-2 relative flex flex-col lg:flex-row">
          <h2  className="text-2xl lg:text-4xl text-slate-800 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal">Bienvenido a mi</h2>
          <h2  className="text-2xl lg:text-4xl text-blue-600 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] lg:decoration-2 font-normal"> Portfolio</h2>
          </div>
          <div className="gap-2 relative left-3 lg:left-0  flex flex-col lg:flex-row mt-8 lg:mt-20">
          <h2  className="text-xl lg:text-3xl text-slate-800 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal">Soy</h2>
          <h2  className="text-xl lg:text-3xl text-blue-600 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] underline underline-offset-1 decoration-1 lg:decoration-2 font-normal">Marcos Ramirez </h2>
          </div>
          <div className="gap-1 left-3 lg:left-0 relative flex flex-row">
          <h2  className="text-xl lg:text-3xl text-slate-800 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal">Y soy un desarrollador  </h2>
          <h2  className="text-xl lg:text-3xl text-blue-600 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] underline underline-offset-1 decoration-1 font-normal"> Full Stack</h2>
          </div>
         
        
          
        </div>
       
      )}
      <Link onClick={handleClick} className={`lg:w-max absolute place-self-center bottom-[1vh] lg:bottom-10 hover:scale-110 ease-in-out duration-300 ${expanded ? 'hidden' : 'content'} `} href='/home'><BiCaretRightCircle className="h-20 w-20 drop-shadow-lg text-blue-500"/></Link>
    </div>
    </div>      
       
   
        
      
     
      </div>
  )
}
