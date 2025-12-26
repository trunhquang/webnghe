"use client"; // Cần dùng useState cho nút tim
import { useState } from "react";
import Image from "next/image";

interface CreativeCardProps {
  imageSrc: string;
  category: string;
  title: string;
  meta?: string; // Optional: "Hướng dẫn chi tiết • 45 phút"
}

export function CreativeCard({ imageSrc, category, title, meta }: CreativeCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleHeart = () => {
    setIsLiked(!isLiked);
    // Có thể gọi API lưu vào database ở đây
    if (!isLiked) {
        // Giả lập hiển thị toast đơn giản (console log thay vì alert)
        console.log("Đã lưu vào bộ sưu tập!"); 
    }
  };

  return (
    <div className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white mb-6">
      <div className="relative w-full h-auto min-h-[250px]">
         {/* Dùng width/height 0 và sizes="100vw" style width 100% để giữ aspect ratio tự nhiên của ảnh trong masonry grid */}
         <Image 
            src={imageSrc} 
            alt={title}
            width={500} 
            height={600}
            className="w-full h-auto object-cover"
         />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <button 
        onClick={toggleHeart}
        className={`absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm z-20 hover:scale-110 transition-transform ${isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-500'}`}
      >
        <span className="material-symbols-outlined">
            {isLiked ? 'favorite' : 'favorite_border'}
        </span>
      </button>

      <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 z-20 w-full">
        <span className="text-amber-300 text-xs font-bold uppercase mb-1 block">{category}</span>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        {meta && <p className="text-slate-200 text-xs mt-1">{meta}</p>}
      </div>
    </div>
  );
}