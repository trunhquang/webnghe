import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <span className="text-xl font-bold font-montserrat text-deep-blue">
                            TrungTri<span className="text-amber-orange">.com</span>
                        </span>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                            Nền tảng học tập lộ trình bài bản & Kho tàng ý tưởng DIY khổng lồ.
                            Nơi bạn nâng cấp tư duy và thỏa sức sáng tạo mỗi ngày.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 font-roboto-slab">Liên kết nhanh</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-deep-blue">Đề thi mẫu TOEIC/IELTS</Link></li>
                            <li><Link href="#" className="hover:text-deep-blue">Bảng xếp hạng thành viên</Link></li>
                            <li><Link href="#" className="hover:text-deep-blue">Donate ủng hộ</Link></li>
                            <li><Link href="#" className="hover:text-deep-blue">Điều khoản sử dụng</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Community */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 font-roboto-slab">Kết nối cộng đồng</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                <Youtube className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500">Tham gia Group Facebook để nhận tài liệu miễn phí!</p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} TrungTri.com. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
