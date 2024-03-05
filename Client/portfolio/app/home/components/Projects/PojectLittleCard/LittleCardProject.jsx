'use client'
import style from './LittleCardProject.module.css'
import Image from "next/image"
import { Title, Text } from '@tremor/react'

export default function LittleCardProject ({icon, name, shortDescript}) {
   

    return(
        <div className={style.animate}>
        <div className="p-4 bg-slate-200 rounded-md gap-3 z-5 select-none flex flex-col min-h-68">
            <p className={`font-sans font-semibold text-slate-600 text-center  ${name === 'Rick and Morty' ? 'text-md' : 'text-lg'  } ${name === 'Henry PI Dogs' ? 'text-md' : 'text-lg'  } `}>{name}</p>
            <Image width={680} height={400} className="rounded-full w-[8.25rem] h-[8.25rem] bg-transparent"  src={icon} alt="no image"/>
            <Text className='text-center text-slate-600 font-sans text-lg'>{shortDescript}</Text>
        
        </div>
        </div>
    )
}