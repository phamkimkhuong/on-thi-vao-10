import { QuestionType } from '@/types';

export const g10EnglishQuestionTypes: QuestionType[] = [
  {
    id: 'eng10-qt1',
    topicId: 'eng10-t1',
    name: 'Phân biệt Hiện tại đơn & Hiện tại tiếp diễn',
    slug: 'hien-tai-don-hien-tai-tiep-dien',
    description: 'Học cách nhận biết và chia động từ ở hai thì cơ bản: Hiện tại đơn (diễn tả sự thật hiển nhiên, thói quen) và Hiện tại tiếp diễn (diễn tả hành động đang xảy ra tại thời điểm nói hoặc có tính chất tạm thời). Đây là chủ điểm ngữ pháp trọng tâm của Unit 1: Family Life.',
    exampleQuestionId: 'eng10-q1',
    recognitionSigns: [
      'Hiện tại đơn: Có trạng từ chỉ tần suất như always, usually, often, sometimes, never, every day...',
      'Hiện tại tiếp diễn: Có trạng từ chỉ thời gian như now, at the moment, currently, hoặc các động từ mệnh lệnh gây chú ý như Look!, Listen!'
    ],
    solvingSteps: [
      'Bước 1: Đọc kỹ ngữ cảnh câu và tìm các dấu hiệu nhận biết thời gian (trạng từ).',
      'Bước 2: Xác định xem câu nói về một thói quen/sự thật hiển nhiên hay một hành động đang tiếp diễn/tạm thời.',
      'Bước 3: Chia động từ theo đúng cấu trúc của thì đã chọn và phù hợp với chủ ngữ (số ít/số nhiều).'
    ],
    commonMistakes: [
      'Chia hiện tại tiếp diễn cho các động từ trạng thái (state verbs) như like, love, hate, know, believe, understand...',
      'Quên thêm "s/es" khi chia thì hiện tại đơn với chủ ngữ số ít (he, she, it).'
    ],
    difficulty: 'easy',
    examFrequency: 'high'
  }
];
