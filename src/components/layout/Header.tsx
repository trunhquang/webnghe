"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 h-20 bg-white shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-full flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-[#1e40af] flex items-center justify-center shadow-sm">
              <span className="text-white font-heading font-bold text-xl tracking-tighter">
                TT
              </span>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-[#1e3a8a]">
              TrungTri<span className="text-[#f59e0b]">.com</span>
            </span>
          </Link>

          {/* SEARCH BAR - CENTER (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Bạn muốn học TOEIC hay tìm ý tưởng Lego hôm nay?"
                className="w-full pl-10 pr-28 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-600 focus:outline-none focus:border-[#1e40af] focus:bg-white transition-all placeholder-slate-400"
              />
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                search
              </span>
              <button className="absolute right-1 top-1 bottom-1 px-6 bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-sm font-bold rounded-full transition-colors">
                Tìm kiếm
              </button>
            </div>
          </div>

          {/* RIGHT SIDE NAV & ACTIONS */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <nav className="flex items-center gap-6">
              <Link
                href="#edu-hub"
                className="text-sm font-semibold text-slate-600 hover:text-[#1e40af] transition-colors"
              >
                Góc Học Tập
              </Link>
              <Link
                href="#creative-zone"
                className="text-sm font-semibold text-slate-600 hover:text-[#1e40af] transition-colors"
              >
                Góc Sáng Tạo
              </Link>
              <Link
                href="#community"
                className="text-sm font-semibold text-slate-600 hover:text-[#1e40af] transition-colors"
              >
                Cộng Đồng
              </Link>
            </nav>

            {/* MY BRAIN BUTTON */}
            <Link
              href="/dashboard"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0f172a] hover:bg-black text-white rounded-full transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">login</span>
              <span className="text-sm font-bold">My Brain</span>
            </Link>
          </div>

          {/* MOBILE BURGER */}
          <button
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay could go here */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden animate-fade-in-up">
          <div className="flex flex-col gap-4">
            <div className="relative w-full mb-4">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50"
              />
            </div>
            <Link href="#edu-hub" className="text-lg font-bold text-slate-800 py-2 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Góc Học Tập</Link>
            <Link href="#creative-zone" className="text-lg font-bold text-slate-800 py-2 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Góc Sáng Tạo</Link>
            <Link href="#community" className="text-lg font-bold text-slate-800 py-2 border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Cộng Đồng</Link>
            <Link href="/dashboard" className="mt-4 w-full py-3 bg-[#0f172a] text-white text-center font-bold rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>My Brain</Link>
          </div>
        </div>
      )}
    </>
  );
}