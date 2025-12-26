// Định nghĩa kiểu dữ liệu (DTO)
export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'TOEIC' | 'IELTS' | 'WEB';
  image: string;
  badge?: string;
}

// Hàm lấy dữ liệu (Giả lập async)
export const getFeaturedCourses = async (): Promise<Course[]> => {
  // Thực tế sẽ dùng fetch() hoặc axios.get('/api/courses')
  return [
    {
      id: '1',
      title: 'Lộ trình TOEIC 450+',
      description: 'Dành cho người mất gốc.',
      category: 'TOEIC',
      image: '/images/toeic.jpg',
      badge: 'NEWBIE'
    },
    // ... thêm các khóa học khác
  ];
};