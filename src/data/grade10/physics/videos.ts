export interface PhysicsChapterVideo {
  chapterId: string;
  chapterName: string;
  youtubeUrl: string;
  description: string;
}

export const g10PhysicsVideos: PhysicsChapterVideo[] = [
  {
    chapterId: 'phy10-v0',
    chapterName: 'Bài 1: Khái quát về môn Vật lý & Sai số phép đo',
    youtubeUrl: 'https://www.youtube.com/watch?v=3S1t0lqP0m8',
    description: 'Tìm hiểu đối tượng nghiên cứu, phương pháp học tập môn Vật lý và các quy tắc an toàn trong phòng thí nghiệm.'
  },
  {
    chapterId: 'phy10-v1',
    chapterName: 'Chương 1: Động học (Chuyển động thẳng đều & biến đổi)',
    youtubeUrl: 'https://www.youtube.com/watch?v=Q1KDk1Rru2A',
    description: 'Mô tả chuyển động thẳng: Quãng đường, độ dịch chuyển, vận tốc, tốc độ và đồ thị quãng đường - thời gian.'
  }
];
