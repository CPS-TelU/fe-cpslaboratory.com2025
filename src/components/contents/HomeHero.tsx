"use client"

import Image from "next/image"


export default function Hero() {
    return (
        <section className="flex items-center justify-center  px-6 lg:px-8 py-22 pb-4 relative mt-32 md:pt-0  mb-20 md:mb-20">

            {/* Decorative floating elements */}
            <div className="absolute inset-0 z-[-999] overflow-hidden">
                
                {/* Floating lines */}
                <div className="absolute top-32 left-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform rotate-45"></div>
                <div className="absolute bottom-32 right-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-red-600/25 to-transparent transform -rotate-45"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5 z-[-999]">
                    <div className="w-full h-full" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #BA2025 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            {/* Main hero container - responsive sizing */}
            <div className="relative w-[95vw] max-w-[1200px] h-[35vh] md:h-[70vh]  max-h-[600px] overflow-hidden mx-auto rounded-2xl shadow-2xl md:mt-8 mt-[-8rem]">
                <div className=" absolute inset-0 z-10 bg-black opacity-50 rounded-2xl"></div>
                <div className="relative w-full h-full">
                    <Image src={"/images/hero.jpg"} alt="imageHero" layout="fill" className="rounded-2xl object-cover object-[center] sm:object-[center_25px] md:object-[center_-50px] lg:object-[center_-70px]"/>
                </div>
                <div className="absolute z-20 inset-0 w-fulltext-center flex flex-col justify-center items-center h-full px-4 sm:px-6 md:px-8">
                  <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
                    <span className="text-white text-stroke font-extrabold text-[4rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] leading-none">
                        #
                    </span>
                    <div className="flex flex-col text-stroke text-white font-extrabold text-left leading-none">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                        CONNECT THE NODE
                        </h1>
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                        CONNECT THE WORLD
                        </h1>
                    </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/80 font-medium max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
                        Where practice meets research, fostering collaboration that sparks innovation in telecommunications and cyber-physical systems.
                    </p>
                </div>
            </div>
        </section>
    )
}