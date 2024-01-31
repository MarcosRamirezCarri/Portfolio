'use client'
import style from './LittleCardProject.module.css'
import Image from "next/image"
import { Title, Text } from '@tremor/react'

export default function LittleCardProject ({objetoAleatorio}) {
   

    return(
        <div className={style.animate}>
        <div className="p-4 bg-slate-200 rounded-md gap-3 z-5 select-none flex flex-col min-h-68 shadow-xl shadow-indigo-500 hover:shadow-2xl hover:shadow-indigo-800">
            <Title className='text-left font-medium text-xl'>{objetoAleatorio.name}</Title>
            <Image width={680} height={400} className="rounded-full bg-transparent"  src={objetoAleatorio.icon} alt="no image"/>
            <Text className='text-left font-sans text-lg'>{objetoAleatorio.shortDescript}</Text>
        
        </div>
        </div>
    )
}