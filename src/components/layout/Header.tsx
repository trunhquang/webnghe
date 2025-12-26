"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Nếu cuộn quá 50px thì đổi trạng thái
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Dọn dẹp sự kiện khi component bị hủy để tránh lỗi bộ nhớ
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md h-16 border-slate-200/50" // Trạng thái khi cuộn
          : "bg-white/95 backdrop-blur-md shadow-sm h-20 border-slate-200/50" // Trạng thái ban đầu
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl group-hover:bg-amber-500 transition-colors duration-300">
            TT
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-blue-900 hidden sm:block">
            TrungTri<span className="text-amber-500">.com</span>
          </span>
        </Link>

        {/* --- SEARCH BAR (Desktop) --- */}
        <div className="hidden md:flex flex-1 max-w-2xl relative mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out shadow-inner"
            placeholder="Bạn muốn học TOEIC hay tìm ý tưởng Lego hôm nay?"
          />
          <button className="absolute inset-y-1 right-1 px-4 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition text-sm font-semibold">
            Tìm kiếm
          </button>
        </div>

        {/* --- MENU PHẢI --- */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-6 font-semibold text-slate-600 text-sm">
            <Link href="#edu-hub" className="hover:text-blue-700 transition relative group">
              Góc Học Tập
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#creative-zone" className="hover:text-amber-600 transition relative group">
              Góc Sáng Tạo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="hover:text-slate-900 transition">
              Cộng Đồng
            </Link>
          </nav>

          <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5 transition-all duration-200">
            <span className="material-symbols-outlined text-[20px]">login</span>
            <span className="hidden sm:inline">My Brain</span>
          </button>
        </div>
      </div>

      {/* --- MOBILE SEARCH (Chỉ hiện ở mobile) --- */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500"
            placeholder="Tìm khóa học, ý tưởng..."
          />
        </div>
      </div>
    </header>
  );
}