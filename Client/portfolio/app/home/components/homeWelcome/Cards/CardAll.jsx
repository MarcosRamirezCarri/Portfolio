import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Card from "../../TechNologies/techCard/Card";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const CardAll = ({ imageBg, object, currentPage, title, text, intendPage, delay }) => {
  return (
    <div
      className={` w-[65vw] rounded-xl gap-20 bg-blue-200 lg:w-[20vw] h-[80vh] flex-col ${
        currentPage === intendPage ? "flex" : "hidden lg:flex"
      } shadow-lg shadow-blue-700 hover:shadow-xl hover:shadow-blue-800 duration-150 cursor-pointer animate-blur `}
    >
      <p className=" text-slate-900 text-center z-5 font-semibold text-xl">
        {title}
      </p>
      <p className=" text-slate-900 text-center z-5 font-medium text-lg">
        {text}
      </p>
      <Image
        className="absolute place-self-center top-12 opacity-25 z-2 h-36 w-36"
        src={imageBg}
        alt="ImageBg"
      />
      <div className="shadow-md z-10 p-3   bg-blue-300 self-center relative  ring-1 rounded-xl ring-slate-600">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: delay,
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
          {object ? (
            object.map((obj, index) => (
              <SwiperSlide key={index}>
                <Card type={obj.type} name={obj.name} image={obj.image} />
              </SwiperSlide>
            ))
          ) : (
            <div className="bg-slate-200 rounded-[10px] flex flex-col gap-[4rem] lg:gap-[4.7rem]  content-around p-2">
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
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default CardAll;
