import HomeCardTechs from "./Cards/CardTechs"
import HomeCardProyects from "./Cards/CardProyects"
import { useState } from "react";
import HomeCardMe from "./Cards/CardMe"
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';


export default function WelcomeHome ({setState}) {
    const [currentPage, setCurrentPage] = useState(1);
    const prevPage = () =>{
        if(currentPage === 1){
            setCurrentPage(3);
              }
              if(currentPage === 3){
              setCurrentPage(2)
              }
              if(currentPage === 2){
                  setCurrentPage(1)
              }
    }
    const nextPage = () => {
        if(currentPage === 1){
      setCurrentPage(2);
        }
        if(currentPage === 2){
        setCurrentPage(3)
        }
        if(currentPage === 3){
            setCurrentPage(1)
        }
    };
    

return(
    <div className="w-[95vw] lg:w-[75vw] h-[90vh] relative lg:left-[12vw] m-5 justify-center top-10 lg:top-8 lg:gap-7 flex flex-row lg:grid lg:grid-cols-3">
 <button className="relative max-h-[10vh] top-80 right-0 lg:hidden"
          onClick={() => prevPage()}>
     
        <BiChevronsLeft className="h-8 w-8 hover:scale-125 duration-300 drop-shadow-lg text-blue-700"/>
     
        </button>
<HomeCardProyects currentPage={currentPage} setState={setState} />
      <HomeCardMe currentPage={currentPage} setState={setState} />
      <HomeCardTechs currentPage={currentPage} setState={setState} />
  
    <button className="relative max-h-[10vh] top-80 left-[2vw] lg:hidden"
          onClick={() => nextPage()}>
       <BiChevronsRight className="h-8 w-8 hover:scale-125 duration-300 drop-shadow-lg text-blue-700"/>
     
        </button>   
    </div>
)
}