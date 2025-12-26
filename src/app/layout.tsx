import type { Metadata } from "next";
import { fontBody, fontHeading } from "@/config/fonts";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "TrungTri.com - Nâng cấp Tư duy, Thỏa sức Sáng tạo",
  description: "Lộ trình bài bản chinh phục ngoại ngữ & lập trình. Kho tàng ý tưởng DIY khổng lồ.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Google Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${fontBody.variable} ${fontHeading.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900`}
      >
        <Header />

        {/* Main Content: Add padding-top to account for fixed header */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}