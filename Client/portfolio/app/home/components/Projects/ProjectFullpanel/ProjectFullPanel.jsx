import Image from "next/image";
import { useState, useEffect } from "react";
import styleModal from './ModalImg.module.css';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';

export default function ProjectsPanel ({name,  images, description, icon, link, Implementations, techs}) {
    const [isMobile, setIsMobile] = useState(false)
    const [modalImageUrl, setModalImageUrl] = useState('')
    const [currentIndex, setCurrrentIndex] = useState(0)
    const [interval, setIntervalo] = useState(null);


    const objetosAleatorios = () => {
      const indiceAleatorio = Math.floor(Math.random() * images.length);
      setCurrrentIndex(indiceAleatorio)
  }

useEffect(() => {
    const nuevoIntervalo = setInterval(() => {
        objetosAleatorios();
    }, 15000);
    setIntervalo(nuevoIntervalo);

    return () => clearInterval(interval);
}, []);


    useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth <= 768); 
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
          window.removeEventListener('resize', checkMobile);
        };
      }, []);

    const openModal = (imageUrl) => {
        setModalImageUrl(imageUrl)
      };
    
      const closeModal = () => {
        setModalImageUrl('')
      };
    const prevImg = () =>{
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? images.length - 1 : currentIndex - 1; 
        setCurrrentIndex(newIndex)
    };
    const nextImg = () =>{
        const isLast = currentIndex === images.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrrentIndex(newIndex)
    };
    return(
            <div className="relative grid grid-cols-3 gap-4 h-[85vh] grid-rows-2">
            <div className="col-span-3 rounded row-span-1 flex flex-row place-content-center [box-shadow:_15px_39px_131px_-55px_rgba(48,36,171,0.75)] shadow-blue-500 p-6 bg-blue-200" >
                <button className="right-0 top-1/2 relative max-h-[10vh]" onClick={prevImg}><BiChevronsLeft className="h-8 w-8 hover:scale-125 duration-300 drop-shadow-lg text-blue-700"/></button>
                <SwitchTransition>
                  <CSSTransition
                  classNames='fade2'
                  addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                  key={images[currentIndex]}
                  >
                  <Image width={580} 
                height={400} 
                onClick={() =>openModal(images[currentIndex])} 
                className="rounded -z-2  object-cover max-w-[90%] ring-2 lg:m-2 h-38 lg:w-[100%]" 
                src={images[currentIndex]} alt="ProyectImg"/>
                  </CSSTransition>
                </SwitchTransition>
             <button className="left-0 top-1/2 relative max-h-[10vh]" onClick={nextImg}><BiChevronsRight className="h-8 w-8 hover:scale-125 duration-300 drop-shadow-lg text-blue-700"/></button>
             <div className="absolute top-[47%] lg:top-[45%] gap-2 flex flex-row">
             {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrrentIndex(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 lg:w-4 lg:h-4 cursor-pointer transition-all delay-150  ${
                i == currentIndex ? "bg-blue-500" : "bg-slate-500"
              }`}
            ></div>
          );
        })}
             </div>
            </div>    
            <div className="p-2 lg:p-3 rounded row-span-1  col-span-3 bg-blue-200 shadow-lg shadow-blue-500">
              <div className="flex flex-row place-content-center overflow-visible gap-2 m-3">
              
              <div className={styleModal.flipX}>
              <div className={styleModal.animate}>
              <a href={link} target="_blank">
                <Image width={280} height={200} src={icon} className="h-10 w-10 z-80 lg:h-20 lg:w-20 rounded-full bg-blue-50 ring-2" alt="iconProyect" />
                </a>
                </div>        
              </div>
              <h1 className="place-self-center text-slate-950 w-fit h-fit overflow-visible truncate text-lg lg:text-2xl font-bold [text-shadow:_1px_1px_1px_rgb(13_10_20_/_40%)]">¿Qué es {name}?</h1>  
              </div>
              <div className="shadow-inner place-self-left p-2 bg-blue-300 mb-2 rounded-[10px]">
              <p className="text-sm text-slate-900 lg:text-md text-left font-sans font-normal">- {description}</p>

              </div>
              <div className="shadow-inner p-2 bg-blue-300 rounded-[10px]">
              <p className="text-sm lg:text-md text-slate-900 text-left font-sans font-normal">- Implementaciones: {Implementations}</p>

              </div>
               
            </div>
            {modalImageUrl !== '' && 
           <div className={styleModal.modal}>
           <div className={styleModal.modalContent}>
             <span className={styleModal.close} onClick={closeModal}>x</span>
             <TransformWrapper defaultScale={1} defaultPositionX={200} defaultPositionY={200}>
               <TransformComponent>
                 <Image id="modalImage" src={modalImageUrl} as="image" className={styleModal.modalImage} alt='phProyect' width={isMobile ? 600 : 1150} height={isMobile ? 190 : 550}  />
               </TransformComponent>
             </TransformWrapper>
           </div>
         </div>
          }
        </div>

       
    )
}