"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function RecruitmentAbout() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-2xl">
      <Card>
        <CardHeader className="text-xl gradient-text">
          <CardTitle>Research Division</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The Research Group Assistant will play a key role in exploring
            emerging technologies, including Artificial Intelligence of
            Things(AIoT) for transforming industries, Web Development for
            building innovative platforms, and Machine Learning for data
            analysis and automation. This involves preparing research proposals,
            conducting experiments, analyzing data, and fostering a
            collaborative environment to drive impactful research outcomes.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-[#ba2025] hover:bg-red-400"
            onClick={() => router.push("/recruitment/research")}
          >
            Requirements
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="text-xl gradient-text">
          <CardTitle>Practicum Division</CardTitle>
        </CardHeader>
        <CardContent className="pb-18">
          <p>
            The Practicum Division Assistant is responsible for organizing and
            managing hands-on learning experiences in the laboratory. This role
            includes assisting in preparing materials, guiding students during
            practical sessions, ensuring proper use of equipment, and
            maintaining a safe and productive learning environment.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-[#ba2025] hover:bg-red-400"
            onClick={() => router.push("/recruitment/practicum")}
          >
            Requirements
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
