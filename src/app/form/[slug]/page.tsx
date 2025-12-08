import NotFound from "@/app/not-found";
import FormPracticum from "@/components/contents/formPracticum";
import FormResearch from "@/components/contents/formResearch";
import AlertContent from "@/components/ui/Alert-from";



export default function ReasearchPage({params} : {params : {slug : string}}){
    const slug = params.slug || ""
    const title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
    return (
        <main className="relative flex flex-col md:flex-row lg:flex-row items-start justify-start py-30 gap-2 px-6 mx-auto max-w-7xl">
            <AlertContent/>
            {title === "Research" ? (
                <FormResearch title={title}/>
            ) : title === "Practicum" ? (
                <FormPracticum title={title}/>
            ): (
                <NotFound/>
            )}
        </main>
    )
}
