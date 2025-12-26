"use client";

import { useState } from "react";
import Image from "next/image";

export interface CreativeCardProps {
  id?: number;
  imageSrc: string;
  category: string;
  title: string;
  meta?: string;
  height?: string;
}

export function CreativeCard({ imageSrc, category, title, meta, height = "h-64" }: CreativeCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      console.log("Đã lưu vào bộ sưu tập:", title);
    }
  };

  return (
    <div className="break-inside-avoid mb-6 group">
      <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white">
        {/* Image */}
        <div className={`relative w-full ${height} overflow-hidden`}>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Like Button */}
        <button
          onClick={toggleLike}
          className={`absolute top-4 right-4 w-11 h-11 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-20 hover:scale-110 transition-all duration-200 ${isLiked ? "text-red-500" : "text-slate-400 hover:text-red-500"
            }`}
        >
          <span className="material-symbols-outlined text-xl">
            {isLiked ? "favorite" : "favorite_border"}
          </span>
        </button>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <span className="inline-block px-2 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase mb-2 rounded">
            {category}
          </span>
          <h3 className="text-white font-bold text-lg mb-1 leading-tight">
            {title}
          </h3>
          {meta && (
            <p className="text-white/80 text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              {meta}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}