import AboutDivision from "../contents/AboutDivision";
import AboutHero from "../contents/AboutHero";

export default function AboutLayout () {
    return(
    <div className="flex flex-col">
      <AboutHero />
      <AboutDivision />
    </div>
    );
}