import type { QuestionTypePracticeBlueprint, QuestionTypePracticeCoverage } from '@/types';

const standardCoverage: Omit<QuestionTypePracticeCoverage, 'targetQuestionCount' | 'requiredRepresentations'> = {
  minimumQuestionsPerSubType: 12,
  requiredPracticeRoles: ['guided', 'near_transfer', 'representation_switch', 'misconception_check', 'far_transfer', 'retention', 'mastery_holdout'],
  masteryHoldoutCount: 2
};

export const g10BiologyModule6PracticeBlueprints: QuestionTypePracticeBlueprint[] = [
  {
    questionTypeId: 'bio10-qt7',
    subTypes: [
      { id: 'bio10-qt7-st1', name: 'Khái niệm và nhóm vi sinh vật', example: 'Nhận diện vi sinh vật nhân sơ, nhân thực hoặc sinh vật không có cấu tạo tế bào.', recognitionSigns: ['Đề hỏi đặc điểm chung hoặc phân loại nhóm vi sinh vật.', 'Cần tách kích thước, kiểu tế bào và lối sống; không đồng nhất vi sinh vật với vi khuẩn.'], targetQuestionCount: 12 },
      { id: 'bio10-qt7-st2', name: 'Nguồn năng lượng và nguồn carbon', example: 'Xác định quang tự dưỡng, hóa tự dưỡng, quang dị dưỡng hoặc hóa dị dưỡng.', recognitionSigns: ['Đề cho nguồn năng lượng và nguồn carbon.', 'Luôn phân loại theo hai trục độc lập trước khi gọi tên kiểu dinh dưỡng.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 24, requiredRepresentations: ['text', 'table'] }
  },
  {
    questionTypeId: 'bio10-qt39',
    subTypes: [
      { id: 'bio10-qt39-st1', name: 'Vô trùng, môi trường và đối chứng', example: 'Chọn thao tác vô trùng hoặc đối chứng phát hiện tạp nhiễm.', recognitionSigns: ['Đề nhắc khử trùng, môi trường nuôi hoặc đĩa đối chứng.', 'Xác định nguồn tạp nhiễm và biến cần được kiểm soát.'], targetQuestionCount: 12 },
      { id: 'bio10-qt39-st2', name: 'Phân lập và nhận diện', example: 'Giải thích cấy ria, khuẩn lạc riêng hoặc nhuộm quan sát.', recognitionSigns: ['Đề nhắc cấy ria, dòng thuần, khuẩn lạc hoặc kính hiển vi.', 'Phân biệt quan sát hình thái với khẳng định định danh loài.'], targetQuestionCount: 12 },
      { id: 'bio10-qt39-st3', name: 'Pha loãng và định lượng CFU', example: 'Tính CFU/mL từ số khuẩn lạc, thể tích cấy và độ pha loãng.', recognitionSigns: ['Đề có số khuẩn lạc, thể tích và hệ số pha loãng.', 'Phải quy đổi về mẫu gốc và nêu giới hạn CFU không luôn bằng số tế bào.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 36, requiredRepresentations: ['text', 'table', 'experiment'] }
  },
  {
    questionTypeId: 'bio10-qt40',
    subTypes: [
      { id: 'bio10-qt40-st1', name: 'Tổng hợp và phân giải ở vi sinh vật', example: 'Giải thích vai trò ngoại enzyme hoặc sản phẩm chuyển hóa.', recognitionSigns: ['Đề nhắc enzyme ngoại bào, polymer, đồng hóa hoặc dị hóa.', 'Theo dõi cơ chất, sản phẩm và nơi diễn ra quá trình.'], targetQuestionCount: 12 },
      { id: 'bio10-qt40-st2', name: 'Đường cong sinh trưởng quần thể', example: 'Nhận diện pha tiềm phát, lũy thừa, cân bằng, suy vong hoặc tính số tế bào.', recognitionSigns: ['Đề cho thời gian, số thế hệ hoặc đồ thị bốn pha.', 'Phân biệt tốc độ sinh, tốc độ chết và số lượng quan sát.'], targetQuestionCount: 12 },
      { id: 'bio10-qt40-st3', name: 'Các hình thức sinh sản', example: 'Phân biệt phân đôi của vi khuẩn và nảy chồi của nấm men.', recognitionSigns: ['Đề hỏi cơ chế tạo tế bào mới ở nhóm vi sinh vật.', 'Không gán nguyên phân có thoi cho vi khuẩn.'], targetQuestionCount: 12 },
      { id: 'bio10-qt40-st4', name: 'Yếu tố môi trường, kháng sinh và kháng thuốc', example: 'Giải thích bảo quản lạnh hoặc chọn lọc vi khuẩn kháng thuốc.', recognitionSigns: ['Đề nhắc nhiệt độ, pH, chất khử khuẩn, kháng sinh hoặc chọn lọc.', 'Tách tác động làm chậm sinh trưởng khỏi tiêu diệt hoàn toàn.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 48, requiredRepresentations: ['text', 'graph', 'experiment'] }
  },
  {
    questionTypeId: 'bio10-qt41',
    subTypes: [
      { id: 'bio10-qt41-st1', name: 'Ứng dụng công nghệ vi sinh vật', example: 'Nối vi sinh vật và sản phẩm trong thực phẩm, môi trường, nông nghiệp hoặc dược phẩm.', recognitionSigns: ['Đề yêu cầu nối chủng/cơ chất/sản phẩm với ứng dụng.', 'Đánh giá đồng thời hiệu quả, tính chọn lọc và điều kiện quy trình.'], targetQuestionCount: 12 },
      { id: 'bio10-qt41-st2', name: 'Thiết kế và đánh giá dự án lên men', example: 'Chọn đối chứng, biến theo dõi và tiêu chí an toàn cho mẻ lên men.', recognitionSigns: ['Đề có mẻ đối chứng, nhiệt độ, thời gian, pH hoặc dấu hiệu hỏng.', 'Cần tách biến thay đổi, biến đo, điều kiện kiểm soát và ngưỡng an toàn.'], targetQuestionCount: 12 }
    ],
    coverage: { ...standardCoverage, targetQuestionCount: 24, requiredRepresentations: ['text', 'table', 'experiment'] }
  }
];
