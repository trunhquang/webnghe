import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Cột 1: Thông tin */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white font-heading font-bold">
                TT
              </div>
              <span className="font-heading font-bold text-xl text-blue-900">
                TrungTri.com
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-6">
              Sứ mệnh của chúng tôi là xóa bỏ rào cản giữa học thuật và sáng tạo,
              cung cấp công cụ để bạn phát triển bản thân mỗi ngày.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <span className="font-bold">f</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition"
              >
                <span className="font-bold">t</span>
              </Link>
            </div>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">
              Liên kết nhanh
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link href="#" className="hover:text-blue-600 transition">
                  Đề thi mẫu TOEIC/IELTS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition">
                  Bảng xếp hạng tháng
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition">
                  Quyên góp (Donate)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600 transition">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Cộng đồng */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 mb-6">
              Tham gia cộng đồng
            </h4>
            <p className="text-slate-500 mb-4">
              Nhận thông báo về khóa học mới và ý tưởng DIY hàng tuần.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-slate-50"
              />
              <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-bold text-sm hover:bg-indigo-100 transition"
              >
                <span className="material-symbols-outlined text-sm">
                  radio_button_unchecked
                </span>{" "}
                Discord
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-bold text-sm hover:bg-blue-100 transition"
              >
                <span className="material-symbols-outlined text-sm">groups</span>{" "}
                Group FB
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-sm">
          © 2025 TrungTri.com. All rights reserved. Designed with{" "}
          <span className="text-red-400">♥</span> for Creators & Learners.
        </div>
      </div>
    </footer>
  );
}