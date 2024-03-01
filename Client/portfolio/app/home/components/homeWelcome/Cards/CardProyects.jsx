import LittleCardProject from "../../Projects/PojectLittleCard/LittleCardProject";
import Image from "next/image";
import { datosProyectos } from "../../../../../DatosPortfolio/datosmock";
import proyectImg from "../../../../../DatosPortfolio/images/logosTech/projectt.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function HomeCardProyects({ currentPage, setState }) {
  const objetos = [...datosProyectos];

  return (
    <div className={`${currentPage === 1 ? "contents" : "hidden"} lg:contents`}>
      <div
        className="p-5 select-none rounded-[10px] relative w-[65vw] lg:w-[20vw] h-[80vh] flex flex-col text-center bg-blue-200 shadow-lg shadow-blue-700 top-[1.50rem] hover:scale-105 hover:shadow-xl hover:shadow-blue-700 duration-150 cursor-pointer animate-blur "
        onClick={() => {
          setState("Projects");
        }}
      >
        <p className="font-sans text-slate-900 font-medium text-xl">
          Mis proyectos
        </p>
        <p className="font-sans text-slate-900 font-medium text-md relative top-[5vh]">
          Proyectos o experiencias en las que he trabajado
        </p>
        <Image
          className="absolute place-self-center top-12 opacity-25 z-2 h-36 w-36"
          src={proyectImg}
          alt="project"
        />
        <div className="shadow-md z-10 p-3 max-w-min absolute bg-blue-300 self-center relative top-[15vh] lg:top-[14vh] ring-1 rounded-[10px] ring-slate-600">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
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
            className="w-44 h-64"
          >
            {objetos.map((obj, index) => (
              <SwiperSlide key={index}>
                <LittleCardProject
                  shortDescript={obj.shortDescript}
                  name={obj.name}
                  icon={obj.icon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
