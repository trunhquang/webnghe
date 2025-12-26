import Link from "next/link";
import Image from "next/image";

export function BrainSection() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden text-white" id="brain-feature">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* --- LEFT: MOCKUP UI --- */}
          <div className="relative order-2 lg:order-1">
            {/* Main Dashboard Window */}
            <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-2 md:p-4 hover:shadow-blue-900/20 transition-all duration-500">

              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="flex-1 text-center">
                  <div className="inline-block bg-slate-800/50 px-3 py-1 rounded text-[10px] text-slate-500 font-mono tracking-wide">
                    brain.trungtri.com
                  </div>
                </div>
              </div>

              {/* Window Content */}
              <div className="bg-[#0f172a] rounded-xl p-6 min-h-[360px] flex flex-col gap-4 border border-slate-800">

                {/* Saved Link Item */}
                <div className="group p-4 bg-slate-800/40 rounded-lg border border-transparent hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-blue-400 text-lg">link</span>
                    <span className="text-xs text-slate-400 font-medium">Đã lưu từ <span className="text-white">youtube.com</span></span>
                  </div>
                  <div className="h-2 w-3/4 bg-slate-700/50 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-slate-700/50 rounded"></div>
                </div>

                {/* Note Item */}
                <div className="group p-4 bg-slate-800/40 rounded-lg border border-transparent hover:border-slate-700 transition-colors">
                  <div className="h-2 w-full bg-slate-700/30 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-slate-700/30 rounded"></div>
                </div>

                {/* HIGHLIGHTED IDEA CARD */}
                <div className="mt-auto relative bg-slate-800/90 rounded-xl p-5 border border-amber-500/30 shadow-lg animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-400 text-xs font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      MY IDEA
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium italic">
                    "Kết hợp kỹ thuật macrame vào khung đèn lồng tre để tạo hiệu ứng ánh sáng mới..."
                  </p>
                  <div className="mt-4 flex justify-end">
                    <div className="inline-flex items-center gap-1.5 bg-blue-600 px-3 py-1.5 rounded-lg text-[11px] font-bold text-white shadow-lg shadow-blue-500/20">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Đã lưu vào My Brain
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Glow behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[80px] -z-10"></div>
          </div>

          {/* --- RIGHT: TEXT CONTENT --- */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold mb-6">
              Giới thiệu tính năng mới
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading font-black mb-6 leading-tight">
              Xây dựng <span className="text-blue-400">Bộ Não Thứ Hai</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Không chỉ là web, đây là kho lưu trữ kiến thức cá nhân của bạn.
              Áp dụng phương pháp <span className="text-white font-bold">C.O.D.E</span> (Capture, Organize, Distill, Express)
              để quản lý thông tin hiệu quả.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-green-400">save</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Lưu trữ mọi lúc</h4>
                  <p className="text-slate-400 text-sm mt-1">Copy link bài viết, video, ý tưởng và dán vào. Web tự động trích xuất nội dung.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-amber-400">hub</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Kết nối ý tưởng</h4>
                  <p className="text-slate-400 text-sm mt-1">Liên kết các ghi chú học tập với dự án sáng tạo của bạn.</p>
                </div>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all w-full md:w-auto hover:-translate-y-0.5"
            >
              Tạo tài khoản miễn phí ngay
            </Link>

            <p className="mt-4 text-xs text-slate-500">
              *Miễn phí trọn đời cho 500 thành viên đăng ký sớm.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}