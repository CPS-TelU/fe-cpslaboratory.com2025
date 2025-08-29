import Hero from "../contents/HomeHero";
import HomeJourney from "../contents/HomeJourney";
import WhatWeDo from "../contents/HomeWhat";


export default function HomeLayout () {
    return(
        <div className="">
            <Hero/>
            <WhatWeDo/>
            <HomeJourney/>
        </div>
    )
}