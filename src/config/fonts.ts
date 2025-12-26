import { Montserrat, Open_Sans } from 'next/font/google';

// Cấu hình font cho Tiêu đề (Heading)
export const fontHeading = Montserrat({
  subsets: ['latin', 'vietnamese'], // Hỗ trợ tiếng Việt
  variable: '--font-heading',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

// Cấu hình font cho Nội dung (Body)
export const fontBody = Open_Sans({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-body',
  weight: ['400', '600', '700'],
  display: 'swap',
});