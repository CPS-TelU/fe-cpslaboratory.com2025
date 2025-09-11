"use client";
import React, { useEffect, useState } from 'react';
import DivisionCard from '@/components/ui/DivisionCard'; // Pastikan path ini benar
import { Skeleton } from '@/components/ui/skeleton';

// Data untuk kartu, agar mudah dikelola
const divisions = [
  {
    id: 'core',
    title: 'CORE',
    imageSrc: '/placeholder-image.png', // Ganti dengan path gambar Anda
  },
  {
    id: 'research',
    title: 'RISET',
    imageSrc: '/placeholder-image.png', // Ganti dengan path gambar Anda
  },
  {
    id: 'practicum',
    title: 'PRAKTIKUM',
    imageSrc: '/placeholder-image.png', // Ganti dengan path gambar Anda
  },
] as const;

export default function DivisionSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-[#2a0a0f] via-red-800 to-[#2a0a0f] w-full flex items-center justify-center mb-6 md:mb-12 mt-0 md:mt-2 p-4 relative overflow-hidden rounded-3xl">
        <div className=" relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[400px] bg-red-900/20 rounded-full blur-3xl z-0" />
        <div className="relative z-10 flex flex-col items-center w-full ">
          <div className="text-center mb-6 md:mb-12 mt-2 md:mt-4">
            <Skeleton className="h-12 w-[22rem] md:w-[32rem] rounded mx-auto" />
          </div>
          <div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center gap-4">
            <Skeleton className="w-56 h-56 md:w-64 md:h-64 rounded-2xl" />
            <Skeleton className="w-56 h-56 md:w-64 md:h-64 rounded-2xl" />
            <Skeleton className="w-56 h-56 md:w-64 md:h-64 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#2a0a0f] via-red-800 to-[#2a0a0f] w-full flex items-center justify-center mb-6 md:mb-12 mt-0 md:mt-2 p-4 relative overflow-hidden rounded-3xl">
      <div className=" relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[900px] md:h-[400px] bg-red-900/20 rounded-full blur-3xl z-0" />

      <div
        className="relative z-10 flex flex-col items-center w-full "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 mt-2 md:mt-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90">
            Learn More About Us
          </h2>
        </div>

        {/* Kontainer untuk kartu-kartu */}
        <div className="relative w-full h-auto md:h-[400px] flex flex-col md:flex-row md:items-center md:justify-center gap-6">
          {divisions.map((division) => (
            <DivisionCard
              key={division.id}
              id={division.id}
              title={division.title}
              imageSrc={division.imageSrc}
              isHovered={isHovered}
            />
          ))}
        </div>
      </div>
    </div>
  );
}