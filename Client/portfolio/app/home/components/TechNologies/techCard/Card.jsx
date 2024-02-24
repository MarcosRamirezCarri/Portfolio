import { Card, Text, Title } from "@tremor/react"
import style from './Cards.module.css'
import Image from "next/image"

export default function Cardtech ({name, image, type}) {
    return (
        <div className={style.animate}>
<div className="p-4 bg-slate-200 rounded-md gap-3 z-5 select-none flex flex-col justify-left">
<Title >{name}</Title>
<Image width={200} height={200} className={style.containerImg} src={image} alt="tech" />
<Text >{type}</Text>
</div>
        </div>
    )
}