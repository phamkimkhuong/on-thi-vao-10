import type { SurveyConfig } from '../types/surveyTypes';

export const UNIFIED_SURVEY: SurveyConfig = {
  id: 'unified_survey',
  title: 'Khảo sát Học tập & Góp ý 💬',
  subtitle: 'Dành 1 phút trả lời giúp app tối ưu lộ trình & giao diện tốt nhất cho bạn nhé!',
  questions: [
    {
      id: 'grade',
      title: 'Bạn đang học lớp mấy?',
      description: 'Chúng mình sẽ hiển thị đúng kiến thức theo lớp học của bạn',
      type: 'single_choice',
      options: [
        { id: 'grade9', label: 'Lớp 9', subLabel: 'Ôn thi vào 10 THPT', value: 'grade9' },
        { id: 'grade10', label: 'Lớp 10', subLabel: 'Chương trình GDPT mới', value: 'grade10' },
        { id: 'grade11', label: 'Lớp 11', subLabel: 'Chương trình GDPT mới', value: 'grade11' },
        { id: 'grade12', label: 'Lớp 12', subLabel: 'Ôn thi tốt nghiệp THPT & Đại học', value: 'grade12' },
      ],
    },
    {
      id: 'goal',
      title: 'Mục tiêu học tập lớn nhất của bạn là gì?',
      type: 'single_choice',
      options: (answers) => {
        if (answers.grade === 'grade12') {
          return [
            { id: 'university_exam', label: 'Ôn thi tốt nghiệp THPT & Đại học', subLabel: 'Mục tiêu đỗ nguyện vọng Đại học mong muốn', value: 'university_exam' },
            { id: 'assessment_exam', label: 'Luyện thi Đánh giá năng lực / Tư duy', subLabel: 'Chinh phục kỳ thi riêng ĐHQG / Bách Khoa', value: 'assessment_exam' },
            { id: 'gpa_score', label: 'Nâng điểm số & Học bạ trên lớp', subLabel: 'Củng cố kiến thức học kỳ & xét học bạ', value: 'gpa_score' },
            { id: 'test_prep', label: 'Luyện thi học sinh giỏi quốc gia / tỉnh', subLabel: 'Thách thức bản thân với dạng nâng cao', value: 'test_prep' },
          ];
        }
        if (answers.grade === 'grade10' || answers.grade === 'grade11') {
          return [
            { id: 'gpa_score', label: 'Nâng điểm số & Thi giữa kỳ/học kỳ', subLabel: 'Củng cố kiến thức lớp 10 - 11', value: 'gpa_score' },
            { id: 'university_prep', label: 'Chuẩn bị sớm cho kỳ thi THPT & ĐGNL', subLabel: 'Xây dựng nền tảng vững chắc từ sớm', value: 'university_prep' },
            { id: 'self_study', label: 'Tự học trước chương trình', subLabel: 'Chủ động học sớm kiến thức mới', value: 'self_study' },
            { id: 'test_prep', label: 'Luyện thi học sinh giỏi / Olympic', subLabel: 'Thách thức bản thân với dạng nâng cao', value: 'test_prep' },
          ];
        }
        return [
          { id: 'exam10', label: 'Ôn thi tuyển sinh vào lớp 10', subLabel: 'Mục tiêu đỗ trường THPT mong muốn', value: 'exam10' },
          { id: 'school_score', label: 'Nâng điểm số trên lớp', subLabel: 'Củng cố kiến thức thi giữa kỳ & học kỳ', value: 'school_score' },
          { id: 'self_study', label: 'Tự học trước chương trình', subLabel: 'Chủ động học sớm kiến thức mới', value: 'self_study' },
          { id: 'test_prep', label: 'Luyện thi học sinh giỏi / Trường chuyên', subLabel: 'Thách thức bản thân với dạng nâng cao', value: 'test_prep' },
        ];
      },
    },
    {
      id: 'preferredSubject',
      title: 'Môn học bạn muốn tập trung nhất lúc này?',
      type: 'single_choice',
      options: (answers) => {
        if (answers.grade === 'grade9') {
          return [
            { id: 'math', label: 'Toán học', icon: '📐', value: 'math' },
            { id: 'english', label: 'Tiếng Anh', icon: '🇬🇧', value: 'english' },
          ];
        }
        if (answers.grade === 'grade11') {
          return [
            { id: 'chemistry', label: 'Hóa học', icon: '🧪', value: 'chemistry' },
            { id: 'physics', label: 'Vật lý', icon: '⚡', value: 'physics' },
            { id: 'math', label: 'Toán học', icon: '📐', value: 'math' },
            { id: 'english', label: 'Tiếng Anh', icon: '🇬🇧', value: 'english' },
            { id: 'biology', label: 'Sinh học', icon: '🌱', value: 'biology' },
          ];
        }
        return [
          { id: 'math', label: 'Toán học', icon: '📐', value: 'math' },
          { id: 'english', label: 'Tiếng Anh', icon: '🇬🇧', value: 'english' },
          { id: 'chemistry', label: 'Hóa học', icon: '🧪', value: 'chemistry' },
          { id: 'physics', label: 'Vật lý', icon: '⚡', value: 'physics' },
          { id: 'biology', label: 'Sinh học', icon: '🌱', value: 'biology' },
        ];
      },
    },
    {
      id: 'uiRating',
      title: 'Bạn cảm thấy màu sắc & giao diện ứng dụng như thế nào?',
      description: 'Đánh giá mức độ hài lòng về thiết kế, màu sắc và trải nghiệm xem bài',
      type: 'emoji_scale',
    },
    {
      id: 'wishedFeatures',
      title: 'Bạn muốn app bổ sung thêm phần nào để có hứng thú học hơn?',
      description: 'Bạn có thể chọn nhiều đáp án',
      type: 'multi_choice',
      options: [
        { id: 'video', label: 'Video bài giảng ngắn', icon: '📺', value: 'video' },
        { id: 'battle', label: 'Thi đấu & Đấu trường kiến thức với bạn bè', icon: '🏆', value: 'battle' },
        { id: 'reminder', label: 'Lịch học tự động & Nhắc nhở thông minh', icon: '⏰', value: 'reminder' },
        { id: 'flashcard', label: 'Thẻ ghi nhớ Flashcard từ vựng / công thức', icon: '🃏', value: 'flashcard' },
        { id: 'advanced_bank', label: 'Ngân hàng đề thi thử các tỉnh / chuyên', icon: '📚', value: 'advanced_bank' },
        { id: 'other', label: 'Ý kiến khác...', subLabel: 'Gõ thêm mong muốn của bạn', icon: '💡', value: 'other', hasInput: true, inputPlaceholder: 'Nhập tính năng bạn muốn app bổ sung...' },
      ],
    },
    {
      id: 'studyHurdles',
      title: 'Bạn có đang phân vân không biết bắt đầu học từ đâu?',
      type: 'single_choice',
      options: [
        { id: 'confused', label: 'Có, mình chưa biết bắt đầu từ chương nào', icon: '🌀', value: 'confused' },
        { id: 'clear', label: 'Không, mình đã theo đúng Lộ trình Roadmap', icon: '🎯', value: 'clear' },
        { id: 'need_ai', label: 'Mình muốn AI Gia sư lập lộ trình cá nhân hóa giúp mình', icon: '🤖', value: 'need_ai' },
        { id: 'other', label: 'Ý kiến / Lý do khác...', icon: '💡', value: 'other', hasInput: true, inputPlaceholder: 'Chia sẻ ngắn gọn vướng mắc của bạn...' },
      ],
    },
    {
      id: 'npsScore',
      title: 'Bạn có sẵn sàng giới thiệu ứng dụng này cho bạn bè không?',
      description: 'Thang đo từ 0 (Không bao giờ) đến 10 (Rất sẵn sàng)',
      type: 'nps',
    },
    {
      id: 'additionalComments',
      title: 'Góp ý hoặc mong muốn khác của bạn với nhóm phát triển',
      type: 'free_text',
      placeholder: 'Nhập ý kiến của bạn tại đây (không bắt buộc)...',
      isOptional: true,
    },
  ],
};
