import Image from "next/image";
import { Button } from "./button";


export default function CardMarque({img, title, description} : {img:string, title:string, description:string}){
    return(
        <>
       <figure className="relative w-[950px] h-[320px] rounded-2xl overflow-hidden">
             {/* Background Image */}
            <Image
                src={img}
                alt="image"
                fill
                className="object-cover"
            />

            {/* Overlay gradient (opsional biar teks jelas) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-row justify-between items-end text-white">
                <div className="flex flex-col">
                <h1 className="font-bold text-3xl md:text-4xl">{title}</h1>
                <p className="text-base md:text-lg font-light">{description}</p>
                </div>
                <Button className="rounded-xl bg-[#ba2025] px-6 py-2 text-white">
                Find More
                </Button>
            </div>
        </figure>
        </>
    )
}