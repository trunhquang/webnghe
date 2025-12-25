import { Heart, Bookmark } from "lucide-react"

// Mock Data with Unsplash Images
const creations = [
    {
        id: 1,
        title: "Đèn lồng tre thủ công",
        category: "Handmade",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
        height: "h-64",
    },
    {
        id: 2,
        title: "Robot Lego Mars Rover",
        category: "Lego",
        image: "https://images.unsplash.com/photo-1585338107529-13f953b6f170?q=80&w=800&auto=format&fit=crop",
        height: "h-96",
    },
    {
        id: 3,
        title: "Nghệ thuật Origami",
        category: "Paper",
        image: "https://images.unsplash.com/photo-1534067783865-64906f2df8e9?q=80&w=800&auto=format&fit=crop",
        height: "h-56",
    },
    {
        id: 4,
        title: "Góc làm việc Minimalist",
        category: "Setup",
        image: "https://images.unsplash.com/photo-1493723843689-cead34d0f47d?q=80&w=800&auto=format&fit=crop",
        height: "h-72",
    },
    {
        id: 5,
        title: "Tranh vẽ màu nước",
        category: "Art",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
        height: "h-64",
    },
    {
        id: 6,
        title: "Chậu cây tự tưới",
        category: "DIY",
        image: "https://images.unsplash.com/photo-1453989902410-67c4d58853cb?q=80&w=800&auto=format&fit=crop",
        height: "h-80",
    },
]

export function CreativeZoneSection() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-deep-blue mb-3">
                    Góc Sáng Tạo & <span className="text-amber-orange">Giải Trí Lành Mạnh</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Khám phá nghìn ý tưởng DIY, Origami, Lego và hơn thế nữa.
                    Lưu lại những gì bạn thích vào <span className="font-semibold text-deep-blue">My Brain</span>.
                </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {creations.map((item) => (
                    <div
                        key={item.id}
                        className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.height} bg-gray-200`}
                            loading="lazy"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-2 py-1 rounded bg-amber-orange text-white text-xs font-bold mb-2">
                                    {item.category}
                                </span>
                                <h3 className="text-white font-bold text-lg font-roboto-slab">{item.title}</h3>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-4">
                                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors">
                                        <Heart className="h-5 w-5" />
                                    </button>
                                    <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-deep-blue transition-colors">
                                        <Bookmark className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
