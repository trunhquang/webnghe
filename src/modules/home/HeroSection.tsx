import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row">

            {/* --- LEFT: EDUCATION (Academic Focus) --- */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full group">
                {/* Background Overlay & Gradient */}
                <div className="absolute inset-0 bg-brand-navy-900/90 mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-900/80 to-brand-navy-900/95 z-20"></div>

                {/* Image with Parallax/Zoom Effect */}
                <Image
                    src="/images/education-background.jpg"
                    alt="Education"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                />

                {/* Content */}
                <div className="relative z-30 h-full flex flex-col justify-center items-center md:items-start p-8 md:pl-20 lg:pl-32 text-center md:text-left animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-brand-primary-400/30 bg-brand-primary-900/30 text-brand-primary-100 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        Academic & Logic
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight">
                        Nâng Cấp <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-cyan-300">
                            Tư Duy
                        </span>
                    </h1>
                    <p className="text-brand-navy-100 text-lg md:text-xl font-light mb-10 max-w-md leading-relaxed">
                        Lộ trình bài bản chinh phục ngoại ngữ & lập trình. Học sâu, hiểu bản chất, áp dụng thực tế.
                    </p>
                    <Link
                        href="#edu-hub"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-navy-900 rounded-2xl font-bold text-lg shadow-glow-blue hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                        Bắt đầu Học
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                </div>
            </div>

            {/* --- RIGHT: CREATIVE (Creative Flow) --- */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full group border-t-4 md:border-t-0 md:border-l-4 border-white/10">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-brand-accent-900/80 mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-orange-600/90 to-brand-accent-800/80 z-20"></div>

                <Image
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1600&auto=format&fit=crop"
                    alt="Creative"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Content */}
                <div className="relative z-30 h-full flex flex-col justify-center items-center md:items-end p-8 md:pr-20 lg:pr-32 text-center md:text-right animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-brand-accent-200/30 bg-brand-accent-900/30 text-brand-accent-100 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        Art & Innovation
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight">
                        Thỏa Sức <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-brand-accent-400">
                            Sáng Tạo
                        </span>
                    </h1>
                    <p className="text-orange-50 text-lg md:text-xl font-light mb-10 max-w-md leading-relaxed">
                        Kho tàng ý tưởng DIY khổng lồ. Từ Lego, Origami đến các dự án thủ công độc đáo.
                    </p>
                    <Link
                        href="#creative-zone"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-navy-900 text-white rounded-2xl font-bold text-lg shadow-glow-amber hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-black"
                    >
                        Khám phá DIY
                        <span className="material-symbols-outlined text-brand-accent transition-transform group-hover:rotate-12">palette</span>
                    </Link>
                </div>
            </div>

            {/* --- CENTER CONNECTOR --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 hidden md:flex">
                <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl animate-float">
                    <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 animate-ping"></div>
                    <span className="font-heading font-black text-3xl text-brand-navy-900">&</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-2 animate-bounce-slow opacity-70">
                <span className="text-white text-[10px] uppercase tracking-widest">Cuộn để khám phá</span>
                <span className="material-symbols-outlined text-white">keyboard_arrow_down</span>
            </div>

        </section>
    );
}