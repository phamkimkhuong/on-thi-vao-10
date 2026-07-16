import { QuestionType } from '@/types';

export const g10EnglishModule7QuestionTypes: QuestionType[] = [
  {
    id: "eng10-qt22",
    topicId: "eng10-t7",
    name: "So sánh hơn và so sánh nhất của tính từ",
    slug: "comparative-superlative-adjectives",
    description: "Làm chủ so sánh hơn, so sánh nhất, less, as...as và cấu trúc one of the trong ngữ cảnh hợp tác quốc tế.",
    exampleQuestionId: "eng10-q265",
    theory: [
      "**Tính từ ngắn**: $adj-er + than$; $the + adj-est$. **Tính từ dài**: $more/less + adj + than$; $the most/least + adj$.",
      "Bất quy tắc: *good → better → best; bad → worse → worst; far → farther/further → farthest/furthest*.",
      "Cấu trúc quan trọng: *as + adj + as; not as/so + adj + as; one of the + superlative + plural noun*."
    ],
    subTypes: [
      {
        name: "So sánh hơn",
        example: "Trade is (easy) easier than before.",
        note: "Có than → comparative."
      },
      {
        name: "So sánh nhất",
        example: "the (large) largest organisation",
        note: "Có phạm vi so sánh từ ba đối tượng."
      },
      {
        name: "Biến đổi tương đương",
        example: "No organisation is larger than X.",
        note: "X is the largest organisation."
      }
    ],
    recognitionSigns: [
      "Có than, in/of + phạm vi, one of the hoặc as...as.",
      "Các phương án khác nhau ở more/most, -er/-est hoặc dạng bất quy tắc."
    ],
    solvingSteps: [
      "Bước 1: Xác định so sánh hai đối tượng hay một đối tượng trong cả nhóm.",
      "Bước 2: Xác định tính từ ngắn, dài hoặc bất quy tắc.",
      "Bước 3: Lắp cấu trúc và kiểm tra than/the/danh từ số nhiều."
    ],
    commonMistakes: [
      "Dùng đồng thời more và đuôi -er.",
      "Quên the hoặc quên danh từ số nhiều sau one of the."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt23",
    topicId: "eng10-t7",
    name: "Từ vựng trọng tâm: International Organisations",
    slug: "vocabulary-international-organisations",
    description: "Từ vựng về thành viên, cam kết, đầu tư, thúc đẩy, hỗ trợ và hoạt động của các tổ chức quốc tế.",
    exampleQuestionId: "eng10-q277",
    theory: [
      "Từ lõi: *member, organisation, enter, promote, aim, commit, invest, support, peacekeeping, disadvantaged*.",
      "Collocation: *member of, aim to, commit to doing / be committed to doing, invest in, provide somebody with, promote growth*."
    ],
    subTypes: [
      {
        name: "Chọn từ theo ngữ cảnh",
        example: "The programme aims to support children.",
        note: "aim to + V."
      },
      {
        name: "Collocation và word family",
        example: "economic growth",
        note: "economy/economic/economically."
      }
    ],
    recognitionSigns: [
      "Câu nói về chức năng hoặc hoạt động của một tổ chức.",
      "Cần xét giới từ, từ loại và sắc thái của từ."
    ],
    solvingSteps: [
      "Bước 1: Xác định từ loại.",
      "Bước 2: Tìm giới từ hoặc danh từ đi kèm để nhận diện collocation.",
      "Bước 3: Kiểm tra nghĩa của cả câu."
    ],
    commonMistakes: [
      "Nhầm economic với economical.",
      "Dùng commit to + V nguyên mẫu thay vì V-ing."
    ],
    difficulty: "medium",
    examFrequency: "high"
  },
  {
    id: "eng10-qt24",
    topicId: "eng10-t7",
    name: "Trọng âm từ có hơn ba âm tiết",
    slug: "stress-words-more-than-three-syllables",
    description: "Nhận diện trọng âm chính của từ bốn âm tiết trở lên thường gặp trong Unit 7.",
    exampleQuestionId: "eng10-q289",
    theory: [
      "Các hậu tố như *-tion, -sion* thường khiến trọng âm rơi ngay trước hậu tố: *organisation, education*.",
      "Các hậu tố *-ity* thường khiến trọng âm rơi vào âm ngay trước hậu tố: *responsibility, opportunity*.",
      "Cần dựa vào phát âm thực tế; không xác định trọng âm bằng số chữ cái."
    ],
    subTypes: [
      {
        name: "Tìm từ có trọng âm khác",
        example: "international – organisation – responsibility – disadvantaged",
        note: "Đánh dấu âm chính rồi nhóm mẫu."
      }
    ],
    recognitionSigns: [
      "Các phương án có từ bốn âm tiết trở lên.",
      "Đề hỏi primary stress pattern."
    ],
    solvingSteps: [
      "Bước 1: Tách âm tiết.",
      "Bước 2: Nhận diện hậu tố ảnh hưởng trọng âm.",
      "Bước 3: Đánh dấu trọng âm và chọn từ khác nhóm."
    ],
    commonMistakes: [
      "Đếm chữ thay vì âm.",
      "Cho rằng mọi từ có cùng hậu tố đều có cùng số thứ tự âm nhấn tính từ đầu."
    ],
    difficulty: "medium",
    examFrequency: "medium"
  }
];
