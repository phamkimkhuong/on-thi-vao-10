export interface ChemistryChapterVideo {
  chapterId: string;
  chapterName: string;
  youtubeUrl: string;
  description: string;
}

export const g11ChemistryVideos: ChemistryChapterVideo[] = [
  {
    chapterId: 'chem11-v0',
    chapterName: 'Khái niệm về cân bằng hóa học',
    youtubeUrl: 'https://www.youtube.com/watch?v=3S1t0lqP0m8',
    description: 'Tìm hiểu phản ứng một chiều, phản ứng thuận nghịch và hằng số cân bằng hóa học.'
  }
];
