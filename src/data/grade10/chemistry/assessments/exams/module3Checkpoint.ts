import type { MockExam } from '@/types';

export const module3CheckpointExams: MockExam[] = [{
  id: 'chem10-module3-checkpoint-a', subjectId: 'chemistry', title: 'Chuyên đề 3 – Liên kết hóa học (Mã A)', duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t3'], totalPoints: 10, formCode: 'A', resultReleasePolicy: 'after_submit',
  instructions: ['Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.', 'Phân biệt liên kết trong chất với lực tương tác giữa các phân tử.', 'Không xem tài liệu trong thời gian làm bài.'],
  questionIds: Array.from({ length: 12 }, (_, index) => `chem10-assess-m3-cp-a-q${String(index + 1).padStart(2, '0')}`),
  createdAt: '2026-07-15T00:00:00.000Z'
}, {
  id: 'chem10-module3-checkpoint-b', subjectId: 'chemistry', title: 'Chuyên đề 3 – Liên kết hóa học (Mã B)', duration: 20, kind: 'module_checkpoint', scopeTopicIds: ['chem10-t3'], totalPoints: 10, formCode: 'B', resultReleasePolicy: 'after_submit',
  instructions: ['Bài gồm 8 câu nhiều lựa chọn và 4 câu trả lời ngắn.', 'Phân biệt liên kết trong chất với lực tương tác giữa các phân tử.', 'Không xem tài liệu trong thời gian làm bài.'],
  questionIds: Array.from({ length: 12 }, (_, index) => `chem10-assess-m3-cp-b-q${String(index + 1).padStart(2, '0')}`),
  createdAt: '2026-07-15T00:00:00.000Z'
}];
