"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AssistantCard, { Assistant } from "./AssistantCard";

interface AssistantCarouselProps {
  assistants?: Assistant[];
}

// Dummy data asisten
const DUMMY_ASSISTANT_DATA: Assistant[] = [
  {
    id: "1",
    kode: "AKI",
    major: "Teknik Telekomunikasi",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Research",
    instagram: "https://instagram.com/aki",
    linkedin: "https://linkedin.com/in/aki",
    github: "https://github.com/aki",
  },
  {
    id: "2",
    kode: "BUDI",
    major: "Teknik Informatika",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Development",
    instagram: "https://instagram.com/budi",
    linkedin: "https://linkedin.com/in/budi",
    github: "https://github.com/budi",
  },
  {
    id: "3",
    kode: "CITRA",
    major: "Sistem Informasi",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Design",
    instagram: "https://instagram.com/citra",
    linkedin: "https://linkedin.com/in/citra",
    github: "https://github.com/citra",
  },
  {
    id: "4",
    kode: "DANI",
    major: "Teknik Komputer",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Networking",
    instagram: "https://instagram.com/dani",
    linkedin: "https://linkedin.com/in/dani",
    github: "https://github.com/dani",
  },
  {
    id: "5",
    kode: "ELSA",
    major: "Teknik Elektro",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Hardware",
    instagram: "https://instagram.com/elsa",
    linkedin: "https://linkedin.com/in/elsa",
    github: "https://github.com/elsa",
  },
  {
    id: "6",
    kode: "FARIS",
    major: "Teknik Mesin",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Automation",
    instagram: "https://instagram.com/faris",
    linkedin: "https://linkedin.com/in/faris",
    github: "https://github.com/faris",
  },
  {
    id: "7",
    kode: "GINA",
    major: "Teknik Industri",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Management",
    instagram: "https://instagram.com/gina",
    linkedin: "https://linkedin.com/in/gina",
    github: "https://github.com/gina",
  },
  {
    id: "8",
    kode: "HADI",
    major: "Teknik Sipil",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Research",
    instagram: "https://instagram.com/hadi",
    linkedin: "https://linkedin.com/in/hadi",
    github: "https://github.com/hadi",
  },
  {
    id: "9",
    kode: "INDAH",
    major: "Teknik Kimia",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Development",
    instagram: "https://instagram.com/indah",
    linkedin: "https://linkedin.com/in/indah",
    github: "https://github.com/indah",
  },
  {
    id: "10",
    kode: "JOKO",
    major: "Teknik Mesin",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Design",
    instagram: "https://instagram.com/joko",
    linkedin: "https://linkedin.com/in/joko",
    github: "https://github.com/joko",
  },
  {
    id: "11",
    kode: "KARTIKA",
    major: "Teknik Elektro",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Management",
    instagram: "https://instagram.com/kartika",
    linkedin: "https://linkedin.com/in/kartika",
    github: "https://github.com/kartika",
  },
  {
    id: "12",
    kode: "LUKMAN",
    major: "Teknik Lingkungan",
    imageUrl: "/images/halfbodyguy.png",
    divisi: "Research",
    instagram: "https://instagram.com/lukman",
    linkedin: "https://linkedin.com/in/lukman",
    github: "https://github.com/lukman",
  },
];

export default function AssistantCarousel({
  assistants = [],
}: AssistantCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [assistantData, setAssistantData] = useState<Assistant[]>([]);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  // === fetch (kept your dummy preview) ===
  useEffect(() => {
    setAssistantData(DUMMY_ASSISTANT_DATA);
    setIsLoading(false);

    // real fetch can replace above:
    // (kept your robust parsing)
    // (async () => { ... })();
  }, []); // Empty dependency array - only run once on mount

  // === utilities ===
  const chunk = <T,>(arr: T[], size: number): T[][] => {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  // infinite scrolling
  const rows = useMemo(() => {
    if (assistantData.length === 0) return [[], []];
    
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const cardWidth = 256;
    const gap = 32;
    const cardsPerScreen = Math.ceil(screenWidth / (cardWidth + gap)) + 2;
    
    const firstRowData = assistantData.slice(0, 6);
    const secondRowData = assistantData.slice(6, 12);
    
    // Duplikat card untuk infinite effect
    const firstRow = [];
    const secondRow = [];
    
    for (let i = 0; i < cardsPerScreen; i++) {
      firstRow.push(...firstRowData.map(card => ({ ...card, id: `${card.id}-${i}` })));
      secondRow.push(...secondRowData.map(card => ({ ...card, id: `${card.id}-${i}` })));
    }
    
    return [firstRow, secondRow];
  }, [assistantData]);



  const hasMoreCards = assistantData.length > 12;

  // === loading ===
  if (isLoading) {
    return (
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-left bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent">
            Our Assistants
          </h2>
        </div>
        <div className="space-y-8">
          {/* First row */}
          <div 
            className="flex gap-8 overflow-x-auto scrollbar-hide"
            style={{
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)'
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg animate-pulse h-64">
                <div className="h-full bg-gray-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
          {/* Red separator */}
          <div className="w-full h-0.5 relative">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CD5C5C] to-transparent"
              style={{
                background: 'linear-gradient(to right, transparent 0%, #CD5C5C 20%, #CD5C5C 80%, transparent 100%)'
              }}
            ></div>
          </div>
          {/* Second row */}
          <div 
            className="flex gap-8 overflow-x-auto scrollbar-hide"
            style={{
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)'
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-lg animate-pulse h-64">
                <div className="h-full bg-gray-300 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (assistantData.length === 0) {
    return (
      <section className="py-16 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-left mb-8 bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent">
            Our Assistants
          </h2>
          <p className="text-lg bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent">No assistants available at the moment.</p>
        </div>
      </section>
    );
  }

  // === carousel ===
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-left bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent">
          Our Assistants
        </h2>
      </div>

      <div className="space-y-8">
        {/* First Row - Infinite Belt */}
        <div 
          ref={firstRowRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)'
          }}
        >
          {rows[0].map((assistant) => (
            <div key={assistant.id} className="flex-shrink-0 w-64">
              <AssistantCard assistant={assistant} />
            </div>
          ))}
        </div>

        {/* Red Separator Line */}
        <div className="w-full h-0.5 relative">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CD5C5C] to-transparent"
            style={{
              background: 'linear-gradient(to right, transparent 0%, #CD5C5C 20%, #CD5C5C 80%, transparent 100%)'
            }}
          ></div>
        </div>

        {/* Second Row - Infinite Belt */}
        <div 
          ref={secondRowRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide"
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)'
          }}
        >
          {rows[1].map((assistant) => (
            <div key={assistant.id} className="flex-shrink-0 w-64">
              <AssistantCard assistant={assistant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
