import type { MockExam } from '@/types';

export const module2CheckpointExams: MockExam[] = [{
  id: 'chem10-module2-checkpoint-a', subjectId: 'chemistry', title: 'Chuyên đề 2 – Bảng tuần hoàn (Mã A)', duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t2'], totalPoints: 10, formCode: 'A', resultReleasePolicy: 'after_submit',
  instructions: ['Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.', 'Không xem tài liệu trong thời gian làm bài.', 'Đọc kĩ vị trí tương đối trước khi áp dụng quy luật tuần hoàn.'],
  questionIds: Array.from({ length: 12 }, (_, index) => `chem10-assess-m2-cp-a-q${String(index + 1).padStart(2, '0')}`),
  createdAt: '2026-07-15T00:00:00.000Z'
}, {
  id: 'chem10-module2-checkpoint-b', subjectId: 'chemistry', title: 'Chuyên đề 2 – Bảng tuần hoàn (Mã B)', duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t2'], totalPoints: 10, formCode: 'B', resultReleasePolicy: 'after_submit',
  instructions: ['Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.', 'Không xem tài liệu trong thời gian làm bài.', 'Đọc kĩ vị trí tương đối trước khi áp dụng quy luật tuần hoàn.'],
  questionIds: Array.from({ length: 12 }, (_, index) => `chem10-assess-m2-cp-b-q${String(index + 1).padStart(2, '0')}`),
  createdAt: '2026-07-15T00:00:00.000Z'
}];
