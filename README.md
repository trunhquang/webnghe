This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

my-project/
├── public/                  # Chứa ảnh tĩnh (images), fonts, icons
│   └── images/
├── src/
│   ├── app/                 # App Router (Routing chính)
│   │   ├── [locale]/        # Hỗ trợ đa ngôn ngữ (i18n) - Optional
│   │   │   ├── (auth)/      # Route group cho đăng nhập/đăng ký
│   │   │   ├── page.tsx     # Trang chủ
│   │   │   └── layout.tsx   # Layout chính
│   │   ├── api/             # API Routes (Backend logic nếu cần)
│   │   └── globals.css      # CSS toàn cục
│   ├── components/          # UI Components tái sử dụng
│   │   ├── ui/              # Các component nhỏ (Button, Input - Shadcn/UI style)
│   │   ├── layout/          # Header, Footer, Sidebar
│   │   └── shared/          # Modal, Toast, Loading
│   ├── config/              # Cấu hình dự án
│   │   ├── site.ts          # Thông tin site, metadata
│   │   └── fonts.ts         # Cấu hình Font (Next/Font)
│   ├── hooks/               # Custom React Hooks (useScroll, useToast)
│   ├── lib/                 # Các hàm tiện ích (Utils), cấu hình thư viện
│   │   └── utils.ts
│   ├── modules/             # [QUAN TRỌNG] Chia theo nghiệp vụ
│   │   ├── home/            # Các component chỉ dùng cho trang chủ
│   │   │   ├── HeroSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   └── CreativeSection.tsx
│   │   └── courses/         # Module quản lý khóa học
│   ├── services/            # Nơi gọi API (tách biệt hoàn toàn UI)
│   │   ├── api-client.ts    # Cấu hình Axios/Fetch
│   │   └── course.service.ts
│   ├── types/               # TypeScript Definitions
│   └── styles/              # Các biến CSS hoặc style lẻ
├── tailwind.config.ts       # Cấu hình Tailwind
└── next.config.mjs          # Cấu hình Next.js
