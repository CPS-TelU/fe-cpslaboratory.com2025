export default function RecruitmentPage(){
    return(
        <section className="items-center justify-center py-8 px-6">
            <div className="px-6 text-center">
                <h1 className={`mb-4 text-2xl md:text-4xl font-extrabold gradient-text`}>Cyber Recruitment</h1>
                <div className="relative w-full h-full items-center hidden md:block lg:block">
                    <img
                        src="/images/foto1.png"
                        alt="Recruitment Hero"
                        className="rounded-lg w-[95vw] max-w-[1200px] h-[35vh] md:h-[70vh]  max-h-[600px]  object-cover"
                    />
                </div>
            </div>
        </section>
    )
}