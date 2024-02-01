import meImg1 from '../../../../DatosPortfolio/images/yo/me.png'
import { useState } from 'react'
import Image from 'next/image'
import meImg2 from '../../../../DatosPortfolio/images/yo/FotoMia1.jpeg'
import meImg3 from '../../../../DatosPortfolio/images/yo/FotoMia2.jpeg'
import meImg4 from '../../../../DatosPortfolio/images/yo/FotoMia3.jpeg'

const images =[
    meImg1,
    meImg2,
    meImg3,
    meImg4
]

export default function About1 () {
    const [ImgAleatorio, setImgAleatorio] = useState(images[0]);


    return(
        <div className="w-[95vw] lg:w-[65vw] h-[80vh] flex flex-col gap-5 lg:grid lg:grid-cols-2 relative left-[7vw] top-8 lg:top-12 lg:left-[10vw] m-5">
            <div className="bg-blue-200 w-[80vw] lg:w-[30vw] shadow-lg shadow-blue-500 gap-10 flex text-center flex-col justify-content-center p-5 rounded">
            <h1 className="text-xl lg:text-3xl text-slate-800 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] font-normal" >Soy Marcos Ramirez</h1>
            <h1 className="text-xl lg:text-3xl text-blue-600 font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] underline underline-offset-1 decoration-1 lg:decoration-2 font-normal">Un full Stack Developer</h1>
            <h1 className="text-xl lg:text-3xl text-slate-800 relative font-medium [text-shadow:_2px_4px_8px_rgb(13_10_20_/_40%)] top-10 font-normal underline decoration-2" >Te cuento un poco de mí</h1>
            <div  className="shadow-inner p-2 bg-blue-300  rounded">
            <p className="text-md lg:text-lg text-justify font-sans font-normal hyphens-manual">Si pudiera describirme con solo tres características, diría que soy una persona tranquila, dedicada y que le gusta ser metódico &shy; en mi trabajo. </p>
            <p className="text-md lg:text-lg text-justify font-sans font-normal hyphens-manual">En mi camino profesional, realice la tecnicatura en electrónica, pero luego, encontré que la programación y el desarrollo web era algo que realmente me apasionaba.</p>
            </div>
            </div>
            <div className="bg-blue-200 w-[80vw] lg:w-[30vw] rounded shadow-lg shadow-blue-500 z-5 select-none flex flex-col place-content-center">
                 <div className="place-content-center p-5">
     
  
  <Image width={400} height={400} className="ring-2 h-72 w-72 lg:w-auto lg:h-auto rounded-xl bg-transparent"  src={ImgAleatorio} alt="no image" />
  
                    </div>
            </div>
            
        </div>
    )
}