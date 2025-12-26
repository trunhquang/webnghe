import Link from "next/link";
import Image from "next/image";

// Dummies with better visuals
const courses = [
  {
    id: 1,
    title: "Lộ trình TOEIC 450+ cho người mất gốc",
    lessons: 45,
    students: 1205,
    image: "/images/lo-trinh-toeic.jpg", // Ensure this exists or use placeholder
    category: "English",
    color: "blue",
    progress: 0,
    price: "Miễn phí"
  },
  {
    id: 2,
    title: "IELTS 6.5 Intensive - Master 4 Kỹ năng",
    lessons: 80,
    students: 850,
    image: "/images/lo-trinh-ielse65.png",
    category: "IELTS",
    color: "red",
    progress: 32, // Demo progress
    price: "Premium"
  },
  {
    id: 3,
    title: "Web Frontend: HTML, CSS & ReactJS",
    lessons: 120,
    students: 3400,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    category: "Coding",
    color: "purple",
    progress: 0,
    price: "Miễn phí"
  },
  {
    id: 4,
    title: "Tư duy Logic & Giải thuật cơ bản",
    lessons: 30,
    students: 500,
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=800&auto=format&fit=crop",
    category: "Logic",
    color: "emerald",
    progress: 0,
    price: "Miễn phí"
  },
];

const categories = [
  { name: "✨ Tất cả", active: true },
  { name: "🇬🇧 Tiếng Anh", active: false },
  { name: "💻 Lập trình", active: false },
  { name: "🧠 Tư duy", active: false },
  { name: "🚀 Affiliate", active: false },
];

export function EducationSection() {
  return (
    <section id="edu-hub" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Edu<span className="text-brand-primary">Hub</span> - Góc Học Tập
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl font-light">
              Hệ thống lộ trình được thiết kế <span className="font-semibold text-slate-800">tinh gọn</span>, tập trung vào <span className="font-semibold text-slate-800">kết quả thực tế</span>.
            </p>
          </div>
          <Link href="#" className="flex items-center gap-2 font-bold text-brand-primary hover:text-brand-navy-900 transition-colors group px-6 py-3 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md">
            Xem tất cả khóa học
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* --- SIDEBAR FILTER --- */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-3xl p-6 shadow-premium border border-slate-100 sticky top-24">
              <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-6 px-2">Danh mục</h3>
              <div className="space-y-2">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-300 font-semibold flex items-center justify-between group ${cat.active
                        ? 'bg-brand-navy-900 text-white shadow-lg shadow-brand-navy-900/20'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'
                      }`}
                  >
                    {cat.name}
                    {cat.active && <span className="material-symbols-outlined text-sm">check</span>}
                  </button>
                ))}
              </div>

              {/* Mini Promo */}
              <div className="mt-8 p-5 bg-gradient-to-br from-brand-primary-50 to-blue-100/50 rounded-2xl border border-blue-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 text-brand-primary">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <p className="text-sm font-bold text-brand-navy-900 mb-1">Học viên mới?</p>
                <p className="text-xs text-slate-500 mb-3">Làm bài test năng lực để nhận lộ trình phù hợp.</p>
                <button className="text-xs font-bold text-brand-primary hover:underline">Làm bài test ngay →</button>
              </div>
            </div>
          </div>

          {/* --- COURSES LIST --- */}
          <div className="w-full lg:w-3/4">
            {/* Horizontal Scroll Area */}
            <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory">

              {courses.map(course => (
                <div key={course.id} className="min-w-[320px] md:min-w-[360px] snap-start">
                  <Link href="#" className="block h-full bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 group overflow-hidden flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                        {course.category}
                      </div>
                      {course.price === "Miễn phí" && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          FREE
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                        {course.title}
                      </h3>

                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">play_circle</span>
                          {course.lessons} bài
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">group</span>
                          {course.students} học viên
                        </div>
                      </div>

                      {/* Progress Bar (Interactive Element) */}
                      <div className="mt-auto">
                        <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                          <span>Tiến độ</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${course.progress > 0 ? 'bg-brand-primary' : 'bg-slate-200'}`}
                            style={{ width: `${Math.max(course.progress, 5)}%` }} // Minimum width for visual
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* 'More' Card */}
              <div className="min-w-[150px] flex items-center justify-center snap-start">
                <Link href="#" className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-primary hover:text-white transition-all shadow-sm hover:shadow-lg">
                  <span className="material-symbols-outlined text-3xl">arrow_forward</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}