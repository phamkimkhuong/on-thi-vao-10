import { Solution } from '@/types';

export const g10BiologyModule4Solutions: Solution[] = [
  {
    id: "bio10-s5",
    questionId: "bio10-q5",
    recognition: "Ảnh hưởng của nhiệt độ cao lên cấu trúc protein của enzyme.",
    detailedSteps: [
      {
        order: 1,
        title: "Dấu hiệu nhận dạng dạng bài",
        explanation: "Cụm 'quá cao so với tối ưu' cho biết không còn xét hiệu ứng tăng va chạm mà xét sự thay đổi cấu trúc protein của enzyme."
      },
      {
        order: 2,
        title: "Phân tích và lựa chọn phương án đúng",
        explanation: "Enzyme có bản chất là protein. Ở nhiệt độ quá cao, cấu trúc không gian 3 chiều của protein bị phá hủy (biến tính), làm biến đổi trung tâm hoạt động khiến cơ chất không liên kết được nữa. Chọn đáp án B."
      }
    ],
    finalAnswer: "B",
    commonMistakes: [
      "Chọn phương án đứt hoàn toàn liên kết peptide; biến tính thường phá vỡ các tương tác duy trì cấu trúc không gian trước khi thủy phân mạch polypeptide."
    ],
    reviewSuggestions: [
      "Ôn BIO10-M4-O03 và BIO10-M1-O05: đường cong nhiệt độ–hoạt tính và biến tính protein."
    ]
  }
];
