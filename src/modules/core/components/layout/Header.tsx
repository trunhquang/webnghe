import Link from "next/link"
import { Search, User } from "lucide-react"
import { Button } from "@/modules/core/components/ui/Button"
import { Input } from "@/modules/core/components/ui/Input"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Logo Placeholder - Text based for now */}
                        <span className="text-2xl font-bold font-montserrat text-deep-blue tracking-tight">
                            TrungTri<span className="text-amber-orange">.com</span>
                        </span>
                    </Link>
                </div>

                {/* Center: Search Bar */}
                <div className="hidden md:flex  max-w-md w-full mx-8 relative">
                    <Input
                        type="search"
                        placeholder="Bạn muốn học TOEIC hay tìm ý tưởng Lego hôm nay?"
                        className="pl-10 pr-4 rounded-full border-gray-200 bg-gray-50 focus-visible:bg-white transition-all shadow-sm"
                    />
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                {/* Right: Menu & Actions */}
                <div className="flex items-center gap-6">
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <Link href="#" className="hover:text-deep-blue transition-colors">Góc Học Tập</Link>
                        <Link href="#" className="hover:text-amber-orange transition-colors">Góc Sáng Tạo</Link>
                        <Link href="#" className="hover:text-gray-900 transition-colors">Cộng Đồng</Link>
                    </nav>

                    <Button variant="primary" size="sm" className="hidden sm:flex">
                        <User className="mr-2 h-4 w-4" />
                        Đăng nhập
                    </Button>

                    {/* Mobile Search Icon (visible only on small screens) */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Search className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
