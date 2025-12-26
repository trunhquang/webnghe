import Link from "next/link";
import Image from "next/image";

export function EducationSection() {
  return (
    <section id="edu-hub" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-2">
              Lộ trình chinh phục mục tiêu
            </h2>
            <p className="text-slate-500">Các khóa học được thiết kế bài bản từ cơ bản đến nâng cao.</p>
          </div>
          <Link href="#" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1 group">
            Xem tất cả lộ trình
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Sidebar Danh Mục (Sticky) --- */}
          <div className="w-full lg:w-1/4">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 sticky top-24">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">category</span>
                Danh mục
              </h3>
              <ul className="space-y-3">
                <li><Link href="#" className="block px-4 py-2 rounded-lg bg-blue-100 text-blue-800 font-semibold border-l-4 border-blue-600">Tiếng Anh (TOEIC/IELTS)</Link></li>
                <li><Link href="#" className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-white hover:shadow-sm transition border-l-4 border-transparent hover:border-slate-300">Lập trình Web</Link></li>
                <li><Link href="#" className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-white hover:shadow-sm transition border-l-4 border-transparent hover:border-slate-300">Toán học & Tư duy</Link></li>
                <li><Link href="#" className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-white hover:shadow-sm transition border-l-4 border-transparent hover:border-slate-300">MMO & Affiliate</Link></li>
                <li><Link href="#" className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-white hover:shadow-sm transition border-l-4 border-transparent hover:border-slate-300">Kỹ năng mềm</Link></li>
              </ul>
            </div>
          </div>

          {/* --- Horizontal Scroll List --- */}
          <div className="w-full lg:w-3/4 overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
              
              {/* Card 1: TOEIC */}
              <div className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl shadow-lg border border-slate-100 snap-center hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="h-40 bg-blue-50 relative rounded-t-2xl overflow-hidden group">
                  <Image src="/images/lo-trinh-toeic.jpg" alt="TOEIC" fill className="object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">NEWBIE</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-red-500">flag</span>
                    <span className="text-xs font-semibold text-slate-400">ENGLISH PATH</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Lộ trình TOEIC 450+</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">Dành cho người mất gốc. Cam kết đầu ra tương đương IELTS 4.0 - 5.0.</p>
                  
                  {/* Progress Bar Demo */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                      <span>Tiến độ mẫu</span>
                      <span>0%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-[5%]"></div>
                    </div>
                    <button className="w-full mt-4 py-2 bg-blue-50 text-blue-700 font-bold rounded-lg hover:bg-blue-100 transition">Xem chi tiết</button>
                  </div>
                </div>
              </div>

              {/* Card 2: IELTS (Giữ nguyên cấu trúc HTML cũ) */}
              <div className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl shadow-lg border border-slate-100 snap-center hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">HOT</div>
                <div className="h-40 bg-purple-50 relative rounded-t-2xl overflow-hidden group">
                   {/* Giả sử bạn chưa có ảnh IELTS, dùng placeholder */}
                   <Image src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop" alt="IELTS" fill className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   {/* ... Nội dung text giữ nguyên ... */}
                   <h3 className="text-xl font-bold text-slate-800 mb-2">Lộ trình IELTS 6.5 Intensive</h3>
                   <div className="mt-auto">
                      <button className="w-full py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-700 transition">Tham gia ngay</button>
                   </div>
                </div>
              </div>

              {/* Card 3: Web Dev */}
               <div className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl shadow-lg border border-slate-100 snap-center hover:shadow-xl transition-shadow duration-300 flex flex-col">
                 {/* ... Tương tự ... */}
                 <div className="h-40 bg-slate-800 relative rounded-t-2xl overflow-hidden group">
                    <Image src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800" alt="Web Dev" fill className="object-cover transition-transform group-hover:scale-105 opacity-80" />
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Lập trình Web Cơ bản</h3>
                    <div className="mt-auto">
                        <button className="w-full mt-4 py-2 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition">Xem Syllabus</button>
                    </div>
                 </div>
               </div>

               {/* Card Cuối: Tạo lộ trình */}
               <div className="min-w-[300px] md:min-w-[340px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 snap-center flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-blue-600 text-3xl">psychology</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Bạn muốn tự học?</h3>
                    <p className="text-slate-600 text-sm mb-6">Tự xây dựng lộ trình học tập của riêng bạn với công cụ My Brain.</p>
                    <Link href="#" className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Tạo lộ trình mới <span className="material-symbols-outlined">add_circle</span>
                    </Link>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}