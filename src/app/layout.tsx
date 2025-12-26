import type { Metadata } from "next";
import { fontBody, fontHeading } from "@/config/fonts";
 // File font đã tạo ở bước trước
import "@/app/globals.css";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"


export const metadata: Metadata = {
  title: "TrungTri.com - Nâng cấp Tư duy, Thỏa sức Sáng tạo",
  description: "Lộ trình bài bản chinh phục ngoại ngữ & lập trình.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Google Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
        />
      </head>
      <body
        className={`${fontBody.variable} ${fontHeading.variable} font-sans bg-slate-50 text-slate-800 antialiased`}
      >
        {/* 1. Header luôn nằm trên cùng */}
        <Header />

        {/* 2. Main content đẩy xuống 80px (pt-20) để không bị Header che mất */}
        <main className="min-h-screen pt-20">
            {children}
        </main>

        {/* 3. Footer luôn nằm dưới cùng */}
        <Footer />
      </body>
    </html>
  );
}