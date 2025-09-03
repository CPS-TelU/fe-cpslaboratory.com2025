import AboutDivision from "../contents/AboutDivision";
import AboutHero from "../contents/AboutHero";
import AssistantCarousel from "../ui/AssistantCarousel";

export default function AboutLayout () {
    return(
    <div className="flex flex-col">
      <AboutHero />
      <AboutDivision />
      <AssistantCarousel />
    </div>
    );
}