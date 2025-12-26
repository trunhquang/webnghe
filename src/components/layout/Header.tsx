"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? "h-16 glass"
            : "h-24 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-br from-brand-navy-900 to-brand-primary-700 shadow-xl group-hover:shadow-brand-primary/50 transition-all duration-300">
              <span className="absolute inset-0 flex items-center justify-center text-white font-heading font-black text-xl">
                T
              </span>
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              TrungTri<span className="text-brand-accent">.com</span>
            </span>
          </Link>

          {/* SEARCH BAR - CENTER (Desktop) */}
          <div className={`hidden md:flex flex-1 max-w-xl mx-8 transition-all duration-500 transform ${isScrolled ? 'scale-100 opacity-100' : 'scale-105 opacity-100'}`}>
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Tìm kiến thức TOEIC, IELTS hoặc ý tưởng DIY..."
                className={`w-full pl-12 pr-4 py-3 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-primary/20 ${isScrolled
                    ? "bg-slate-100 border-slate-200 focus:border-brand-primary text-slate-800 placeholder-slate-400"
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-blue-100 focus:bg-white/20 focus:border-white/50"
                  }`}
              />
              <span className={`material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isScrolled ? "text-slate-400 group-focus-within:text-brand-primary" : "text-blue-100 group-focus-within:text-white"
                }`}>
                search
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#edu-hub"
              className={`text-sm font-semibold transition-colors duration-300 hover:text-brand-primary ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              Góc Học Tập
            </Link>
            <Link
              href="#creative-zone"
              className={`text-sm font-semibold transition-colors duration-300 hover:text-brand-accent ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              Góc Sáng Tạo
            </Link>

            {/* ACTION BUTTON */}
            <Link
              href="/dashboard"
              className="group relative px-6 py-2.5 rounded-full overflow-hidden bg-white shadow-lg transition-transform active:scale-95 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2 font-bold text-brand-navy-900 text-sm">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
                My Brain
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-light to-brand-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </nav>

          {/* MOBILE BURGER */}
          <button
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`material-symbols-outlined text-3xl ${isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}>
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay could go here */}
    </>
  );
}