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
    <div className="w-full flex justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Research Card */}
        <Card className="flex flex-col h-full border-t-4 border-t-red-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                Research Division
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The Research Group Assistant will play a key role in exploring
              emerging technologies, including <strong>AIoT</strong> for
              transforming industries,
              <strong> Web Development</strong> for innovative platforms, and{" "}
              <strong>Machine Learning</strong>. Join us to drive impactful
              research outcomes through collaboration and experimentation.
            </p>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              className="w-full py-6 text-lg font-medium bg-[#ba2025] hover:bg-red-700 shadow-md hover:shadow-lg transition-all"
              onClick={() => router.push("/recruitment/research")}
            >
              Check Requirements
            </Button>
          </CardFooter>
        </Card>

        {/* Practicum Card */}
        <Card className="flex flex-col h-full border-t-4 border-t-red-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                Practicum Division
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The Practicum Division Assistant is responsible for organizing and
              managing hands-on learning experiences. You will guide students
              during practical sessions, maintain laboratory safety, and ensure
              a productive learning environment for everyone.
            </p>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              className="w-full py-6 text-lg font-medium bg-[#ba2025] hover:bg-red-700 shadow-md hover:shadow-lg transition-all"
              onClick={() => router.push("/recruitment/practicum")}
            >
              Check Requirements
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
