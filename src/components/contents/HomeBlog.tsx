import Image from "next/image";
import { blogData } from "../constants/Blog";
import { Button } from "../ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";


export default function DetailBlog() {
    return(
        <section className="min-h-screen">
            <div className="text-center p-4">
                <h1 className="text-transparent bg-clip-text bg-linear-to-r from-[#ba2025] to-neutral-900 text-4xl md:text-5xl font-bold">Our Blog</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-40 items-center justify-center">
                <div className="flex flex-col md:justify-center md:items-center ">
                    <Image src={"/images/blog.png"} width={568} height={315} className="object-cover rounded-3xl" alt="blog"/>
                    <div className=" py-4">
                        <h1 className="font-light text-2xl md:text-4xl">Judul Blog</h1>
                        <p className="font-light text-lg md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl sem, mollis in dictum vel, maximus ut mauris. Donec vitae aliquam elit. Suspendisse tortor dolor, tempus non sollicitudin in, laoreet at libero. Morbi porta, augue eget aliquet congue. </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center self-center">
                   {blogData.map((item, index) => (
                       <div 
                    key={index}
                    className="relative group w-[368px] h-[215px] overflow-hidden rounded-3xl">
                        <Image src={item.imageSrc} alt="image" fill className="object-cover rounded-3xl" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ScrollArea className="h-[200px] group-hover:overflow-y-auto overflow-hidden transition-all duration-300 gap-2">
                                <h3 className="text-lg font-bold text-gray-900 text-center">{item.title}</h3>
                                <p className="text-lg px-4 text-start font-light">{item.description}</p>
                                <ScrollBar orientation="vertical"/>
                            </ScrollArea>
                            <Button className="bg-[#ba2025]">See More</Button>
                        </div>
                    </div>
                   ))} 
                </div>
            </div>
        </section>
    )
}