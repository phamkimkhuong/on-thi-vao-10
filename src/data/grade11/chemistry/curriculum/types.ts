import type { LearningEvidenceType, LearningScope } from '@/types';

export type Chemistry11CurriculumReviewStatus =
  | 'draft'
  | 'source_checked'
  | 'content_reviewed'
  | 'approved'
  | 'retired';

export type Chemistry11ScopeBasis =
  | 'official_required'
  | 'textbook_core'
  | 'supporting_prerequisite'
  | 'advanced';

export interface Chemistry11TextbookLesson {
  id: string;
  chapterId: string;
  chapterNumber: number;
  lessonNumber: number;
  title: string;
  kind: 'content' | 'review';
  orderIndex: number;
  reviewStatus: Chemistry11CurriculumReviewStatus;
}

export interface Chemistry11OfficialRequirement {
  id: string;
  chapterId: string;
  textbookLessonIds: string[];
  title: string;
  normalizedRequirement: string;
  actionVerbs: string[];
  evidenceTypes: LearningEvidenceType[];
  sourceLocators: string[];
  implementedOutcomeIds: string[];
  coverageStatus: 'not_started' | 'partial' | 'covered';
  coverageNotes?: string;
  reviewStatus: Chemistry11CurriculumReviewStatus;
}

export interface Chemistry11OutcomeManifestEntry {
  outcomeId: string;
  scope: LearningScope;
  scopeBasis: Chemistry11ScopeBasis;
  officialRequirementIds: string[];
  textbookLessonIds: string[];
  reviewStatus: Chemistry11CurriculumReviewStatus;
  contentVersion: string;
  lastVerifiedAt: string;
}
