"use client"
import NotFound from "@/app/not-found";
import FormPracticum from "@/components/contents/formPracticum";
import FormResearch from "@/components/contents/formResearch";
import AlertContent from "@/components/ui/Alert-from";
import { useParams } from "next/navigation";



export default function ReasearchPage(){
    const { slug } = useParams()
    return (
        <main className="relative flex flex-col md:flex-row lg:flex-row items-start justify-start py-30 gap-2 px-6 mx-auto max-w-7xl">
            <AlertContent/>
            {slug === "research" ? (
                <FormResearch title={"Research"}/>
            ) : slug === "practicum" ? (
                <FormPracticum title={"Practicum"}/>
            ): (
                <NotFound/>
            )}
        </main>
    )
}
