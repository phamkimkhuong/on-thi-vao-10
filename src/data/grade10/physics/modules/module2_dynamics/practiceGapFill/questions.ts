import type { Question } from '@/types';

/** Một câu bổ sung kiểu biểu diễn đồ thị còn thiếu của Module 2. */
export const g10PhysicsModule2GapFillQuestions: Question[] = [
  { id: 'phy10-m2-q181', subjectId: 'physics', topicId: 'phy10-t2', questionTypeId: 'phy10-qt22', stimulus: { id: 'phy10-m2-st181', title: 'Đồ thị gia tốc–hợp lực', media: [{ id: 'phy10-m2-media181', type: 'chart', src: '/assets/physics/module2/newton-second-law-graph.svg', alt: 'Gia tốc tăng từ 2 lên 6 m/s² khi hợp lực tăng từ 4 lên 12 N.', longDescription: 'Đồ thị a theo hợp lực là đường thẳng qua gốc; các tỉ số F trên a đều bằng 2 kilôgam.' }] }, content: 'Khối lượng của vật được suy ra từ đồ thị bằng bao nhiêu kg?', responseType: 'short_answer', correctAnswer: '2', acceptedAnswers: ['2', '2.0', '2,0'], validatorType: 'exact', difficulty: 'medium', sourceType: 'manual', outcomeIds: ['PHY10-M2-O04'], competency: 'physical_inquiry', cognitiveLevel: 'application', estimatedSeconds: 55, subTypeId: 'phy10-qt22-st1', practiceRole: 'representation_switch', representationType: 'graph' }
];
