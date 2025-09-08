"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

interface Assistant {
  id: string;
  kode: string;
  role: string;
  major: string;
  imageUrl: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}

interface AssistantCardProps {
  assistant: Assistant;
}

export default function AssistantCard({ assistant }: AssistantCardProps) {
  // Const buat ellipse
  const CIRCLE_SIZE = 192; // px
  const CIRCLE_RIGHT = -10; // px from right of card
  const CIRCLE_BOTTOM = 1.7; // px from bottom of card

  const r = CIRCLE_SIZE / 2;

  return (
    <div
      className="relative w-full h-90 bg-transparent rounded-2xl overflow-visible"
      
    >
      {/* Box info asisten*/}
       <div className="absolute left-4 w-50">
          <div className="bg-white h-80 rounded-2xl p-1.5" style={{ boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.2), 0 1px 1px -1px rgba(0, 0, 0, 0.2)' }}>
            <div className="relative w-full h-48">
              <Image
                src={assistant.imageUrl}
                alt={assistant.kode}
                fill
                className="object-cover object-bottom rounded-2xl"
                unoptimized
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <h3 className="text-lg font-bold mb-0 bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent">{assistant.kode}</h3>
              </div>
                <p className="text-xs font-medium mb-0 bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent">{assistant.role}</p>
                <p className="text-xs mb-0.5 bg-gradient-to-r from-[#BA2025] to-[#220404] bg-clip-text text-transparent">{assistant.major}</p>
                <div className="flex items-center gap-0.5">
                  {assistant.instagram && (
                    <IconLink href={assistant.instagram} label="Instagram">
                      <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
                        <Instagram className="w-2.5 h-2.5"/>
                      </div>
                    </IconLink>
                  )}
                  {assistant.github && (
                    <IconLink href={assistant.github} label="GitHub">
                      <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.83 1.1.83 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                        </svg>
                      </div>
                    </IconLink>
                  )}
                  {assistant.linkedin && (
                    <IconLink href={assistant.linkedin} label="LinkedIn">
                      <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </IconLink>
                  )}
                </div>
            </div>
        </div>
      </div>

      {/*
      <div
        className="relative left-10 bottom-10 w-2/5 translate-y-1/4 rounded-full overflow-hidden z-6"
       style={{
          width: `${CIRCLE_SIZE}px`,
          height: `${CIRCLE_SIZE}px`,
          right: `${CIRCLE_RIGHT}px`,
        }}
      >
          <Image
            src={assistant.imageUrl}
            alt={assistant.kode}
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 640px) 40vw, 192px"
            unoptimized
          />
        
      </div>

      */}
       

    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center hover:opacity-70 focus:opacity-70"
    >
      {children}
    </Link>
  );
}

export type { Assistant };
