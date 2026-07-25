import type { LearningMisconception, LearningOutcome } from '@/types';

export const g10BiologyModule0Outcomes: LearningOutcome[] = [
  {
    id: 'BIO10-M0-O01', topicId: 'bio10-t0', title: 'Đối tượng, vai trò và triển vọng của sinh học',
    description: 'Nêu được đối tượng, lĩnh vực nghiên cứu; phân tích vai trò của sinh học với đời sống, kinh tế, môi trường và phát triển bền vững.',
    scope: 'core', orderIndex: 1, questionTypeIds: ['bio10-qt9'], prerequisiteOutcomeIds: [], misconceptionIds: ['BIO10-M0-M01'],
    evidenceTypes: ['recognition', 'explanation', 'application'], estimatedMinutes: 35,
    textbook: { bookId: 'sgk-sinh-10', bookName: 'SGK Sinh học 10', pages: [5, 6, 7, 8], lessonName: 'Bài 1: Giới thiệu khái quát môn Sinh học', sections: ['Mục I & II: Lĩnh vực & Ngành nghề sinh học'] }
  },
  {
    id: 'BIO10-M0-O02', topicId: 'bio10-t0', title: 'Ngành nghề và vấn đề đạo đức sinh học',
    description: 'Liên hệ được thành tựu sinh học với ngành nghề; phân tích được lợi ích, rủi ro và khía cạnh đạo đức trong một tình huống đơn giản.',
    scope: 'core', orderIndex: 2, questionTypeIds: ['bio10-qt9'], prerequisiteOutcomeIds: ['BIO10-M0-O01'], misconceptionIds: [],
    evidenceTypes: ['explanation', 'application'], estimatedMinutes: 30,
    textbook: { bookId: 'sgk-sinh-10', bookName: 'SGK Sinh học 10', pages: [8, 9, 10, 11], lessonName: 'Bài 1: Giới thiệu khái quát môn Sinh học', sections: ['Mục III: Đạo đức sinh học & Phát triển bền vững'] }
  },
  {
    id: 'BIO10-M0-O03', topicId: 'bio10-t0', title: 'Phương pháp nghiên cứu sinh học',
    description: 'Phân biệt và lựa chọn được phương pháp quan sát, thực nghiệm, điều tra và làm việc trong phòng thí nghiệm.',
    scope: 'core', orderIndex: 3, questionTypeIds: ['bio10-qt10'], prerequisiteOutcomeIds: [], misconceptionIds: [],
    evidenceTypes: ['recognition', 'experiment', 'application'], estimatedMinutes: 35, isCritical: true,
    textbook: { bookId: 'sgk-sinh-10', bookName: 'SGK Sinh học 10', pages: [12, 13], lessonName: 'Bài 2: Phương pháp nghiên cứu & học tập môn Sinh học', sections: ['Mục I: Các phương pháp nghiên cứu sinh học'] }
  },
  {
    id: 'BIO10-M0-O04', topicId: 'bio10-t0', title: 'Tiến trình tìm hiểu thế giới sống',
    description: 'Đặt câu hỏi, xây dựng giả thuyết, xác định biến, thiết kế cách thu thập dữ liệu và rút ra kết luận phù hợp với bằng chứng.',
    scope: 'core', orderIndex: 4, questionTypeIds: ['bio10-qt11', 'bio10-qt12'], prerequisiteOutcomeIds: ['BIO10-M0-O03'], misconceptionIds: ['BIO10-M0-M02'],
    evidenceTypes: ['data', 'experiment', 'explanation'], estimatedMinutes: 45, isCritical: true,
    textbook: { bookId: 'sgk-sinh-10', bookName: 'SGK Sinh học 10', pages: [14, 15, 16], lessonName: 'Bài 2: Phương pháp nghiên cứu & học tập môn Sinh học', sections: ['Mục II: Các kỹ năng trong tiến trình tìm hiểu thế giới sống'] }
  },
  {
    id: 'BIO10-M0-O05', topicId: 'bio10-t0', title: 'Tin sinh học và công cụ nghiên cứu',
    description: 'Nêu được vai trò khái quát của kính hiển vi, thiết bị phòng thí nghiệm và tin sinh học trong nghiên cứu sinh học.',
    scope: 'core', orderIndex: 5, questionTypeIds: ['bio10-qt13'], prerequisiteOutcomeIds: ['BIO10-M0-O03'], misconceptionIds: [],
    evidenceTypes: ['recognition', 'application'], estimatedMinutes: 20,
    textbook: { bookId: 'sgk-sinh-10', bookName: 'SGK Sinh học 10', pages: [14, 16, 17], lessonName: 'Bài 2: Phương pháp nghiên cứu & học tập môn Sinh học', sections: ['Mục III: Một số thiết bị nghiên cứu & Tin sinh học'] }
  },
  {
    id: 'BIO10-M0-O06', topicId: 'bio10-t0', title: 'Các cấp độ tổ chức của thế giới sống',
    description: 'Sắp xếp, phân biệt và giải thích được quan hệ giữa các cấp độ tổ chức sống cùng đặc tính nổi trội của cấp tổ chức cao hơn.',
    scope: 'core', orderIndex: 6, questionTypeIds: ['bio10-qt1'], prerequisiteOutcomeIds: [], misconceptionIds: ['BIO10-M0-M03'],
    evidenceTypes: ['recognition', 'representation', 'explanation'], estimatedMinutes: 40, isCritical: true,
    textbook: { bookId: 'sgk-sinh-10', bookName: 'SGK Sinh học 10', pages: [18, 19, 20, 21, 22], lessonName: 'Bài 3: Các cấp độ tổ chức của thế giới sống', sections: ['Mục I: Các cấp độ tổ chức thế giới sống', 'Mục II: Đặc điểm chung của các cấp độ tổ chức sống'] }
  }
];

export const g10BiologyModule0Misconceptions: LearningMisconception[] = [
  { id: 'BIO10-M0-M01', outcomeId: 'BIO10-M0-O01', statement: 'Sinh học chủ yếu là môn ghi nhớ tên gọi và phân loại sinh vật.', correction: 'Sinh học nghiên cứu cấu trúc, chức năng, cơ chế, quan hệ và sự biến đổi của thế giới sống bằng bằng chứng khoa học.', severity: 'critical' },
  { id: 'BIO10-M0-M02', outcomeId: 'BIO10-M0-O04', statement: 'Một kết quả phù hợp dự đoán là đủ để chứng minh giả thuyết luôn đúng.', correction: 'Kết quả chỉ hỗ trợ hoặc không hỗ trợ giả thuyết trong điều kiện khảo sát; cần kiểm soát biến, lặp lại và xem xét sai số.', severity: 'critical' },
  { id: 'BIO10-M0-M03', outcomeId: 'BIO10-M0-O06', statement: 'Phân tử hoặc bào quan là cấp tổ chức sống cơ bản nhất vì chúng nhỏ hơn tế bào.', correction: 'Tế bào là cấp tổ chức nhỏ nhất biểu hiện đầy đủ các đặc trưng cơ bản của sự sống.', severity: 'critical' }
];
