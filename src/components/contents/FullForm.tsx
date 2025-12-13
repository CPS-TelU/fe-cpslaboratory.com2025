import Link from "next/link";


export default function () {
    return (
        <div className="flex flex-col items-center justify-center px-4 pt-40 pb-40 space-y-3">
            <div className="flex items-center justify-center h-full flex-col">
                <span className="text-lg md:text-lg font-bold bg-[#BA2025] px-2  text-white rounded-md">
                    Registration Closed
                </span>
                <h1 className="text-lg md:text-5xl leading-relaxed font-bold bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent mt-2">
                    We Appreciate Your Enthusiasm
                </h1>
                <p className="text-base font-medium mt-2 text-center mx-auto max-w-xl">
                    Registration is currently unavailable. We truly appreciate your enthusiasm.
                    <br/>
                    if you have any question or would like to stay informed about upcoming please
                    <Link href={"/contact"} className="hover:text-[#ba2025] hover:underline">
                        <b>{" "}reach out to us</b>
                    </Link>
                    . We hope to connect with you soon.
                </p>
            </div>
        </div>
    )
}