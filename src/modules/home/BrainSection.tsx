import Link from "next/link";

export function BrainSection() {
  return (
    <section className="py-32 bg-brand-navy-900 relative overflow-hidden text-white">
      {/* Abstract Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* --- LEFT: TEXT CONTENT --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-brand-primary-300 font-mono text-xs mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-primary-500 animate-pulse"></span>
              FEATURE SPOTLIGHT
            </div>

            <h2 className="text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
              Your Second <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-cyan-300">
                Digital Brain
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Hệ thống tối ưu để <strong>Lưu trữ (Capture)</strong> kiến thức và <strong>Chuyển hóa (Distill)</strong> thành ý tưởng sáng tạo. Không bao giờ quên một bài học hay một khoảnh khắc "Aha!" nào nữa.
            </p>

            <ul className="space-y-6 mb-10">
              {[
                { title: 'Lưu trữ thông minh', desc: 'Tự động trích xuất nội dung chính từ link bài viết/video.' },
                { title: 'Liên kết 2 chiều', desc: 'Kết nối các ghi chú (Notes) liên quan để tạo mạng lưới tư duy.' },
                { title: 'Giao diện tập trung', desc: 'Space làm việc tối giản, loại bỏ xao nhãng.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-primary-500/20 flex items-center justify-center mt-1 text-brand-primary-400">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-brand-primary-600 hover:bg-brand-primary-500 text-white font-bold rounded-2xl shadow-glow-blue transition-all hover:-translate-y-1">
                Tạo tài khoản miễn phí
              </button>
            </div>
          </div>

          {/* --- RIGHT: MOCKUP --- */}
          <div className="relative">
            {/* Perspective Mockup */}
            <div className="relative z-10 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Mockup Toolbar */}
              <div className="bg-slate-900 border-b border-slate-700 p-4 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-block bg-slate-800 px-4 py-1 rounded text-xs text-slate-400 font-mono">My Brain / Inbox</div>
                </div>
              </div>

              {/* Mockup Body */}
              <div className="p-8 bg-slate-900/50 min-h-[400px] space-y-4">
                {/* Item 1 */}
                <div className="bg-slate-800/80 p-4 rounded-xl border-l-4 border-brand-primary mb-4">
                  <div className="text-xs text-brand-primary mb-1 font-bold">SAVED • JUST NOW</div>
                  <h4 className="font-bold text-white">How to build a Second Brain?</h4>
                  <p className="text-xs text-slate-400 mt-2 truncate">Phương pháp ghi chú Zettelkasten giúp bạn liên kết kiến thức...</p>
                </div>

                {/* Item 2 */}
                <div className="bg-slate-800/80 p-4 rounded-xl border-l-4 border-amber-500">
                  <div className="text-xs text-amber-500 mb-1 font-bold">IDEA • 2 MINS AGO</div>
                  <h4 className="font-bold text-white">Làm đèn lồng từ vỏ hộp sữa?</h4>
                  <p className="text-xs text-slate-400 mt-2 truncate">Cần chuẩn bị: Vỏ hộp, sơn acrylic, dây đèn LED...</p>
                  <div className="flex gap-2 mt-3">
                    <span className="px-2 py-1 bg-slate-700 rounded text-[10px] text-slate-300">#DIY</span>
                    <span className="px-2 py-1 bg-slate-700 rounded text-[10px] text-slate-300">#Recycle</span>
                  </div>
                </div>

                {/* Fake Cursor */}
                <div className="absolute bottom-10 right-10 pointer-events-none">
                  <span className="material-symbols-outlined text-white drop-shadow-md text-3xl">near_me</span>
                </div>
              </div>
            </div>

            {/* Back Card for Depth */}
            <div className="absolute top-4 left-4 w-full h-full bg-slate-800/30 rounded-2xl -z-10 rotate-[2deg]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}