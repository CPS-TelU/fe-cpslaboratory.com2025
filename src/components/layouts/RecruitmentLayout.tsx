import SectionContainer from "@/utils/SectionsContainer";
import RecruitmentPage from "../contents/RecruitmentPage";
import RecruitmentAbout from "../contents/RecruitmentAbout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RecruitmentLayout() {
  return (
    <div className={`w-full ${poppins.className}`}>
      <SectionContainer>
        <div className="flex flex-col gap-12 pb-20">
          {" "}
          <RecruitmentPage />
          <RecruitmentAbout />
        </div>
      </SectionContainer>
    </div>
  );
}
