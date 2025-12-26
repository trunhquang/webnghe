import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-navy-900 flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="font-heading font-bold text-xl text-slate-900">TrungTri.com</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Nền tảng kết hợp Giáo dục & Sáng tạo dành cho người trẻ Việt Nam. Tư duy tốt hơn, Sáng tạo vui hơn.
            </p>
            <div className="flex gap-4">
              {['facebook', 'water_drop', 'play_circle'].map((icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 hover:bg-brand-primary hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300">
                  <span className="material-symbols-outlined text-lg">{icon === 'water_drop' ? 'favorite' : icon === 'play_circle' ? 'smart_display' : 'public'}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Học Tập</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Lộ trình TOEIC</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">IELTS Intensive</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Tư duy Logic</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Sáng Tạo</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Thư viện DIY</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Dự án cộng đồng</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Thử thách tuần</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Đóng góp ý tưởng</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Bản tin</h4>
            <p className="text-sm text-slate-500 mb-4">Nhận thông báo về khóa học mới & ý tưởng hay hàng tuần.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email của bạn" className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-primary" />
              <button className="px-4 py-2 bg-brand-navy-900 text-white rounded-lg hover:bg-brand-primary transition-colors">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>© 2025 TrungTri.com. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-600">Điều khoản</Link>
            <Link href="#" className="hover:text-slate-600">Bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}