"use client"
import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Hide indicator after scrolling down 200px
      setIsVisible(scrollTop < 200);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20 pointer-events-auto transition-all duration-500 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <div 
        className="flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <span className="text-[#BA2025] text-sm mb-2 group-hover:text-red-600 transition-colors duration-300 font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
          Scroll
        </span>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-6 h-10 border-2 border-[#BA2025]/50 rounded-full flex justify-center group-hover:border-[#BA2025] transition-colors duration-300 bg-white/5 backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-[#BA2025] to-red-600 rounded-full mt-2 animate-bounce group-hover:from-red-600 group-hover:to-[#BA2025] transition-all duration-300 shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
