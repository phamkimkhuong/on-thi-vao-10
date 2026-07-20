export interface PhysicsChapterVideo {
  chapterId: string;
  chapterName: string;
  youtubeUrl: string;
  description: string;
}

export const g10PhysicsVideos: PhysicsChapterVideo[] = [
  {
    chapterId: 'phy10-v0',
    chapterName: 'Chương 1: Khái quát về môn Vật lý & Sai số phép đo',
    youtubeUrl: 'https://www.youtube.com/watch?v=8W600Y2hRQA',
    description: 'Tìm hiểu đối tượng nghiên cứu, phương pháp học tập môn Vật lý và các quy tắc an toàn trong phòng thí nghiệm.'
  },
  {
    chapterId: 'phy10-v1',
    chapterName: 'Chương 2: Động học (Chuyển động thẳng đều & biến đổi)',
    youtubeUrl: 'https://www.youtube.com/watch?v=D2M4wxyVpps',
    description: 'Mô tả chuyển động thẳng: Quãng đường, độ dịch chuyển, vận tốc, tốc độ và đồ thị quãng đường - thời gian.'
  },
  {
    chapterId: 'phy10-v2',
    chapterName: 'Chương 3: Động lực học (Lực & Ba định luật Newton)',
    youtubeUrl: 'https://www.youtube.com/watch?v=dopf93c5Wug',
    description: 'Tìm hiểu khái niệm lực, phép tổng hợp và phân tích lực; học ba định luật chuyển động Newton và các lực cơ học trong thực tế.'
  },
  {
    chapterId: 'phy10-v3',
    chapterName: 'Chương 4: Năng lượng, công và công suất',
    youtubeUrl: 'https://www.youtube.com/watch?v=tf4vw3NGH7E',
    description: 'Định nghĩa công, công suất; tìm hiểu động năng, thế năng trọng trường, thế năng đàn hồi và định luật bảo toàn cơ năng.'
  },
  {
    chapterId: 'phy10-v4',
    chapterName: 'Chương 5: Động lượng và Định luật bảo toàn',
    youtubeUrl: 'https://www.youtube.com/watch?v=NkQCbKm7gaE',
    description: 'Khái niệm động lượng, xung lượng của lực; phát biểu và ứng dụng định luật bảo toàn động lượng để giải bài toán va chạm và đạn nổ.'
  },
  {
    chapterId: 'phy10-v5',
    chapterName: 'Chương 6: Chuyển động tròn đều',
    youtubeUrl: 'https://www.youtube.com/watch?v=duAJTwI7HBo',
    description: 'Mô tả chuyển động tròn đều: Chu kỳ, tần số, tốc độ góc, tốc độ dài; tìm hiểu gia tốc hướng tâm và lực hướng tâm.'
  },
  {
    chapterId: 'phy10-v6',
    chapterName: 'Chương 7: Biến dạng của vật rắn & Áp suất chất lỏng',
    youtubeUrl: 'https://www.youtube.com/watch?v=Eh0hYXfl4vk',
    description: 'Tìm hiểu các loại biến dạng cơ học của vật rắn (biến dạng kéo, nén), định luật Hooke và sơ lược về áp suất chất lỏng.'
  }
];
