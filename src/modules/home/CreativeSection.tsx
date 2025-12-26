import { CreativeCard } from "@/components/shared/CreativeCard";

// Dữ liệu mẫu (thực tế có thể lấy từ API)
const creativeItems = [
  {
    id: 1,
    imageSrc: "/images/den-long-tre.jpg",
    category: "Thủ công mỹ nghệ",
    title: "Đèn lồng tre truyền thống",
    meta: "Hướng dẫn chi tiết • 45 phút"
  },
  {
    id: 2,
    imageSrc: "/images/robot-lego.jpg",
    category: "LEGO MOC",
    title: "Robot lắp ráp tự hành"
  },
  {
    id: 3,
    imageSrc: "/images/origami.png",
    category: "Gấp giấy",
    title: "Nghệ thuật Origami cơ bản"
  },
  // Thêm các item khác...
];

export function CreativeSection() {
  return (
    <section id="creative-zone" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">Inspiration Gallery</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
            Góc Sáng Tạo & <span className="text-amber-500 italic">DIY</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Khám phá hàng ngàn ý tưởng thủ công độc đáo. Lưu lại và thực hiện vào cuối tuần này.
          </p>
        </div>

        {/* Masonry Grid Setup với Tailwind */}
        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {creativeItems.map((item) => (
            <CreativeCard 
                key={item.id}
                imageSrc={item.imageSrc}
                category={item.category}
                title={item.title}
                meta={item.meta}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
             <button className="px-8 py-3 bg-white border-2 border-amber-500 text-amber-600 font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all shadow-md">
                Xem thêm 100+ ý tưởng khác
             </button>
        </div>
      </div>
    </section>
  );
}