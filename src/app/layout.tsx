import type { Metadata } from "next";
import { Montserrat, Roboto_Slab, Open_Sans, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrungTri.com - Nâng cấp Tư duy - Thỏa sức Sáng tạo",
  description: "Nền tảng học tập lộ trình bài bản & Kho tàng ý tưởng DIY khổng lồ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${montserrat.variable} ${roboSlab.variable} ${openSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
