export type NotificationType = 'system' | 'achievement' | 'reminder' | 'premium';

export type TargetGrade = 'all' | 'grade9' | 'grade10' | 'grade11' | 'grade12';

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  type: NotificationType;
  targetGrade?: TargetGrade;
  actionUrl?: string;
  createdAt: string;
  read?: boolean;
  createdByEmail?: string;
}
