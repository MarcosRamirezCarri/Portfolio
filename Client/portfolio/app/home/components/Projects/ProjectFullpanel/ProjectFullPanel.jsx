import Image from "next/image";
import { useState, useEffect } from "react";
import styleModal from "./ModalImg.module.css";
import LittleCardtech from "../../TechNologies/techCard/littleCard.jsx";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectsPanel({
  name,
  images,
  description,
  icon,
  link,
  Implementations,
  techs,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

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

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    setModalImageUrl("");
  };
  return (
    <div className="relative grid grid-cols-3 gap-4 h-[88vh] grid-rows-2">
      <div className="col-span-3 rounded row-span-1 flex flex-row place-content-center [box-shadow:_15px_39px_131px_-55px_rgba(48,36,171,0.75)] shadow-blue-500 p-6 bg-blue-200">
        <Swiper
          effect={"slide"}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
          className=" h-[100%] w-[100%] rounded p-5"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                width={1150}
                height={850}
                onClick={() => openModal(img)}
                className="h-[100%] w-[100%] px-10 rounded"
                src={img}
                alt="PhImage"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-2 lg:p-3 rounded grid grid-cols-2 lg:grid-cols-3 row-span-1  col-span-3 bg-blue-200 shadow-lg shadow-blue-500 gap-3">
        <div className="col-span-2 flex flex-col gap-2" >
          <div className="flex flex-row place-content-center overflow-visible gap-5 m-1">
            <div className={styleModal.flipX}>
                <a href={link} target="_blank">
                  <Image
                    width={280}
                    height={200}
                    src={icon}
                    className="h-10 w-10 z-80 lg:h-20 lg:w-20 rounded-full bg-blue-50 ring-8"
                    alt="iconProyect"
                  />
                </a>
            </div>
            <h1 className="text-slate-700 self-center text-center font-medium text-lg lg:text-2xl [text-shadow:_4px_5px_10px_rgb(13_10_20_/_40%)]">
              ¿Qué es {name}?
            </h1>
          </div>
          <div className="shadow-inner self-end p-2 bg-blue-300 mb-2 rounded-[10px]">
            <p className="text-sm text-slate-900 lg:text-md text-left font-sans font-normal">
              - {description}
            </p>
          </div>
          <div className="shadow-inner flex flex-col p-2 bg-blue-300 rounded-[10px] gap-5">
            <p className="text-sm lg:text-md text-slate-900 text-left font-sans font-normal">
              - Implementaciones: {Implementations}
            </p>
          </div>
          <h1 className="text-slate-700 transition-colors self-center text-center duration-150 underline visible lg:invisible decoration-blue-200 hover:decoration-slate-700  text-center text-md lg:text-lg [text-shadow:_2px_1px_10px_rgb(13_10_20_/_40%)]">
          <a href={link} target="_blank">  Ir al sitio </a>
            </h1>
        </div>
        <div className="flex flex-col justify-center gap-2 pb-3 invisible lg:visible">
       
        <h1 className="text-slate-700  text-center text-md lg:text-lg [text-shadow:_2px_1px_10px_rgb(13_10_20_/_40%)]">
         Tecnologias Utilizadas 
            </h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 90,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[Autoplay, Navigation]}
            className=" w-32 h-48"
          >
            {techs.map((obj, index) => (
              <SwiperSlide key={index}>
                <LittleCardtech
                  type={obj.type}
                  name={obj.name}
                  image={obj.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <h1 className="text-slate-700 transition-colors duration-150 underline decoration-blue-200 hover:decoration-slate-700  text-center text-md lg:text-lg [text-shadow:_2px_1px_10px_rgb(13_10_20_/_40%)]">
          <a href={link} target="_blank">  Ir al sitio </a>
            </h1>
            
        </div>
      </div>
      {modalImageUrl !== "" && (
        <div className={styleModal.modal}>
          <div className={styleModal.modalContent}>
            <span className={styleModal.close} onClick={closeModal}>
              x
            </span>
            <TransformWrapper
              defaultScale={1}
              defaultPositionX={200}
              defaultPositionY={200}
            >
              <TransformComponent>
                <Image
                  id="modalImage"
                  src={modalImageUrl}
                  as="image"
                  className={styleModal.modalImage}
                  alt="phProyect"
                  width={isMobile ? 600 : 1150}
                  height={isMobile ? 190 : 550}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}
    </div>
  );
}
