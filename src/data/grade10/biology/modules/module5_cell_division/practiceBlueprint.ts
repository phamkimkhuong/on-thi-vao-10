import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10BiologyModule5PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'bio10-qt6',
    subTypes: [
      { id: 'bio10-qt6-st1', name: 'Chu kì và điểm kiểm soát', example: 'Xác định pha S hoặc hệ quả khi điểm kiểm soát không hoạt động.', recognitionSigns: ['Đề nhắc pha G1, S, G2, M hoặc điểm kiểm soát.', 'Cần theo dõi trạng thái DNA và điều kiện để tế bào đi tiếp.'], targetQuestionCount: 12 },
      { id: 'bio10-qt6-st2', name: 'Nhận diện các kì nguyên phân', example: 'Nhận diện kì giữa, kì sau từ vị trí nhiễm sắc thể và thoi phân bào.', recognitionSigns: ['Dữ kiện mô tả mức co xoắn, mặt phẳng xích đạo hoặc sự phân li.', 'Cần đặt sự kiện vào đúng trình tự nguyên phân.'], targetQuestionCount: 12 },
      { id: 'bio10-qt6-st3', name: 'Số tế bào, NST, chromatid và DNA', example: 'Tính số tế bào con hoặc số NST/chromatid qua nguyên phân.', recognitionSigns: ['Đề cho 2n, số lần phân bào hoặc thời điểm trước/sau nhân đôi.', 'Phải phân biệt số NST theo tâm động với lượng DNA.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'diagram', 'table'] }
  },
  {
    questionTypeId: 'bio10-qt36',
    subTypes: [
      { id: 'bio10-qt36-st1', name: 'Cơ chế mất kiểm soát và ung thư', example: 'Suy luận hậu quả khi gene kiểm soát hoặc apoptosis bị bất hoạt.', recognitionSigns: ['Đề nhắc tăng sinh, sửa chữa DNA, apoptosis hoặc di căn.', 'Cần lần theo cơ chế từ sai hỏng phân tử tới tăng sinh tế bào.'], targetQuestionCount: 12 },
      { id: 'bio10-qt36-st2', name: 'Nguy cơ, bằng chứng và điều trị', example: 'Đánh giá dữ liệu nguy cơ hoặc lựa chọn điều trị đích phù hợp.', recognitionSigns: ['Đề cho số liệu dịch tễ, yếu tố nguy cơ hoặc đích phân tử.', 'Không biến tương quan thành quan hệ nhân quả tuyệt đối.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 24, requiredRepresentations: ['text', 'table', 'graph'] }
  },
  {
    questionTypeId: 'bio10-qt37',
    subTypes: [
      { id: 'bio10-qt37-st1', name: 'Diễn biến giảm phân', example: 'Nhận diện tiếp hợp, phân li NST tương đồng hoặc chromatid chị em.', recognitionSigns: ['Đề nhắc giảm phân I, giảm phân II, tiếp hợp hoặc trao đổi chéo.', 'Cần xác định cấu trúc nào phân li ở từng lần phân bào.'], targetQuestionCount: 12 },
      { id: 'bio10-qt37-st2', name: 'Tính số lượng và không phân li', example: 'Tính số NST sau giảm phân I hoặc dự đoán giao tử do không phân li.', recognitionSigns: ['Đề cho 2n, số cặp NST hoặc vị trí xảy ra không phân li.', 'Theo dõi riêng bộ NST, trạng thái kép/đơn và số tế bào.'], targetQuestionCount: 12 },
      { id: 'bio10-qt37-st3', name: 'So sánh và nguồn biến dị tổ hợp', example: 'Giải thích biến dị do phân li độc lập, trao đổi chéo và thụ tinh.', recognitionSigns: ['Đề yêu cầu so sánh nguyên phân–giảm phân hoặc giải thích đa dạng di truyền.', 'Phải nối cơ chế tế bào với kết quả di truyền.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'diagram', 'table'] }
  },
  {
    questionTypeId: 'bio10-qt38',
    subTypes: [
      { id: 'bio10-qt38-st1', name: 'Quan sát và định lượng phân bào', example: 'Nhận diện kì trên ảnh hoặc tính chỉ số phân bào.', recognitionSigns: ['Đề cho ảnh/tiêu bản hoặc số tế bào ở từng trạng thái.', 'Cần dựa vào dấu hiệu NST và mẫu số tổng tế bào quan sát.'], targetQuestionCount: 12 },
      { id: 'bio10-qt38-st2', name: 'Tính toàn năng và nuôi cấy mô', example: 'Chọn điều kiện giúp callus biệt hóa hoặc đánh giá cây nuôi cấy mô.', recognitionSigns: ['Đề nhắc callus, môi trường vô trùng, hormone hoặc nhân giống.', 'Cần nối tính toàn năng với điều kiện biểu hiện trong nuôi cấy.'], targetQuestionCount: 12 },
      { id: 'bio10-qt38-st3', name: 'Chuyển nhân, tế bào gốc và đạo đức', example: 'Đánh giá bằng chứng chuyển nhân hoặc ứng dụng tế bào gốc.', recognitionSigns: ['Đề nhắc nhân soma, trứng bỏ nhân, tế bào gốc hoặc cân nhắc đạo đức.', 'Phân biệt tiềm năng công nghệ với bằng chứng an toàn và hiệu quả.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'diagram', 'experiment'] }
  }
];
