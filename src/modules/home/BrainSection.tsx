import Link from "next/link";
import Image from "next/image";

export function BrainSection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" 
            alt="Brain Network" 
            fill 
            className="object-cover mix-blend-screen"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Cột Trái: Minh họa UI */}
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-800 p-2 rounded-xl shadow-2xl border border-slate-700">
              <div className="bg-slate-900 rounded-lg p-6 relative overflow-hidden min-h-[300px]">
                {/* Traffic Lights */}
                <div className="flex gap-4 mb-6 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* Skeleton Loading Effect & Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="material-symbols-outlined text-blue-500">link</span>
                    <span>Đã lưu từ <strong>xtool.com</strong></span>
                  </div>
                  <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-800 rounded w-full"></div>
                  <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-amber-500 text-sm">lightbulb</span>
                      <span className="text-xs font-bold text-amber-500 uppercase">My Idea</span>
                    </div>
                    <p className="text-sm text-slate-300">"Kết hợp kỹ thuật macrame vào khung đèn lồng tre để tạo hiệu ứng ánh sáng mới..."</p>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold animate-bounce">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Đã lưu vào My Brain
                </div>
              </div>
            </div>
          </div>

          {/* Cột Phải: Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-blue-300 text-sm font-bold mb-4">
              Giới thiệu tính năng mới
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
              Xây dựng <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Bộ Não Thứ Hai</span>
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Không chỉ là web, đây là kho lưu trữ kiến thức cá nhân của bạn. Áp dụng phương pháp <strong>C.O.D.E</strong> (Capture, Organize, Distill, Express) để quản lý thông tin hiệu quả.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-400 mt-1">save</span>
                <div>
                  <strong className="block text-white">Lưu trữ mọi lúc</strong>
                  <span className="text-slate-400 text-sm">Copy link bài viết, video, ý tưởng và dán vào. Web tự động trích xuất nội dung.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-amber-400 mt-1">hub</span>
                <div>
                  <strong className="block text-white">Kết nối ý tưởng</strong>
                  <span className="text-slate-400 text-sm">Liên kết các ghi chú học tập với dự án sáng tạo của bạn.</span>
                </div>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 transition-all">
              Tạo tài khoản miễn phí ngay
            </button>
            <p className="mt-4 text-xs text-slate-500">*Miễn phí trọn đời cho 500 thành viên đăng ký sớm.</p>
          </div>

        </div>
      </div>
    </section>
  );
}