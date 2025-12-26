import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mt-20 min-h-[calc(100vh-80px)] flex flex-col md:flex-row relative overflow-hidden">
      
      {/* --- Cột Trái: Education --- */}
      <div className="w-full md:w-1/2 relative group h-[50vh] md:h-auto overflow-hidden">
        {/* Overlay màu */}
        <div className="absolute inset-0 bg-blue-900/80 z-10 transition-colors duration-500 md:group-hover:bg-blue-900/70"></div>
        
        {/* Background Image: Dùng fill để ảnh phủ kín div cha */}
        <Image 
            src="/images/education-background.jpg" // Đảm bảo bạn đã có ảnh này trong public/images
            alt="Education Background"
            fill
            className="object-cover transition-transform duration-700 md:group-hover:scale-110"
            priority // Load ảnh này ngay lập tức vì nó ở đầu trang
        />
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center md:items-start p-8 md:p-16 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 border border-blue-300/50 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                Academic Focus
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
                Nâng Cấp <br className="hidden md:block" /> <span className="text-blue-300">Tư Duy</span>
            </h2>
            <p className="text-blue-100 mb-8 max-w-md text-lg font-light">
                Lộ trình bài bản chinh phục ngoại ngữ & lập trình. Học tập trung, kết quả thực.
            </p>
            <Link href="#edu-hub" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/50 transform hover:scale-105 group-hover:ring-4 ring-white/20">
                Bắt đầu Học
                <span className="material-symbols-outlined">school</span>
            </Link>
        </div>
      </div>

      {/* --- Cột Phải: Creative --- */}
      <div className="w-full md:w-1/2 relative group h-[50vh] md:h-auto overflow-hidden border-t-4 md:border-t-0 md:border-l-4 border-white">
        <div className="absolute inset-0 bg-amber-600/80 z-10 transition-colors duration-500 md:group-hover:bg-amber-600/70"></div>
        
        <Image 
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1600&auto=format&fit=crop"
            alt="Creative Background"
            fill
            className="object-cover transition-transform duration-700 md:group-hover:scale-110"
        />
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center md:items-end p-8 md:p-16 text-center md:text-right">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-400/30 border border-amber-200/50 text-amber-100 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                Creative Flow
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 leading-tight">
                Thỏa Sức <br className="hidden md:block" /> <span className="text-amber-300">Sáng Tạo</span>
            </h2>
            <p className="text-amber-100 mb-8 max-w-md text-lg font-light">
                Kho tàng ý tưởng DIY khổng lồ. Từ Lego, Origami đến thủ công mỹ nghệ.
            </p>
            <Link href="#creative-zone" className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all shadow-xl shadow-amber-900/30 transform hover:scale-105 group-hover:ring-4 ring-amber-400/30">
                Khám phá DIY
                <span className="material-symbols-outlined">palette</span>
            </Link>
        </div>
      </div>
      
      {/* Icon 'AND' ở giữa */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hidden md:flex">
          <span className="font-heading font-black text-slate-800 text-xl">&</span>
      </div>
    </section>
  );
}