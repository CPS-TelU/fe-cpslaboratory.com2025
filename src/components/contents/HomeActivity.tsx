import { MarqueData } from "../constants/MarqueData";
import { Marquee } from "../magicui/marquee";
import CardMarque from "../ui/CardMarquee";



export default function HomeActivity(){
    return(
        <section className=" py-14">
            <div className="text-center p-4">
                <h1 className="text-transparent bg-clip-text bg-linear-to-r from-[#ba2025] to-neutral-900 text-4xl md:text-5xl font-bold">Activity</h1>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s] rounded-3xl">
                    {MarqueData.map((i) => (
                        <CardMarque key={i.title} {...i}/>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}