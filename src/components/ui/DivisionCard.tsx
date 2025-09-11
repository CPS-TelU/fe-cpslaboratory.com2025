import React from 'react';
import Image from 'next/image';

interface DivisionCardProps {
  id: 'practicum' | 'core' | 'research';
  title: string;
  imageSrc: string;
  isHovered: boolean;
}

const DivisionCard: React.FC<DivisionCardProps> = ({ id, title, imageSrc, isHovered }) => {
  // Menentukan class transform berdasarkan ID kartu dan status hover
  const getTransformClasses = () => {
    switch (id) {
      case 'practicum':

        return isHovered
          ? 'md:translate-x-[-105%] md:rotate-0'
          : 'md:translate-x-[50%] md:rotate-[10deg]';
      case 'core':
        // Tetap di tengah, hanya menghilangkan scale saat di-hover.
        return isHovered
          ? 'md:translate-x-0 md:rotate-0'
          : 'md:translate-x-0 md:rotate-0 md:scale-105';
      case 'research':
        // Jika di-hover, pindah ke kanan. Jika tidak, di kiri & miring.
        return isHovered
          ? 'md:translate-x-[105%] md:rotate-0'
          : 'md:translate-x-[-50%] md:rotate-[-10deg]';
      default:
        return '';
    }
  };

  const zIndex = id === 'core' && !isHovered ? 'z-20' : 'z-10';

  return (
    <div
      className={`
        w-[280px] h-[300px] md:absolute md:w-[280px] md:h-[300px] mx-auto md:mx-0 
        bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col items-center justify-between
        transition-none md:transition-all md:duration-500 md:ease-in-out md:transform-gpu
        ${getTransformClasses()}
        ${zIndex}
      `}
    >
      <h3 className="text-xl md:text-2xl font-bold text-red-600 tracking-wider mt-6">
        © {title}
      </h3>
      <div className="w-full h-40 md:h-40 bg-gray-100 rounded-lg flex items-center justify-center">

        <Image
          src={imageSrc}
          alt={`Image for ${title}`}
          width={120} // Ukuran gambar disesuaikan
          height={120}
          className="opacity-50"
        />
        <span className="text-gray-400 font-semibold">Image Placeholder</span>
      </div>
    </div>
  );
};

export default DivisionCard;