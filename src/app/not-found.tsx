import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          HMM...
        </h1>
        <p className="text-lg text-gray-500 mb-8">there seems to be an error</p>

        {/* 404 with Logo in Center */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Left 4 */}
          <div className="text-[200px] md:text-[250px] font-bold text-red-200 leading-none">
            4
          </div>
          
          {/* Center Logo (replacing 0) */}
          <div className="relative mx-4">
            {/* CPS Logo - Large to match the 4s */}
            <div className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] mt-10">
              <Image 
                src="/logocpscircular.svg" 
                alt="CPS Logo" 
                width={200} 
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Right 4 */}
          <div className="text-[200px] md:text-[250px] font-bold text-red-200 leading-none">
            4
          </div>
        </div>

        {/* Error Message */}
        <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">
          welp there's nothing here, lets go back.
        </p>

        {/* Home Button */}
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-[#BA2025] to-[#990000] text-white font-bold text-lg px-8 py-4 rounded-full hover:from-[#990000] hover:to-[#BA2025] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          GO BACK HOME
        </Link>
      </div>
    </div>
  );
}
