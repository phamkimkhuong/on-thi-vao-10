export type AnnouncementCategory = 'feature' | 'exam_update' | 'guide' | 'general';

export interface AnnouncementPost {
  id: string;
  title: string;
  content: string; // Markdown formatted content
  authorName: string;
  authorBadge?: string;
  category: AnnouncementCategory;
  targetGrade?: 'all' | 'grade9' | 'grade10' | 'grade11' | 'grade12';
  createdAt: string;
  updatedAt?: string;
}
