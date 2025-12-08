import SectionContainer from "@/utils/SectionsContainer";
import RecruitmentPage from "../contents/RecruitmentPage";
import RecruitmentAbout from "../contents/RecruitmentAbout";

export default function RecruitmentLayout() {
    return(
        <div className="w-full">
            <SectionContainer>
                <RecruitmentPage/>
                <RecruitmentAbout/>
            </SectionContainer>
        </div>
    )
}