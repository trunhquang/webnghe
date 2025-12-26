"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  author: string;
  image: string;
  likes: number;
  category: string;
  heightClass: string; // Tailwind height class for masonry
}

const projects: Project[] = [
  {
    id: 1,
    title: "Đèn trần Macrame",
    author: "Thu Ha",
    image: "/images/macrame.jpg",
    likes: 124,
    category: "Decor",
    heightClass: "h-96"
  },
  {
    id: 2,
    title: "Mô hình Lego City",
    author: "Minh Tri",
    image: "/images/robot-lego.jpg",
    likes: 856,
    category: "Toys",
    heightClass: "h-64"
  },
  {
    id: 3,
    title: "Origami Hạc Giấy",
    author: "Nhat Nam",
    image: "/images/origami.png",
    likes: 45,
    category: "Paper",
    heightClass: "h-72"
  },
  {
    id: 4,
    title: "Tranh vẽ trên gỗ",
    author: "Lan Anh",
    image: "/images/mug-painting.jpg",
    likes: 312,
    category: "Art",
    heightClass: "h-64"
  },
  {
    id: 5,
    title: "Lồng đèn tre truyền thống",
    author: "Hung DIY",
    image: "/images/den-long-tre.jpg",
    likes: 89,
    category: "Wood",
    heightClass: "h-80"
  },
];

function CreativeCard({ item }: { item: Project }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="mb-6 break-inside-avoid relative group cursor-pointer">
      <div className={`relative w-full ${item.heightClass} rounded-2xl overflow-hidden bg-slate-200`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Save Button */}
        <button
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${liked ? 'bg-red-500 text-white' : 'bg-white/30 text-white hover:bg-white hover:text-red-500'}`}
        >
          <span className="material-symbols-outlined text-[20px]">{liked ? 'favorite' : 'favorite'}</span>
        </button>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1 block">{item.category}</span>
          <h3 className="text-white font-bold text-lg leading-tight mb-2">{item.title}</h3>
          <div className="flex items-center justify-between text-white/80 text-xs">
            <span>by {item.author}</span>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">thumb_up</span>
              {item.likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreativeSection() {
  return (
    <section id="creative-zone" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Header Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase mb-6">
            <span className="material-symbols-outlined text-sm">palette</span>
            Creative Zone
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-6">
            Thư Viện <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Ý Tưởng</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Nơi lưu trữ và chia sẻ những dự án DIY độc đáo nhất. Đừng chỉ xem, hãy bắt tay vào làm!
          </p>
        </div>

        {/* Tabs (Visual Only for UI) */}
        <div className="flex justify-center gap-4 mb-12">
          {['Tất cả', 'Phổ biến', 'Mới nhất', 'Dành cho bạn'].map((tab, i) => (
            <button key={i} className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {projects.map(project => (
            <CreativeCard key={project.id} item={project} />
          ))}

          {/* CTA Card injected in grid */}
          <div className="mb-6 break-inside-avoid relative h-64 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-center p-8 cursor-pointer group hover:bg-slate-800 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl text-orange-400">add</span>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Chia sẻ dự án?</h3>
            <p className="text-slate-400 text-sm">Đăng tải ý tưởng của bạn và nhận sự ủng hộ từ cộng đồng.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-full hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
            Xem thêm 100+ ý tưởng khác
          </button>
        </div>
      </div>
    </section>
  );
}