import FormResearch from "@/components/contents/formResearch";
import AlertContent from "@/components/ui/Alert-from";

export default function FormResearchPage() {
  return (
    <main className="relative flex flex-col md:flex-row lg:flex-row items-start justify-start py-30 gap-2 px-6 mx-auto max-w-7xl">
      <AlertContent />
      <FormResearch title="Research" />
    </main>
  );
}
