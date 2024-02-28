import style from './Cards.module.css'
import Image from "next/image"

export default function LittleCardtech ({name, image, type}) {
    return (
 <div className={style.animate}>
<div className="p-4 bg-slate-200 rounded-md gap-3 z-5 select-none flex flex-col place-content-center shadow-xl shadow-indigo-500 hover:shadow-2xl hover:shadow-indigo-800">
<h1 className={`font-sans font-semibold text-slate-600 text-center  ${name === 'Google Cloud' ? 'text-xs' : 'text-md'  } ${name === 'PostgreSQL' ? 'text-xs' : 'text-md'  } `} >{name}</h1>
<Image width={200} height={200} className={` rounded-lg ${name === 'Google Cloud' ? 'h-[5.5rem] w-[5.5rem]' : 'h-20 w-20'  } ${name === 'PostgreSQL' ? 'h-[5.5rem] w-[5.5rem]' : 'h-20 w-20'  } `} src={image} alt="tech"/>
<p className="text-xs text-center font-semibold text-slate-600" >{type}</p>
</div>
        </div>
       
    )
}