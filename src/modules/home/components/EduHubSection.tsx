import { BookCheck, Award, Code, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/modules/core/components/ui/Card"
import { Button } from "@/modules/core/components/ui/Button"

// Mock Data
const courses = [
    {
        id: 1,
        title: "Lộ trình TOEIC 450+",
        description: "Dành cho người mất gốc, mục tiêu đạt 450+ trong 3 tháng.",
        progress: 0,
        icon: BookCheck,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
    },
    {
        id: 2,
        title: "Lộ trình IELTS 6.0",
        description: "Chiến lược làm bài Reading & Listening hiệu quả nhất.",
        label: "Hot",
        icon: Award,
        color: "text-red-600",
        bgColor: "bg-red-100",
    },
    {
        id: 3,
        title: "Lập trình Web cơ bản",
        description: "HTML, CSS, JS - Xây dựng website đầu tiên của bạn.",
        label: "Thực chiến",
        icon: Code,
        color: "text-purple-600",
        bgColor: "bg-purple-100",
    },
    {
        id: 4,
        title: "Tư duy Toán học",
        description: "Nâng cao khả năng logic và giải quyết vấn đề.",
        icon: BookCheck,
        color: "text-green-600",
        bgColor: "bg-green-100",
    },
]

export function EduHubSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-deep-blue mb-2">Edu Hub</h2>
                        <p className="text-gray-600">Lộ trình chinh phục mục tiêu của bạn</p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex">
                        Xem tất cả <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        {courses.map((course) => (
                            <Card key={course.id} className="min-w-[300px] max-w-[350px] snap-center hover:shadow-md transition-shadow cursor-pointer bg-white border-none shadow-sm h-full flex flex-col">
                                <CardHeader className="flex-row gap-4 items-center">
                                    <div className={`w-12 h-12 rounded-lg ${course.bgColor} flex items-center justify-center`}>
                                        <course.icon className={`h-6 w-6 ${course.color}`} />
                                    </div>
                                    <div>
                                        {course.label && (
                                            <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-1">
                                                {course.label}
                                            </span>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardTitle className="mb-2 text-lg">{course.title}</CardTitle>
                                    <p className="text-sm text-gray-500 line-clamp-2">{course.description}</p>
                                </CardContent>
                                <CardFooter className="border-t border-gray-50 bg-gray-50/50">
                                    <div className="w-full">
                                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                                            <span>Tiến độ</span>
                                            <span>{course.progress !== undefined ? `${course.progress}%` : "Mới"}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-deep-blue rounded-full"
                                                style={{ width: `${course.progress || 5}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mt-4 text-center md:hidden">
                    <Button variant="ghost">Xem tất cả <ChevronRight className="ml-1 h-4 w-4" /></Button>
                </div>
            </div>
        </section>
    )
}
