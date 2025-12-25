import { Button } from "@/modules/core/components/ui/Button"
import { BookOpen, Lightbulb } from "lucide-react"

export function HeroSection() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div className="space-y-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-montserrat text-deep-blue tracking-tight leading-tight">
                            Nâng cấp Tư duy <br />
                            <span className="text-amber-orange">Thỏa sức Sáng tạo</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 font-light font-open-sans">
                            Nền tảng học tập lộ trình bài bản & Kho tàng ý tưởng DIY khổng lồ.
                            Đánh thức tiềm năng trong bạn ngay hôm nay.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <BookOpen className="mr-2 h-5 w-5" />
                            Bắt đầu Học
                        </Button>
                        <Button variant="secondary" size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <Lightbulb className="mr-2 h-5 w-5" />
                            Khám phá DIY
                        </Button>
                    </div>
                </div>

                {/* Right: Visual */}
                <div className="relative h-[400px] w-full rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center overflow-hidden border border-gray-100 shadow-inner">
                    {/* Abstract Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-deep-blue/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-orange/20 rounded-full blur-2xl"></div>

                    <div className="relative z-10 text-center space-y-2 p-8 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                        <span className="text-6xl">🚀</span>
                        <p className="font-roboto-slab font-semibold text-gray-800">Your Learning Journey Starts Here</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
