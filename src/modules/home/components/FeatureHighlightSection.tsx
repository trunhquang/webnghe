import { Button } from "@/modules/core/components/ui/Button"
import { Brain, ArrowRight, Zap, FolderOpen, Share2 } from "lucide-react"

export function FeatureHighlightSection() {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-deep-blue rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-orange/10 rounded-full blur-3xl"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-orange text-sm font-semibold border border-white/10">
                                <Brain className="h-4 w-4" />
                                <span>Tính năng độc quyền</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold font-montserrat leading-tight">
                                Không chỉ là web, <br />
                                đây là <span className="text-amber-orange">Bộ não thứ hai</span> của bạn.
                            </h2>

                            <p className="text-blue-100 text-lg border-l-4 border-amber-orange pl-4">
                                Lưu trữ kiến thức, tự tạo lộ trình, phân loại ý tưởng thông minh.
                                Tất cả được đồng bộ hóa trên mọi thiết bị.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-blue-200">
                                        <Zap className="h-5 w-5" />
                                    </div>
                                    <span className="font-medium">Lưu nhanh 1 chạm</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-blue-200">
                                        <FolderOpen className="h-5 w-5" />
                                    </div>
                                    <span className="font-medium">Phân loại tự động</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="bg-amber-orange text-white hover:bg-amber-600 border-none">
                                    Tạo tài khoản miễn phí <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <p className="mt-3 text-xs text-blue-300">
                                    * Miễn phí trọn đời cho 500 thành viên đầu tiên.
                                </p>
                            </div>
                        </div>

                        {/* Visual Representation */}
                        <div className="relative hidden md:block">
                            {/* Mockup UI */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className="ml-auto text-xs text-blue-200">TrungTri / My Brain</div>
                                </div>

                                <div className="space-y-3">
                                    <div className="h-2 w-1/3 bg-white/20 rounded"></div>
                                    <div className="h-24 w-full bg-white/5 rounded border border-dashed border-white/20 flex items-center justify-center text-blue-200">
                                        <span className="flex items-center gap-2"><Share2 className="h-4 w-4" /> Paste Link Here</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="h-20 bg-blue-900/50 rounded p-3 border border-blue-800">
                                            <div className="w-8 h-8 bg-blue-800 rounded mb-2"></div>
                                            <div className="h-2 w-2/3 bg-blue-800/50 rounded"></div>
                                        </div>
                                        <div className="h-20 bg-blue-900/50 rounded p-3 border border-blue-800">
                                            <div className="w-8 h-8 bg-amber-900/50 rounded mb-2"></div>
                                            <div className="h-2 w-2/3 bg-blue-800/50 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
