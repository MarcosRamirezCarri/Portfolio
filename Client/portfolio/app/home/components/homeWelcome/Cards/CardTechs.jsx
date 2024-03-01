"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "./animations/style.css";
import techImg from "../../../../../DatosPortfolio/images/logosTech/tech.png";
import { techs } from "../../../../../DatosPortfolio/tecnologiasMock";
import Card from "../../TechNologies/techCard/Card";

export default function HomeCardTechs({ currentPage, setState }) {
  const objetos = [...techs];

  return (
    <div className={`${currentPage === 3 ? "contents" : "hidden"} lg:contents`}>
      <div
        className="p-5 select-none rounded-[10px] relative w-[65vw] lg:w-[20vw] h-[80vh] flex flex-col text-center bg-blue-200 shadow-lg shadow-blue-700 top-[1.50rem] hover:scale-105 hover:shadow-xl hover:shadow-blue-700 duration-150 cursor-pointer animate-blur"
        onClick={() => {
          setState("Tech");
        }}
      >
        <p className="font-sans text-slate-900 text-center z-5 font-semibold text-xl">
          Mi Stack
        </p>
       
        <p className="font-sans text-slate-900 text-center font-medium text-md relative top-[5vh]">
          Tecnologías Web las cuales he estudiado durante mi vida
        </p>
        <Image
          className="absolute place-self-center top-12 opacity-25 z-2 h-36 w-36"
          src={techImg}
          alt="tech"
        />
        <div className="shadow-md z-10 p-3 max-w-min absolute bg-blue-300 self-center relative top-[15vh] lg:top-[14vh] ring-1 rounded-[10px] ring-slate-600">
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
            className="w-44 h-64"
          >
            {objetos.map((obj, index) => (
              <SwiperSlide key={index}>
                <Card type={obj.type} name={obj.name} image={obj.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
