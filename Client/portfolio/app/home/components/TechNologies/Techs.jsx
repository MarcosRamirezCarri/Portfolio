import LittleCardtech from "./techCard/littleCard";
import { techs } from "../../../../DatosPortfolio/tecnologiasMock";

export default function Techs() {
  const Tec = [...techs];

  return (
 
      <div className="bg-transparent flex flex-col select-none justify-center relative left-[1vw] lg:left-[15%] top-8 lg:top-8 h-[90vh] max-w-5xl">
        <div className="bg-blue-200 relative left-2 max-w-fit shadow-inner  rounded-tl-md rounded-tr-md">
          <h1 className="text-xl mt-2 mr-2 ml-2 drop-shadow-xl font-sans font-semibold ">
            Mis Tecnologías
          </h1>
      

        <div className="shadow-lg bg-blue-200 rounded-md overflow-y-auto snap snap-mandatory scroll-py-1.5 snap-y p-5 scroll-smooth touch-auto  grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
          {Tec &&
            Tec.map((tec, index) => (
              <div
                key={index}
                className="snap-always snap-center justify-center"
              >
                <LittleCardtech
                  key={index}
                  id={tec.id}
                  name={tec.name}
                  type={tec.type}
                  image={tec.image}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
