 "use client"
import Image from "next/image";
import { useState , useRef, useEffect} from "react"
import { TimelineData } from "../constants/Timeline";
import { Card } from "./card";
import { Badge } from "./badge";

 type timelineProps = {
    text:string
}


export default function InteractiveTimeline({text} :timelineProps){
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const itemRefs = useRef<(HTMLDivElement| null)[]>([]);
    const lines = text.split("\n").filter((line) => line.trim() !=="");
    useEffect(() => {
        const observers = itemRefs.current.map((ref, i) => {
            if(!ref) return null;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if(entry.isIntersecting){
                        setVisibleItems((prev) => new Set([...prev, i]));
                    }
                },
                {
                    threshold:0.3,
                    rootMargin:"-50px 0px",
                }
        
               );
               observer.observe(ref);
               return observer
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect())
        }

    }, [])


    return (
        <div className="relative min-h-screen py-20 px-4 overflow-hidden">
            {/*Background*/}
            <div className="absolute inset-0 pointer-events-none">
                <div className="top-32 left-4 opacity-50">
                    <svg width="311" height="377" viewBox="0 0 311 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#paint0_diamond_44_35_clip_path)" data-figma-skip-parse="true"><g transform="matrix(1.96472e-05 0.195886 -0.208758 2.09319e-05 65.9804 191.614)"><rect x="0" y="0" width="1704.88" height="1635.04" fill="url(#paint0_diamond_44_35)" opacity="1"shapeRendering="crispEdges"/><rect x="0" y="0" width="1704.88" height="1635.04" transform="scale(1 -1)" fill="url(#paint0_diamond_44_35)" opacity="1" shapeRendering="crispEdges"/><rect x="0" y="0" width="1704.88" height="1635.04" transform="scale(-1 1)" fill="url(#paint0_diamond_44_35)" opacity="1"shapeRendering="crispEdges"/><rect x="0" y="0" width="1704.88" height="1635.04" transform="scale(-1)" fill="url(#paint0_diamond_44_35)" opacity="1"shapeRendering="crispEdges"/></g></g><path opacity="0.41" d="M-89.7394 224.81L-133.723 91.2076L-1.36382 43.6134L69.8207 78.3324L-62.5388 125.927L-18.555 259.529L-89.7394 224.81ZM150.706 117.783L222.295 152.699L266.279 286.302L133.919 333.896L62.3302 298.98L195.094 251.583L150.706 117.783Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.22115384042263031,&#34;b&#34;:0.22115384042263031,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.60000002384185791,&#34;g&#34;:0.13269230723381042,&#34;b&#34;:0.13269230723381042,&#34;a&#34;:1.0},&#34;position&#34;:0.95673078298568726}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.22115384042263031,&#34;b&#34;:0.22115384042263031,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.60000002384185791,&#34;g&#34;:0.13269230723381042,&#34;b&#34;:0.13269230723381042,&#34;a&#34;:1.0},&#34;position&#34;:0.95673078298568726}],&#34;transform&#34;:{&#34;m00&#34;:0.039294369518756866,&#34;m01&#34;:-417.51544189453125,&#34;m02&#34;:274.71844482421875,&#34;m10&#34;:391.7727050781250,&#34;m11&#34;:0.041863877326250076,&#34;m12&#34;:-4.2936244010925293},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
                        <defs>
                        <clipPath id="paint0_diamond_44_35_clip_path"><path opacity="0.41" d="M-89.7394 224.81L-133.723 91.2076L-1.36382 43.6134L69.8207 78.3324L-62.5388 125.927L-18.555 259.529L-89.7394 224.81ZM150.706 117.783L222.295 152.699L266.279 286.302L133.919 333.896L62.3302 298.98L195.094 251.583L150.706 117.783Z"/></clipPath><linearGradient id="paint0_diamond_44_35" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF3838"/>
                        <stop offset="0.956731" stopColor="#992222"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="absolute bottom-0 left-4 md:left-8 z-10 opacity-50">
                    {lines.map((_, i) => (
                        <span key={i} className="block text-2xl font-light font-serif text-transparent bg-clip-text bg-linear-to-r from-[#ba2025] to-neutral-500/30">{_}</span>
                    ))}
                </div>
            </div>

            {/*Tmeline */}
            <div className="max-w-6xl mx-auto">
                <div className="relative min-h-screen">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#ba2025] transform -translate-x-1/2 z-10 rounded-sm"/>
                    <div className="space-y-24">
                        {TimelineData.map((item, index) => (
                            <div 
                            key={index}
                            className={`relative flex items-center justify-center transition-all duration-1000 ${
                                visibleItems.has(index) ? "opacity-100 translate-y-0" :"opacity-0 translate-y-8"
                            }`}
                            ref={(el) => {itemRefs.current[index] = el}}
                            >
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                                    <div className={`w-6 h-6 bg-[#ba2025] border-white border-4 shadow-lg transition-all duration-500 rounded-full ${
                                        visibleItems.has(index) ? "scale-100" :"scale-0"
                                    }`}></div>
                                </div>
                                {/*content */}
                                <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                                    item.side === "right" ? "md:grid-flow-col-dense" : ""
                                }`}>
                                    {/*Text*/}
                                    <div className={`${item.side  === "left" ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:col-start-2"}
                                        transition-all duration-700 delay-300 ${visibleItems.has(index) ? "opacity-100 translate-x-0" : `opacity-0 ${item.side === "left" ? "translate-x-8" : "-translate-x-8"}`}
                                    `}>
                                        <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                                            <Badge variant={"secondary"} className="mb-3 text-white bg-[#ba2025]">
                                                {item.year}
                                            </Badge>
                                            <h3 className="text-2xl font-bold text-gray-900 mg-3">{item.title}</h3>
                                            <p className="">{item.description}</p>
                                        </Card>
                                    </div>
                                    {/* image */}
                                    <div className={`${
                                        item.side === "left" ? "md:pl-12" : "md:pr-12 md:col-start-1"
                                    } transition-all duration-700 delay-500 ${
                                        visibleItems.has(index) ? "opacity-100 translate-x-0" : `opacity-0 ${item.side === "left" ? "-translate-x-8" : "translate-x-8"}`
                                    }`}>
                                        <div className="relative group w-full h-48 md:h-56">
                                            <Image fill src={item.image} alt="iamge" className=" object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}