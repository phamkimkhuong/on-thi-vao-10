import type { LearningOutcome, LearningMisconception } from '@/types';

export const g10HistoryOutcomes: LearningOutcome[] = [
  {
    id: 'g10-his-out-1',
    topicId: 'g10-his-topic-1',
    title: 'Phân biệt hiện thực lịch sử & nhận thức lịch sử',
    description: 'Hiểu bản chất khách quan của hiện thực lịch sử và tính chủ quan, có thể thay đổi của nhận thức lịch sử.',
    scope: 'core',
    orderIndex: 1,
    questionTypeIds: ['g10-his-type-1'],
    prerequisiteOutcomeIds: [],
    misconceptionIds: ['g10-his-misc-1'],
    evidenceTypes: ['recognition']
  },
  {
    id: 'g10-his-out-2',
    topicId: 'g10-his-topic-3',
    title: 'Nắm vững thành tựu văn minh phương Đông & phương Tây cổ đại',
    description: 'Trình bày và phân tích các thành tựu rực rỡ của Ai Cập, Ấn Độ, Trung Hoa, Hy Lạp - La Mã.',
    scope: 'core',
    orderIndex: 2,
    questionTypeIds: ['g10-his-type-5', 'g10-his-type-6'],
    prerequisiteOutcomeIds: ['g10-his-out-1'],
    misconceptionIds: ['g10-his-misc-2'],
    evidenceTypes: ['recognition']
  },
  {
    id: 'g10-his-out-3',
    topicId: 'g10-his-topic-6',
    title: 'Hiểu rõ các nền văn minh cổ Việt Nam & Văn minh Đại Việt',
    description: 'Đánh giá được thành tựu và vị thế của Văn minh Văn Lang - Âu Lạc, Chăm-pa, Phù Nam và đỉnh cao Văn minh Đại Việt.',
    scope: 'core',
    orderIndex: 3,
    questionTypeIds: ['g10-his-type-11', 'g10-his-type-12'],
    prerequisiteOutcomeIds: ['g10-his-out-2'],
    misconceptionIds: ['g10-his-misc-3'],
    evidenceTypes: ['recognition']
  }
];

export const g10HistoryMisconceptions: LearningMisconception[] = [
  {
    id: 'g10-his-misc-1',
    outcomeId: 'g10-his-out-1',
    title: 'Nhầm hiện thực lịch sử với nhận thức lịch sử',
    description: 'Nghĩ rằng sự ghi chép của nhà sử học luôn là tuyệt đối bất biến giống như bản thân hiện thực quá khứ.',
    correction: 'Hiện thực lịch sử xảy ra trong quá khứ là bất biến, nhưng nhận thức lịch sử của con người liên tục cập nhật theo nguồn tư liệu mới khai quật.',
    severity: 'normal'
  },
  {
    id: 'g10-his-misc-2',
    outcomeId: 'g10-his-out-2',
    title: 'Nhầm lẫn nguồn gốc thành tựu văn minh',
    description: 'Nhầm lẫn chữ số 0 là phát minh của người Ả Rập thay vì người Ấn Độ.',
    correction: 'Người Ấn Độ phát minh ra chữ số 0, thương nhân Ả Rập là người học tập và truyền bá nó sang phương Tây.',
    severity: 'normal'
  },
  {
    id: 'g10-his-misc-3',
    outcomeId: 'g10-his-out-3',
    title: 'Coi Văn minh Đại Việt là bản sao phương Đông',
    description: 'Đánh giá thấp tính sáng tạo và bản sắc riêng độc lập của Văn minh Đại Việt.',
    correction: 'Văn minh Đại Việt tiếp thu chọn lọc tri thức phương Đông nhưng luôn giữ vững tinh thần độc lập, tự cường và bản sắc dân tộc.',
    severity: 'critical'
  }
];
