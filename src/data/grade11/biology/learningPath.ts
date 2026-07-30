import { LearningOutcome, LearningMisconception } from '@/types';

export const g11BiologyOutcomes: LearningOutcome[] = [
  {
    id: 'bio11-out-01',
    topicId: 'bio11-t01',
    title: 'Trao đổi chất và chuyển hóa năng lượng ở thực vật & động vật',
    description: 'Trình bày được cơ chế hấp thụ, vận chuyển nước, ion khoáng ở thực vật và cơ chế tiêu hóa, tuần hoàn ở động vật.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['bio11-qt01', 'bio11-qt02'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['bio11-misc-01'],
    evidenceTypes: ['recognition', 'explanation']
  },
  {
    id: 'bio11-out-02',
    topicId: 'bio11-t02',
    title: 'Cảm ứng ở thực vật và động vật',
    description: 'Giải thích được nguyên lí hướng động, ứng động ở thực vật và cơ chế truyền xung thần kinh, tập tính ở động vật.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['bio11-qt03', 'bio11-qt04'],
    prerequisiteOutcomeIds: ['bio11-out-01'],
    misconceptionIds: [],
    evidenceTypes: ['recognition', 'explanation']
  },
  {
    id: 'bio11-out-03',
    topicId: 'bio11-t03',
    title: 'Sinh trưởng và phát triển ở sinh vật',
    description: 'Phân biệt được các hình thức sinh trưởng, phát triển, biến thái và vai trò của các hoocmôn ở sinh vật.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['bio11-qt05', 'bio11-qt06'],
    prerequisiteOutcomeIds: ['bio11-out-02'],
    misconceptionIds: [],
    evidenceTypes: ['recognition', 'explanation']
  },
  {
    id: 'bio11-out-04',
    topicId: 'bio11-t04',
    title: 'Sinh sản ở thực vật và động vật (Premium 👑)',
    description: 'Vận dụng cơ chế sinh sản vô tính, hữu tính và thụ tinh kép vào thực tiễn trồng trọt, chăn nuôi.',
    scope: 'advanced',
    orderIndex: 4,
    questionTypeIds: ['bio11-qt07', 'bio11-qt08'],
    prerequisiteOutcomeIds: ['bio11-out-03'],
    misconceptionIds: ['bio11-misc-02'],
    evidenceTypes: ['application', 'explanation']
  },
  {
    id: 'bio11-out-05',
    topicId: 'bio11-t05',
    title: 'Mối quan hệ giữa các quá trình sinh lí trong cơ thể sinh vật (Premium 👑)',
    description: 'Đánh giá được mối quan hệ thống nhất giữa các hệ cơ quan sinh lí trong cơ thể sinh vật.',
    scope: 'advanced',
    orderIndex: 5,
    questionTypeIds: ['bio11-qt09'],
    prerequisiteOutcomeIds: ['bio11-out-04'],
    misconceptionIds: [],
    evidenceTypes: ['application', 'explanation']
  }
];

export const g11BiologyMisconceptions: LearningMisconception[] = [
  {
    id: 'bio11-misc-01',
    outcomeId: 'bio11-out-01',
    title: 'Hiểu nhầm cơ chế vận chuyển nước',
    description: 'Cho rằng nước được vận chuyển chủ động tiêu tốn ATP vào tế bào rễ.',
    correction: 'Nước luôn được vận chuyển hoàn toàn thụ động theo cơ chế thẩm thấu từ dung dịch nhược bào vào ưu bào.',
    severity: 'normal'
  },
  {
    id: 'bio11-misc-02',
    outcomeId: 'bio11-out-04',
    title: 'Hiểu nhầm sản phẩm thụ tinh kép',
    description: 'Cho rằng thụ tinh kép ở thực vật tạo ra 2 hợp tử lưỡng bội.',
    correction: 'Thụ tinh kép chỉ tạo 1 hợp tử (2n) phát triển thành phôi, tinh tử thứ 2 tạo tế bào tam bội (3n) phát triển thành nội nhũ.',
    severity: 'normal'
  }
];
