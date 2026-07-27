import type { OfficialRequirement } from '@/data/schema';

const requirement = (
  id: string,
  moduleId: string,
  lessonIds: string[],
  title: string,
  normalizedRequirement: string,
  actionVerbs: string[],
  evidenceTypes: OfficialRequirement['evidenceTypes'],
  implementedOutcomeIds: string[] = [],
  coverageStatus: OfficialRequirement['coverageStatus'] = 'not_started'
): OfficialRequirement => ({
  id,
  courseId: 'grade11:math',
  moduleId,
  lessonIds,
  title,
  normalizedRequirement,
  actionVerbs,
  evidenceTypes,
  sourceLocators: [
    `Tài liệu hướng dẫn Toán 11 của Bộ GDĐT → ${title}`
  ],
  implementedOutcomeIds,
  coverageStatus,
  coverageNotes:
    coverageStatus === 'not_started'
      ? 'Đã khóa phạm vi chương trình; module nội dung sẽ được triển khai ở đợt sau.'
      : undefined,
  reviewStatus: 'source_checked'
});

export const g11MathOfficialRequirements: OfficialRequirement[] = [
  requirement(
    'math11-official-ch1-angle-values',
    'math11-m1',
    ['math11-kntt-l1'],
    'Góc lượng giác và giá trị lượng giác',
    'Nhận biết góc lượng giác, số đo, hệ thức Chasles và đường tròn lượng giác; tính và sử dụng các giá trị lượng giác cùng các hệ thức cơ bản.',
    ['nhận biết', 'mô tả', 'tính', 'sử dụng'],
    ['recognition', 'representation', 'calculation'],
    ['out-math11-m1-01'],
    'covered'
  ),
  requirement(
    'math11-official-ch1-transformations',
    'math11-m1',
    ['math11-kntt-l2'],
    'Các phép biến đổi lượng giác',
    'Mô tả và vận dụng công thức cộng, công thức góc nhân đôi, công thức biến đổi tích thành tổng và tổng thành tích; giải quyết tình huống thực tiễn phù hợp.',
    ['mô tả', 'vận dụng', 'giải quyết'],
    ['calculation', 'explanation', 'application'],
    ['out-math11-m1-02'],
    'covered'
  ),
  requirement(
    'math11-official-ch1-functions',
    'math11-m1',
    ['math11-kntt-l3'],
    'Hàm số lượng giác và đồ thị',
    'Nhận biết hàm chẵn, hàm lẻ, hàm tuần hoàn; mô tả, vẽ và khai thác đồ thị của bốn hàm số lượng giác để giải thích tập xác định, tập giá trị, tính chẵn lẻ, chu kì và tính đơn điệu.',
    ['nhận biết', 'mô tả', 'vẽ', 'giải thích'],
    ['recognition', 'representation', 'explanation', 'application'],
    ['out-math11-m1-03'],
    'covered'
  ),
  requirement(
    'math11-official-ch1-equations',
    'math11-m1',
    ['math11-kntt-l4'],
    'Phương trình lượng giác cơ bản',
    'Nhận biết công thức nghiệm của bốn phương trình lượng giác cơ bản; tính nghiệm gần đúng bằng máy tính cầm tay và giải các phương trình vận dụng trực tiếp dạng cơ bản.',
    ['nhận biết', 'tính', 'giải'],
    ['representation', 'calculation', 'application'],
    ['out-math11-m1-04'],
    'covered'
  ),
  requirement(
    'math11-official-ch2-sequences',
    'math11-m2',
    ['math11-kntt-l5'],
    'Dãy số',
    'Nhận biết dãy hữu hạn, dãy vô hạn và các cách cho dãy; tính số hạng từ công thức hoặc truy hồi, nhận biết tính tăng, giảm và bị chặn trong trường hợp cơ bản.',
    ['nhận biết', 'biểu diễn', 'tính', 'giải thích'],
    ['recognition', 'representation', 'calculation', 'explanation'],
    ['out-math11-m2-01'],
    'covered'
  ),
  requirement(
    'math11-official-ch2-arithmetic',
    'math11-m2',
    ['math11-kntt-l6'],
    'Cấp số cộng',
    'Nhận biết cấp số cộng; tính công sai, số hạng tổng quát và tổng hữu hạn; vận dụng cấp số cộng để giải quyết bài toán thực tiễn có đại lượng thay đổi đều.',
    ['nhận biết', 'tính', 'vận dụng', 'giải quyết'],
    ['recognition', 'calculation', 'application'],
    ['out-math11-m2-02'],
    'covered'
  ),
  requirement(
    'math11-official-ch2-geometric',
    'math11-m2',
    ['math11-kntt-l7'],
    'Cấp số nhân',
    'Nhận biết cấp số nhân; tính công bội, số hạng tổng quát và tổng hữu hạn; vận dụng cấp số nhân để giải quyết bài toán thực tiễn có đại lượng thay đổi theo tỉ lệ.',
    ['nhận biết', 'tính', 'vận dụng', 'giải quyết'],
    ['recognition', 'calculation', 'application'],
    ['out-math11-m2-03'],
    'covered'
  ),
  requirement(
    'math11-official-ch3-grouped-data',
    'math11-m3',
    ['math11-kntt-l8'],
    'Mẫu số liệu ghép nhóm',
    'Nhận biết, lập và đọc mẫu số liệu ghép nhóm; xác định tần số, tần số tương đối, độ dài nhóm và giá trị đại diện.',
    ['nhận biết', 'lập', 'đọc', 'biểu diễn'],
    ['recognition', 'representation', 'data', 'calculation'],
    ['out-math11-m3-01'],
    'covered'
  ),
  requirement(
    'math11-official-ch3-central-tendency',
    'math11-m3',
    ['math11-kntt-l9'],
    'Các số đặc trưng của mẫu số liệu ghép nhóm',
    'Tính và giải thích số trung bình, trung vị, tứ phân vị và mốt của mẫu số liệu ghép nhóm trong các tình huống thực tiễn.',
    ['tính', 'giải thích', 'phân tích', 'vận dụng'],
    ['data', 'calculation', 'explanation', 'application'],
    ['out-math11-m3-02'],
    'covered'
  ),
  requirement(
    'math11-official-ch4-incidence',
    'math11-m4',
    ['math11-kntt-l10'],
    'Đường thẳng và mặt phẳng trong không gian',
    'Nhận biết quan hệ liên thuộc; mô tả ba cách xác định mặt phẳng; tìm giao điểm, giao tuyến; nhận biết hình chóp và tứ diện.',
    ['nhận biết', 'mô tả', 'xác định', 'vận dụng'],
    ['recognition', 'representation', 'explanation'],
    ['out-math11-m4-01'],
    'covered'
  ),
  requirement(
    'math11-official-ch4-parallel-lines',
    'math11-m4',
    ['math11-kntt-l11'],
    'Hai đường thẳng song song',
    'Nhận biết vị trí tương đối của hai đường thẳng; mô tả tính chất cơ bản và vận dụng quan hệ song song trong không gian.',
    ['nhận biết', 'mô tả', 'giải thích', 'vận dụng'],
    ['recognition', 'representation', 'explanation'],
    ['out-math11-m4-02'],
    'covered'
  ),
  requirement(
    'math11-official-ch4-line-plane',
    'math11-m4',
    ['math11-kntt-l12'],
    'Đường thẳng song song với mặt phẳng',
    'Nhận biết, giải thích điều kiện và tính chất cơ bản của đường thẳng song song với mặt phẳng; mô tả các hình ảnh thực tiễn liên quan.',
    ['nhận biết', 'giải thích', 'chứng minh', 'mô tả'],
    ['recognition', 'representation', 'explanation', 'application'],
    ['out-math11-m4-03'],
    'covered'
  ),
  requirement(
    'math11-official-ch4-parallel-planes',
    'math11-m4',
    ['math11-kntt-l13'],
    'Hai mặt phẳng song song',
    'Nhận biết, giải thích điều kiện và tính chất hai mặt phẳng song song; giải thích định lí Thalès và tính chất lăng trụ, hình hộp.',
    ['nhận biết', 'giải thích', 'chứng minh', 'vận dụng'],
    ['recognition', 'representation', 'calculation', 'explanation', 'application'],
    ['out-math11-m4-04'],
    'covered'
  ),
  requirement(
    'math11-official-ch4-projection',
    'math11-m4',
    ['math11-kntt-l14'],
    'Phép chiếu song song',
    'Nhận biết khái niệm, tính chất và ảnh qua phép chiếu song song; mô tả hình biểu diễn của một số hình khối và hình ảnh thực tiễn.',
    ['nhận biết', 'xác định', 'mô tả', 'sử dụng'],
    ['recognition', 'representation', 'explanation', 'application'],
    ['out-math11-m4-05'],
    'covered'
  ),
  requirement(
    'math11-official-ch5-limits',
    'math11-m5',
    ['math11-kntt-l15'],'Giới hạn của dãy số',
    'Nhận biết và tính giới hạn hữu hạn, giới hạn vô cực của dãy số; vận dụng tổng cấp số nhân lùi vô hạn.',
    ['nhận biết','tính','mô tả','vận dụng'],['recognition','representation','calculation','application'],
    ['out-math11-m5-01'],'covered'
  ),
  requirement(
    'math11-official-ch5-function-limits','math11-m5',['math11-kntt-l16'],'Giới hạn của hàm số',
    'Nhận biết giới hạn hữu hạn tại điểm, một phía, tại vô cực và giới hạn vô cực; tính giới hạn bằng các phép toán cơ bản.',
    ['nhận biết','tính','mô tả','vận dụng'],['recognition','representation','calculation','application'],
    ['out-math11-m5-02'],'covered'
  ),
  requirement(
    'math11-official-ch5-continuity','math11-m5',['math11-kntt-l17'],'Hàm số liên tục',
    'Nhận dạng hàm liên tục tại điểm, trên khoảng hoặc đoạn; nhận biết tính liên tục của phép toán và các hàm sơ cấp trên tập xác định.',
    ['nhận dạng','nhận biết','giải thích'],['recognition','representation','calculation','explanation'],
    ['out-math11-m5-03'],'covered'
  ),
  requirement(
    'math11-official-ch6-exponential-logarithmic',
    'math11-m6',
    ['math11-kntt-l18'],'Lũy thừa với số mũ thực',
    'Nhận biết lũy thừa số mũ nguyên, hữu tỉ, thực; vận dụng tính chất trong tính toán và tình huống thực tiễn.',
    ['nhận biết','tính','sử dụng','giải quyết'],['recognition','calculation','application'],
    ['out-math11-m6-01'],'covered'
  ),
  requirement(
    'math11-official-ch6-logarithms','math11-m6',['math11-kntt-l19'],'Lôgarit',
    'Nhận biết định nghĩa và điều kiện; giải thích, sử dụng các tính chất và đổi cơ số trong tính toán, ứng dụng.',
    ['nhận biết','giải thích','tính','mô tả'],['recognition','calculation','explanation','application'],
    ['out-math11-m6-02'],'covered'
  ),
  requirement(
    'math11-official-ch6-functions','math11-m6',['math11-kntt-l20'],'Hàm số mũ và hàm số lôgarit',
    'Nhận biết, nhận dạng đồ thị và tính chất; giải quyết vấn đề thực tiễn về lãi suất, tăng trưởng và phân rã.',
    ['nhận biết','nhận dạng','giải thích','giải quyết'],['recognition','representation','explanation','application'],
    ['out-math11-m6-03'],'covered'
  ),
  requirement(
    'math11-official-ch6-equations','math11-m6',['math11-kntt-l21'],'Phương trình, bất phương trình mũ và lôgarit',
    'Giải phương trình, bất phương trình mũ và lôgarit dạng cơ bản hoặc đưa về cùng cơ số; mô tả bài toán thực tiễn phù hợp.',
    ['giải','mô tả','vận dụng'],['representation','calculation','application'],
    ['out-math11-m6-04'],'covered'
  ),
  requirement(
    'math11-official-ch7-perpendicularity',
    'math11-m7',
    ['math11-kntt-l22'],'Góc giữa hai đường thẳng',
    'Nhận biết, tính góc giữa hai đường và chứng minh hai đường vuông góc trong trường hợp đơn giản.',
    ['nhận biết','tính','chứng minh','mô tả'],['recognition','representation','calculation','explanation'],
    ['out-math11-m7-01'],'covered'
  ),
  requirement(
    'math11-official-ch7-line-plane','math11-m7',['math11-kntt-l23'],'Đường thẳng vuông góc với mặt phẳng',
    'Nhận biết điều kiện, giải thích tính chất, định lí ba đường vuông góc và mối liên hệ song song–vuông góc.',
    ['nhận biết','giải thích','chứng minh','vận dụng'],['recognition','representation','explanation','application'],
    ['out-math11-m7-02'],'covered'
  ),
  requirement(
    'math11-official-ch7-projection-angle','math11-m7',['math11-kntt-l24'],'Phép chiếu vuông góc và góc',
    'Nhận biết hình chiếu vuông góc; xác định, tính góc đường–mặt, góc nhị diện và góc phẳng nhị diện.',
    ['nhận biết','xác định','tính'],['recognition','representation','calculation','application'],
    ['out-math11-m7-03'],'covered'
  ),
  requirement(
    'math11-official-ch7-planes','math11-m7',['math11-kntt-l25'],'Hai mặt phẳng vuông góc',
    'Nhận biết, mô tả điều kiện và tính chất hai mặt phẳng vuông góc; giải thích tính chất các hình khối đứng, đều.',
    ['nhận biết','mô tả','giải thích','vận dụng'],['recognition','representation','explanation','application'],
    ['out-math11-m7-04'],'covered'
  ),
  requirement(
    'math11-official-ch7-distances','math11-m7',['math11-kntt-l26'],'Khoảng cách trong không gian',
    'Xác định và tính các khoảng cách cơ bản, đường vuông góc chung của hai đường chéo nhau trong trường hợp đơn giản.',
    ['xác định','nhận biết','tính','mô tả'],['recognition','representation','calculation','application'],
    ['out-math11-m7-05'],'covered'
  ),
  requirement(
    'math11-official-ch7-volumes','math11-m7',['math11-kntt-l27'],'Thể tích',
    'Nhận biết công thức và tính thể tích hình chóp, lăng trụ, hình hộp trong trường hợp đơn giản.',
    ['nhận biết','tính','vận dụng'],['representation','calculation','application'],
    ['out-math11-m7-06'],'covered'
  ),
  requirement(
    'math11-official-ch8-probability-rules',
    'math11-m8',
    ['math11-kntt-l28'],'Biến cố hợp, giao và độc lập',
    'Nhận biết hợp, giao của biến cố, biến cố đối, xung khắc và biến cố độc lập.',
    ['nhận biết','mô tả','phân biệt'],['recognition','representation','explanation'],
    ['out-math11-m8-01'],'covered'
  ),
  requirement(
    'math11-official-ch8-addition','math11-m8',['math11-kntt-l29'],'Công thức cộng xác suất',
    'Tính xác suất biến cố hợp bằng công thức cộng; vận dụng biến cố đối và phương pháp tổ hợp trong bài toán đơn giản.',
    ['tính','vận dụng','giải quyết'],['representation','calculation','application'],
    ['out-math11-m8-02'],'covered'
  ),
  requirement(
    'math11-official-ch8-multiplication','math11-m8',['math11-kntt-l30'],'Công thức nhân xác suất',
    'Tính xác suất biến cố giao cho hai biến cố độc lập và tính xác suất bằng sơ đồ hình cây trong bài toán đơn giản.',
    ['tính','vận dụng','giải quyết'],['representation','calculation','application'],
    ['out-math11-m8-03'],'covered'
  ),
  requirement(
    'math11-official-ch9-definition',
    'math11-m9',
    ['math11-kntt-l31'],
    'Định nghĩa và ý nghĩa của đạo hàm',
    'Nhận biết bài toán dẫn đến đạo hàm, định nghĩa và ý nghĩa hình học; tính đạo hàm đơn giản bằng định nghĩa, viết tiếp tuyến, nhận biết số e và vận dụng tốc độ biến thiên tức thời.',
    ['nhận biết', 'tính', 'giải thích', 'viết', 'vận dụng'],
    ['recognition', 'representation', 'calculation', 'explanation', 'application'],
    ['out-math11-m9-01'],
    'covered'
  ),
  requirement(
    'math11-official-ch9-rules',
    'math11-m9',
    ['math11-kntt-l32'],
    'Các quy tắc tính đạo hàm',
    'Tính đạo hàm của hàm đa thức, căn thức đơn giản, lượng giác, mũ và lôgarit; sử dụng quy tắc tổng, hiệu, tích, thương, hàm hợp và mô tả tình huống thực tiễn phù hợp.',
    ['tính', 'sử dụng', 'mô tả', 'vận dụng'],
    ['representation', 'calculation', 'explanation', 'application'],
    ['out-math11-m9-02'],
    'covered'
  ),
  requirement(
    'math11-official-ch9-second-derivative',
    'math11-m9',
    ['math11-kntt-l33'],
    'Đạo hàm cấp hai',
    'Nhận biết và tính đạo hàm cấp hai của hàm số đơn giản; giải thích vấn đề thực tiễn gắn với đạo hàm cấp hai như gia tốc của chuyển động.',
    ['nhận biết', 'tính', 'giải thích', 'vận dụng'],
    ['recognition', 'representation', 'calculation', 'explanation', 'application'],
    ['out-math11-m9-03'],
    'covered'
  )
];
