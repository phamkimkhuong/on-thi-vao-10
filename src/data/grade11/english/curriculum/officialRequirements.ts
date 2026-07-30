import type { OfficialRequirement } from '@/data/schema';

const requirements = [
  {
    title: 'A Long and Healthy Life',
    requirement: 'Sử dụng từ vựng sức khỏe; phân biệt quá khứ đơn với hiện tại hoàn thành; nhận biết dạng mạnh/yếu của trợ động từ; đọc và viết về lối sống lành mạnh.'
  },
  {
    title: 'The Generation Gap',
    requirement: 'Sử dụng từ vựng về khác biệt thế hệ; dùng must, have to và should đúng sắc thái; nhận biết dạng rút gọn; đọc và viết về quan hệ gia đình.'
  },
  {
    title: 'Cities of the Future',
    requirement: 'Sử dụng từ vựng đô thị thông minh; dùng động từ trạng thái ở dạng tiếp diễn và động từ nối; nhận biết nối phụ âm-nguyên âm.'
  },
  {
    title: 'ASEAN and Viet Nam',
    requirement: 'Sử dụng từ vựng về ASEAN và Việt Nam; dùng danh động từ làm chủ ngữ, tân ngữ; nhận biết hiện tượng nuốt nguyên âm.'
  },
  {
    title: 'Global Warming',
    requirement: 'Sử dụng từ vựng về nóng lên toàn cầu; dùng mệnh đề phân từ hiện tại và quá khứ; vận dụng trọng âm câu và nhịp điệu.'
  },
  {
    title: 'Preserving Our Heritage',
    requirement: 'Sử dụng từ vựng bảo tồn di sản; dùng mệnh đề nguyên thể có to; nhận biết ngữ điệu trong câu kể, mệnh lệnh và danh sách.'
  },
  {
    title: 'Education Options for School-Leavers',
    requirement: 'Sử dụng từ vựng về lựa chọn sau phổ thông; dùng danh động từ hoàn thành và phân từ hoàn thành; vận dụng ngữ điệu câu hỏi.'
  },
  {
    title: 'Becoming Independent',
    requirement: 'Sử dụng từ vựng về cuộc sống tự lập; dùng câu chẻ; nhận biết ngữ điệu trong lời mời, đề nghị và yêu cầu.'
  },
  {
    title: 'Social Issues',
    requirement: 'Sử dụng từ vựng về vấn đề xã hội; liên kết ý bằng từ và cụm từ nối; nhận biết ngữ điệu câu hỏi lựa chọn.'
  },
  {
    title: 'The Ecosystem',
    requirement: 'Sử dụng từ vựng về hệ sinh thái; cấu tạo và dùng danh từ ghép; nhận biết ngữ điệu câu hỏi đuôi.'
  }
] as const;

const implementedOutcomesByUnit: Record<number, string[]> = {
  1: [
    'eng11-out-u1-pronunciation',
    'eng11-out-u1-vocabulary',
    'eng11-out-u1-grammar',
    'eng11-out-u1-reading',
    'eng11-out-u1-writing',
    'eng11-out-u1-communication'
  ],
  2: [
    'eng11-out-u2-pronunciation',
    'eng11-out-u2-vocabulary',
    'eng11-out-u2-grammar',
    'eng11-out-u2-reading',
    'eng11-out-u2-writing',
    'eng11-out-u2-communication'
  ],
  3: [
    'eng11-out-u3-pronunciation',
    'eng11-out-u3-vocabulary',
    'eng11-out-u3-grammar',
    'eng11-out-u3-reading',
    'eng11-out-u3-writing',
    'eng11-out-u3-communication'
  ],
  4: [
    'eng11-out-u4-pronunciation',
    'eng11-out-u4-vocabulary',
    'eng11-out-u4-grammar',
    'eng11-out-u4-reading',
    'eng11-out-u4-writing',
    'eng11-out-u4-communication'
  ],
  5: [
    'eng11-out-u5-pronunciation',
    'eng11-out-u5-vocabulary',
    'eng11-out-u5-grammar',
    'eng11-out-u5-reading',
    'eng11-out-u5-writing',
    'eng11-out-u5-communication'
  ],
  6: [
    'eng11-out-u6-pronunciation',
    'eng11-out-u6-vocabulary',
    'eng11-out-u6-grammar',
    'eng11-out-u6-reading',
    'eng11-out-u6-writing',
    'eng11-out-u6-communication'
  ],
  7: [
    'eng11-out-u7-pronunciation',
    'eng11-out-u7-vocabulary',
    'eng11-out-u7-grammar',
    'eng11-out-u7-reading',
    'eng11-out-u7-writing',
    'eng11-out-u7-communication'
  ],
  8: [
    'eng11-out-u8-pronunciation',
    'eng11-out-u8-vocabulary',
    'eng11-out-u8-grammar',
    'eng11-out-u8-reading',
    'eng11-out-u8-writing',
    'eng11-out-u8-communication'
  ],
  9: [
    'eng11-out-u9-pronunciation',
    'eng11-out-u9-vocabulary',
    'eng11-out-u9-grammar',
    'eng11-out-u9-reading',
    'eng11-out-u9-writing',
    'eng11-out-u9-communication'
  ],
  10: [
    'eng11-out-u10-pronunciation',
    'eng11-out-u10-vocabulary',
    'eng11-out-u10-grammar',
    'eng11-out-u10-reading',
    'eng11-out-u10-writing',
    'eng11-out-u10-communication'
  ]
};

export const g11EnglishOfficialRequirements: OfficialRequirement[] =
  requirements.map((item, index) => {
    const unitNumber = index + 1;
    const lessonIds = [
      `eng11-u${unitNumber}-getting-started`,
      `eng11-u${unitNumber}-language`,
      `eng11-u${unitNumber}-reading`,
      `eng11-u${unitNumber}-speaking`,
      `eng11-u${unitNumber}-listening`,
      `eng11-u${unitNumber}-writing`,
      `eng11-u${unitNumber}-communication-culture`,
      `eng11-u${unitNumber}-looking-back-project`
    ];
    if ([3, 5, 8, 10].includes(unitNumber)) {
      lessonIds.push(`eng11-review-${[3, 5, 8, 10].indexOf(unitNumber) + 1}`);
    }
    const implementedOutcomeIds = implementedOutcomesByUnit[unitNumber] ?? [];

    return {
      id: `eng11-req-u${unitNumber}`,
      courseId: 'grade11:english',
      moduleId: `eng11-m${unitNumber}`,
      lessonIds,
      title: `Unit ${unitNumber}: ${item.title}`,
      normalizedRequirement: item.requirement,
      actionVerbs: ['nhận biết', 'hiểu', 'vận dụng', 'đọc hiểu', 'viết'],
      evidenceTypes: ['recognition', 'explanation', 'application'],
      sourceLocators: [
        `Chương trình GDPT môn Tiếng Anh — yêu cầu lớp 11`,
        `Tiếng Anh 11 Global Success — Unit ${unitNumber}`
      ],
      implementedOutcomeIds,
      coverageStatus: implementedOutcomeIds.length > 0 ? 'partial' : 'not_started',
      coverageNotes:
        unitNumber <= 10
          ? 'Đã triển khai kiến thức ngôn ngữ, đọc hiểu, viết gián tiếp và giao tiếp. Listening được tách sang chuyên đề mở rộng; Speaking không phát hành do nền tảng chưa có cơ chế chấm.'
          : 'Đã lập bản đồ chương trình; chưa triển khai dữ liệu runtime.',
      reviewStatus: unitNumber <= 10 ? 'source_checked' : 'draft'
    };
  });
