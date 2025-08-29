"use client";
import React, { useState } from 'react';
import DivisionCard from '@/components/ui/DivisionCard'; // Pastikan path ini benar

// Data untuk kartu, agar mudah dikelola
const divisions = [
  {
    id: 'practicum',
    title: 'PRAKTIKUM',
    imageSrc: '/placeholder-image.png', // Ganti dengan path gambar Anda
  },
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
] as const;

export default function DivisionSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#2a0a0f] via-red-800 to-[#2a0a0f] w-full flex items-center justify-center mb-8 md:mb-16 mt-8 md:mt-16 p-4 relative overflow-hidden rounded-3xl">
      <div className=" relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[400px] bg-red-900/20 rounded-full blur-3xl z-0" />

      <div
        className="relative z-10 flex flex-col items-center w-full "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 mt-8 md:mt-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90">
            Learn More About Us
          </h2>
        </div>

        {/* Kontainer untuk kartu-kartu */}
        <div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center">
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