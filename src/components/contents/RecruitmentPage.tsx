export default function RecruitmentPage() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 md:px-0">
      <div className="w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-slate-900 dark:from-red-500 dark:to-slate-100">
            Cyber Recruitment
          </h1>
        </div>

        <div className="relative w-full max-w-5xl mx-auto mt-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-slate-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-slate-100">
            <img
              src="/images/foto1.png"
              alt="Recruitment Hero"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
