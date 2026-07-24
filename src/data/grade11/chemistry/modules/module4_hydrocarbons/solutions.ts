import type { Solution } from '@/types';

export const g11ChemistryHydrocarbonsSolutions: Solution[] = [
{
    id: "chem11-hc-s001",
    questionId: "chem11-hc-q001",
    recognition: "Dạng định nghĩa alkane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Tìm đủ ba dấu hiệu: hydrocarbon, no, mạch hở."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Phương án A có đủ và không mở rộng sang cycloalkane."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Bỏ điều kiện mạch hở."],
    reviewSuggestions: ["Nhớ alkane = no + mạch hở."]
},
{
    id: "chem11-hc-s002",
    questionId: "chem11-hc-q002",
    recognition: "Dạng công thức chung.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Alkane mạch hở có n C và 2n+2 H."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Chọn CnH2n+2 với n nguyên dương."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Dùng CnH2n của alkene/cycloalkane."],
    reviewSuggestions: ["Lập bảng ba công thức hydrocarbon."]
},
{
    id: "chem11-hc-s003",
    questionId: "chem11-hc-q003",
    recognition: "Dạng thay n vào công thức.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Với n=6, số H=2×6+2=14."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "CTPT là C6H14."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Tính 2n thay vì 2n+2."],
    reviewSuggestions: ["Viết phép thay n trước khi chọn."]
},
{
    id: "chem11-hc-s004",
    questionId: "chem11-hc-q004",
    recognition: "Dạng kiểm công thức alkane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Kiểm H=2C+2 cho từng chất."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "C3 cần H=8, nên C3H6 không phải alkane mạch hở."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Chỉ thấy C,H là gọi alkane."],
    reviewSuggestions: ["Kiểm phương trình H=2C+2."]
},
{
    id: "chem11-hc-s005",
    questionId: "chem11-hc-q005",
    recognition: "Dạng nguồn tự nhiên.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Alkane tập trung trong khí thiên nhiên, khí đồng hành và dầu mỏ."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "A liệt kê đúng ba nguồn chính."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Chọn khoáng vật vô cơ."],
    reviewSuggestions: ["Gắn methane–khí, alkane lỏng–dầu mỏ."]
},
{
    id: "chem11-hc-s006",
    questionId: "chem11-hc-q006",
    recognition: "Dạng thành phần biogas.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Biogas sinh do phân hủy yếm khí và phần cháy được chính là methane."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Chọn CH4."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Chọn CO2 vì cũng có trong biogas."],
    reviewSuggestions: ["Phân biệt thành phần chính cháy được và tạp."]
},
{
    id: "chem11-hc-s007",
    questionId: "chem11-hc-q007",
    recognition: "Dạng sửa ngộ nhận về hỗn hợp khí.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Biogas không phải một chất tinh khiết."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Nó giàu CH4 nhưng còn CO2, H2S và khí khác; C đúng."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Cho biogas là CH4 100%."],
    reviewSuggestions: ["Đọc dữ liệu thành phần theo khoảng."]
},
{
    id: "chem11-hc-s008",
    questionId: "chem11-hc-q008",
    recognition: "Dạng ghép nguồn–thành phần.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Khí thiên nhiên thường giàu methane; dầu mỏ chứa nhiều hydrocarbon."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "D là cặp mô tả đúng."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Cho dầu mỏ là một chất."],
    reviewSuggestions: ["Luôn phân biệt chất tinh khiết và hỗn hợp."]
},
{
    id: "chem11-hc-s009",
    questionId: "chem11-hc-q009",
    recognition: "Dạng đếm khung C4.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Có mạch thẳng bốn C và khung ba C mang một methyl."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Hai khung là n-butane và 2-methylpropane."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Đếm cách viết ngược."],
    reviewSuggestions: ["Chuẩn hóa mạch chính rồi loại trùng."]
},
{
    id: "chem11-hc-s010",
    questionId: "chem11-hc-q010",
    recognition: "Dạng đếm khung C5.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Liệt kê mạch 5, mạch 4 có methyl, mạch 3 có hai methyl cùng C."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Tổng cộng 3 khung."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Bỏ neopentane."],
    reviewSuggestions: ["Giảm dần độ dài mạch chính."]
},
{
    id: "chem11-hc-s011",
    questionId: "chem11-hc-q011",
    recognition: "Dạng ngưỡng xuất hiện mạch nhánh.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Ba carbon chỉ tạo được một chuỗi liên tục khác biệt."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Propane có đúng một CTCT; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Vẽ nhánh nhưng thực ra vẫn cùng mạch."],
    reviewSuggestions: ["Nhánh alkane bắt đầu tạo đồng phân từ C4."]
},
{
    id: "chem11-hc-s012",
    questionId: "chem11-hc-q012",
    recognition: "Dạng nhận bộ đồng phân C5.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Kiểm cả ba chất cùng C5H12 và khung khác nhau."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Pentane, 2-methylbutane, 2,2-dimethylpropane là đủ; D."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Đếm tên sai hoặc cách viết ngược."],
    reviewSuggestions: ["Kiểm CTPT sau mỗi cấu tạo."]
},
{
    id: "chem11-hc-s013",
    questionId: "chem11-hc-q013",
    recognition: "Dạng gọi tên mạch thẳng.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Đếm chuỗi liên tục có 5 carbon."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Tiền tố pent- cộng -ane → pentane."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Đếm nhóm CH3 thay vì tổng carbon."],
    reviewSuggestions: ["Đánh số mọi carbon trên mạch."]
},
{
    id: "chem11-hc-s014",
    questionId: "chem11-hc-q014",
    recognition: "Dạng tiền tố số carbon.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Mạch có 8 carbon dùng tiền tố oct-."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Tên là octane."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Nhầm oct- với hept-/non-."],
    reviewSuggestions: ["Học bảng C1–C10 theo cụm."]
},
{
    id: "chem11-hc-s015",
    questionId: "chem11-hc-q015",
    recognition: "Dạng tên → công thức.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Eth- cho 2 carbon; alkane có H=2n+2."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "n=2 nên C2H6."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Chọn C2H4."],
    reviewSuggestions: ["Kết hợp tiền tố với công thức chung."]
},
{
    id: "chem11-hc-s016",
    questionId: "chem11-hc-q016",
    recognition: "Dạng gọi tên C10.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Tiền tố của 10 carbon là dec-."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "C10H22 là decane."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Nhầm nonane với 10 carbon."],
    reviewSuggestions: ["Ôn oct-8, non-9, dec-10."]
},
{
    id: "chem11-hc-s017",
    questionId: "chem11-hc-q017",
    recognition: "Dạng tên alkane nhánh C4.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Mạch chính dài nhất có 3 C, nhánh methyl ở C2."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Tên 2-methylpropane."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Chọn mạch chính 4 C không liên tục."],
    reviewSuggestions: ["Tô mạch liên tục trước khi đặt tên."]
},
{
    id: "chem11-hc-s018",
    questionId: "chem11-hc-q018",
    recognition: "Dạng gọi tên mạch nhánh C5.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Mạch chính butane; đánh số từ đầu gần nhánh."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Nhánh methyl ở C2 → 2-methylbutane."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Gọi 3-methylbutane."],
    reviewSuggestions: ["So hai hướng đánh số."]
},
{
    id: "chem11-hc-s019",
    questionId: "chem11-hc-q019",
    recognition: "Dạng sửa bộ số vị trí.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Cùng mạch butane có thể đánh từ hai đầu."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Chọn vị trí 2 thay vì 3, nên C đúng."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Luôn đánh số trái sang phải."],
    reviewSuggestions: ["Ưu tiên bộ số nhỏ nhất."]
},
{
    id: "chem11-hc-s020",
    questionId: "chem11-hc-q020",
    recognition: "Dạng carbon trung tâm bốn nhánh methyl.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Mạch chính dài nhất là propane, có hai methyl ở C2."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Tên 2,2-dimethylpropane."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Gọi tetramethylmethane."],
    reviewSuggestions: ["Chọn mạch dài nhất trước."]
},
{
    id: "chem11-hc-s021",
    questionId: "chem11-hc-q021",
    recognition: "Dạng tên → CTCT nhánh.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "2-methylpropane có mạch propane và methyl ở C2."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "CTCT CH3CH(CH3)CH3; A."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Viết butane mạch thẳng."],
    reviewSuggestions: ["Dựng mạch chính rồi gắn nhánh."]
},
{
    id: "chem11-hc-s022",
    questionId: "chem11-hc-q022",
    recognition: "Dạng viết 2-methylbutane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Vẽ butane rồi gắn CH3 vào C2."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Thu CH3CH(CH3)CH2CH3; B."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Gắn nhánh vào C1 tạo pentane."],
    reviewSuggestions: ["Đếm tổng carbon sau khi viết."]
},
{
    id: "chem11-hc-s023",
    questionId: "chem11-hc-q023",
    recognition: "Dạng phát hiện mạch chính dài hơn tên.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Nhánh methyl ở C1 nối tiếp mạch butane tạo chuỗi 5 C."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Phải chọn pentane; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Giữ tên 1-methylbutane."],
    reviewSuggestions: ["Nhánh ở đầu mạch thường báo chọn sai mạch chính."]
},
{
    id: "chem11-hc-s024",
    questionId: "chem11-hc-q024",
    recognition: "Dạng quy trình danh pháp.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Bắt đầu bằng chuỗi carbon liên tục dài nhất."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Đánh số gần nhánh rồi ghép vị trí–nhánh–mạch chính; D."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Gọi nhánh trước khi chọn mạch."],
    reviewSuggestions: ["Dùng checklist ba bước."]
},
{
    id: "chem11-hc-s025",
    questionId: "chem11-hc-q025",
    recognition: "Dạng liên kết trong alkane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Alkane chỉ có liên kết đơn C–C và C–H."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Mỗi liên kết đơn là sigma; A."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Cho có liên kết pi."],
    reviewSuggestions: ["Liên kết pi xuất hiện ở liên kết bội."]
},
{
    id: "chem11-hc-s026",
    questionId: "chem11-hc-q026",
    recognition: "Dạng hình học methane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Bốn cặp liên kết quanh C phân bố xa nhau trong không gian."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Hình gần tứ diện; B."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Vẽ vuông phẳng."],
    reviewSuggestions: ["Dùng mô hình không gian thay hình 2D."]
},
{
    id: "chem11-hc-s027",
    questionId: "chem11-hc-q027",
    recognition: "Dạng chọn phát biểu sai.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Alkane no không có liên kết C=C."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Phát biểu có pi C=C là sai; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Nhầm nét vẽ C–C với pi."],
    reviewSuggestions: ["Một liên kết đơn chỉ gồm sigma."]
},
{
    id: "chem11-hc-s028",
    questionId: "chem11-hc-q028",
    recognition: "Dạng tổng hợp hình học.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Methane tứ diện, ethane có mỗi C gần tứ diện."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "D mô tả đúng cả hai."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Cho methane phẳng."],
    reviewSuggestions: ["Phân biệt hình vẽ giấy với hình học thật."]
},
{
    id: "chem11-hc-s029",
    questionId: "chem11-hc-q029",
    recognition: "Dạng thí nghiệm độ tan/tỉ khối.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Hexane kém phân cực nên không trộn với nước."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Khối lượng riêng nhỏ hơn nước nên thường ở lớp trên; A."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Cho không tan nghĩa là luôn chìm."],
    reviewSuggestions: ["Tách độ tan và khối lượng riêng."]
},
{
    id: "chem11-hc-s030",
    questionId: "chem11-hc-q030",
    recognition: "Dạng trạng thái theo số carbon.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Các alkane nhẹ C1–C4 có nhiệt độ sôi thấp."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Ở điều kiện thường chúng chủ yếu là khí; B."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Cho mọi alkane là lỏng."],
    reviewSuggestions: ["Nhớ mốc khí C1–C4."]
},
{
    id: "chem11-hc-s031",
    questionId: "chem11-hc-q031",
    recognition: "Dạng giải thích độ tan.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Nước phân cực mạnh, alkane kém phân cực."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Tương tác không đủ thuận lợi để tan nhiều; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Cho có H là tan trong nước."],
    reviewSuggestions: ["Dùng nguyên tắc tương đồng phân cực."]
},
{
    id: "chem11-hc-s032",
    questionId: "chem11-hc-q032",
    recognition: "Dạng khái quát alkane lỏng.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Nhiều alkane lỏng nhẹ hơn nước và kém phân cực."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Chúng nổi và tan tốt hơn trong dung môi kém phân cực; D."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Cho alkane dẫn điện mạnh."],
    reviewSuggestions: ["Liên hệ cấu tạo không ion với tính chất."]
},
{
    id: "chem11-hc-s033",
    questionId: "chem11-hc-q033",
    recognition: "Dạng xu hướng nhiệt độ sôi.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Tăng số C làm kích thước/khả năng phân cực tức thời tăng."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Lực phân tán tăng nên nhiệt độ sôi thường tăng; A."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Xem xu hướng là giảm."],
    reviewSuggestions: ["Đọc bảng theo số C tăng dần."]
},
{
    id: "chem11-hc-s034",
    questionId: "chem11-hc-q034",
    recognition: "Dạng so đồng phân mạch thẳng–nhánh.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "n-Butane trải dài, diện tích tiếp xúc lớn hơn isobutane."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Lực phân tán hiệu dụng lớn hơn nên sôi cao hơn; B."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Cho phân nhánh tăng nhiệt độ sôi."],
    reviewSuggestions: ["So hình dạng ở cùng CTPT."]
},
{
    id: "chem11-hc-s035",
    questionId: "chem11-hc-q035",
    recognition: "Dạng giải thích ảnh hưởng phân nhánh.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Phân nhánh làm phân tử gọn hơn."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Diện tích tiếp xúc giảm, lực phân tán giảm; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Cho phân nhánh làm giảm số C."],
    reviewSuggestions: ["Giữ CTPT cố định khi so."]
},
{
    id: "chem11-hc-s036",
    questionId: "chem11-hc-q036",
    recognition: "Dạng đọc bảng đa yếu tố.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Trong dãy, kích thước lớn làm nhiệt độ sôi tăng."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Trong cùng CTPT, hình dạng gọn do nhánh làm giảm tiếp xúc; D."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Chỉ dùng phân tử khối cho mọi so sánh."],
    reviewSuggestions: ["Tách so khác CTPT và cùng CTPT."]
},
{
    id: "chem11-hc-s037",
    questionId: "chem11-hc-q037",
    recognition: "Dạng viết phản ứng thế methane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Một H của CH4 được thay bằng Br dưới ánh sáng."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Sản phẩm CH3Br và HBr, phương trình A."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Viết sản phẩm cộng CH4Br2."],
    reviewSuggestions: ["Thế giữ nguyên khung carbon."]
},
{
    id: "chem11-hc-s038",
    questionId: "chem11-hc-q038",
    recognition: "Dạng điều kiện halogen hóa.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Liên kết sigma alkane bền nên cần khơi mào."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Ánh sáng hoặc nhiệt thúc đẩy phản ứng; B."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Cho phản ứng nhanh trong tối lạnh."],
    reviewSuggestions: ["Ghi điều kiện trên mũi tên."]
},
{
    id: "chem11-hc-s039",
    questionId: "chem11-hc-q039",
    recognition: "Dạng phân loại phản ứng.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "So sánh chất trước/sau: một H biến mất, Br vào vị trí đó."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Đó là thế, không phải cộng; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Gọi mọi phản ứng với Br2 là cộng."],
    reviewSuggestions: ["Theo dõi nguyên tử bị thay."]
},
{
    id: "chem11-hc-s040",
    questionId: "chem11-hc-q040",
    recognition: "Dạng hiện tượng hexane–bromine.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Trong tối ở thường, phản ứng rất chậm/không đáng kể."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Chiếu sáng hoặc đun nóng gây thế và màu bromine giảm; D."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Nhầm với alkene mất màu ngay."],
    reviewSuggestions: ["Luôn xét điều kiện thí nghiệm."]
},
{
    id: "chem11-hc-s041",
    questionId: "chem11-hc-q041",
    recognition: "Dạng cân bằng sơ đồ cracking.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Bảo toàn C: 6=3+3; H:14=8+6."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "C6H14→C3H8+C3H6 cân bằng; A."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Chọn hai alkane làm dư hydrogen."],
    reviewSuggestions: ["Bảo toàn C,H từng phương án."]
},
{
    id: "chem11-hc-s042",
    questionId: "chem11-hc-q042",
    recognition: "Dạng định nghĩa reforming.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Reforming sắp xếp lại khung hydrocarbon."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Mạch thẳng chuyển nhánh/vòng, số C gần như giữ nguyên; B."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Đồng nhất với cracking."],
    reviewSuggestions: ["Cracking=bẻ; reforming=sắp xếp."]
},
{
    id: "chem11-hc-s043",
    questionId: "chem11-hc-q043",
    recognition: "Dạng thành phần sản phẩm cracking.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Bảo toàn H cho thấy không thể mọi mảnh đều no khi chỉ có một chất đầu."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Thường thu hỗn hợp alkane và alkene; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Cho chỉ tạo alkane."],
    reviewSuggestions: ["Kiểm độ bất bão hòa bằng số H."]
},
{
    id: "chem11-hc-s044",
    questionId: "chem11-hc-q044",
    recognition: "Dạng phân biệt hai quá trình.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Cracking làm phân tử nhỏ hơn do bẻ C–C."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Reforming chủ yếu đổi hình khung; D đúng."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Cho reforming giảm số C."],
    reviewSuggestions: ["Lập bảng mục tiêu–sản phẩm."]
},
{
    id: "chem11-hc-s045",
    questionId: "chem11-hc-q045",
    recognition: "Dạng cân bằng cháy hexane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Một C6H14 tạo 6CO2 và 7H2O, cần 19/2 O2."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Nhân hai toàn phương trình thu A."
        }
    ],
    finalAnswer: "A",
    commonMistakes: ["Đếm oxygen chỉ ở CO2."],
    reviewSuggestions: ["Cân C, H rồi O sau cùng."]
},
{
    id: "chem11-hc-s046",
    questionId: "chem11-hc-q046",
    recognition: "Dạng tỉ lệ sản phẩm cháy alkane.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "CnH2n+2 tạo nCO2 và n+1 H2O mỗi mol."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Vậy n(H2O)=n(CO2)+n(alkane); B."
        }
    ],
    finalAnswer: "B",
    commonMistakes: ["Cho hai lượng bằng nhau."],
    reviewSuggestions: ["Viết phương trình tổng quát."]
},
{
    id: "chem11-hc-s047",
    questionId: "chem11-hc-q047",
    recognition: "Dạng nhận cháy không hoàn toàn.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Thiếu O2 cản trở carbon bị oxi hóa hoàn toàn thành CO2."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "Có thể tạo CO và carbon đen; C."
        }
    ],
    finalAnswer: "C",
    commonMistakes: ["Cho mọi cháy chỉ tạo CO2."],
    reviewSuggestions: ["Liên hệ ngọn lửa vàng, muội với thiếu oxygen."]
},
{
    id: "chem11-hc-s048",
    questionId: "chem11-hc-q048",
    recognition: "Dạng giải pháp môi trường tổng hợp.",
    detailedSteps: [
        {
            order: 1,
            title: "Nhận dạng",
            explanation: "Giảm tiêu hao và cải thiện quá trình đốt/xử lí khí thải."
        },
        {
            order: 2,
            title: "Xử lí",
            explanation: "D kết hợp bảo dưỡng, xúc tác, hành vi và phương tiện ít phát thải."
        }
    ],
    finalAnswer: "D",
    commonMistakes: ["Cho nổ không tải làm giảm khí thải."],
    reviewSuggestions: ["Ưu tiên giải pháp giảm tại nguồn và xử lí cuối ống."]
},
{
  id: "chem11-hc-s049",
  questionId: "chem11-hc-q049",
  recognition: "Dạng unsat concept: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Alkene mạch hở có một liên kết đôi có công thức chung là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Alkene một C=C giảm 2 H so với alkane nên có CnH2n."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-concept."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s050",
  questionId: "chem11-hc-q050",
  recognition: "Dạng unsat concept: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Alkyne mạch hở có một liên kết ba có công thức chung là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Alkyne một C≡C có CnH2n−2 với n≥2."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-concept."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s051",
  questionId: "chem11-hc-q051",
  recognition: "Dạng unsat concept: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Chất nào là alkene mạch hở một liên kết đôi?"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "C3H6 khớp CnH2n và ngữ cảnh alkene mạch hở."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-concept."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s052",
  questionId: "chem11-hc-q052",
  recognition: "Dạng unsat concept: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Nhận xét đúng nhất về C4H8 là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "CTPT CnH2n chưa đủ kết luận alkene vì cycloalkane có cùng công thức chung."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-concept."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s053",
  questionId: "chem11-hc-q053",
  recognition: "Dạng unsat name alkene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Tên CH2=CH2 là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Hai carbon và một C=C cho ethene, tên thường ethylene."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-name-alkene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s054",
  questionId: "chem11-hc-q054",
  recognition: "Dạng unsat name alkene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Tên CH3CH=CHCH3 là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Mạch bốn C, liên kết đôi bắt đầu tại C2 nên but-2-ene."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-name-alkene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s055",
  questionId: "chem11-hc-q055",
  recognition: "Dạng unsat name alkene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: CH2=CHCH2CH3 có tên là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Đánh số từ đầu gần C=C cho chỉ số 1: but-1-ene."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-name-alkene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s056",
  questionId: "chem11-hc-q056",
  recognition: "Dạng unsat name alkene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Quy tắc đánh số đúng cho alkene là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Liên kết bội được ưu tiên bộ số nhỏ hơn trước vị trí nhánh."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-name-alkene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s057",
  questionId: "chem11-hc-q057",
  recognition: "Dạng unsat name alkyne: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Tên HC≡CH là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Hai carbon, một liên kết ba: ethyne, tên thường acetylene."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-name-alkyne."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s058",
  questionId: "chem11-hc-q058",
  recognition: "Dạng gọi tên alkyne mạch nhánh: chọn mạch chính dài nhất chứa C≡C, ưu tiên vị trí liên kết ba rồi mới xét vị trí nhánh.",
  detailedSteps: [
    {
      order: 1,
      title: "Chọn và đánh số mạch chính",
      explanation: "Mạch dài nhất chứa liên kết ba có 4 C. Đánh số từ đầu HC≡ để liên kết ba bắt đầu ở C1."
    },
    {
      order: 2,
      title: "Xác định nhánh và ghép tên",
      explanation: "Nhánh methyl ở C3, liên kết ba ở C1 nên tên là 3-methylbut-1-yne."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Đánh số từ phía gần nhánh methyl làm liên kết ba nhận chỉ số lớn hơn.",
    "Chọn mạch chính không chứa liên kết ba."
  ],
  reviewSuggestions: [
    "Luôn khoanh mạch chính chứa C≡C và ghi số thứ tự từng carbon trước khi ghép tên."
  ]
},
{
  id: "chem11-hc-s059",
  questionId: "chem11-hc-q059",
  recognition: "Dạng chuyển tên alkyne sang công thức cấu tạo: tiền tố cho số C, chỉ số trước “yne” cho carbon đầu của C≡C.",
  detailedSteps: [
    {
      order: 1,
      title: "Giải mã tên",
      explanation: "“Pent-” cho biết mạch chính có 5 C; “-2-yne” cho biết liên kết ba nằm giữa C2 và C3."
    },
    {
      order: 2,
      title: "Đối chiếu công thức",
      explanation: "CH3–C≡C–CH2–CH3 có 5 C và C≡C bắt đầu ở C2; các công thức A và B là pent-1-yne."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Đếm đủ 5 C nhưng đặt liên kết ba ở đầu mạch.",
    "Nhầm hậu tố -yne với -ene."
  ],
  reviewSuggestions: [
    "Sau khi viết công thức, đánh số lại từ đầu gần liên kết ba để tự kiểm tra tên."
  ]
},
{
  id: "chem11-hc-s060",
  questionId: "chem11-hc-q060",
  recognition: "Dạng ghép đồng thời tên và công thức: kiểm tra lần lượt số carbon, dạng mạch và vị trí C≡C.",
  detailedSteps: [
    {
      order: 1,
      title: "Dựng khung từ dữ kiện",
      explanation: "X có 5 C, mạch không phân nhánh nên gốc tên là pent-. Liên kết ba ở vị trí 2 nên tên là pent-2-yne."
    },
    {
      order: 2,
      title: "Kiểm tra công thức",
      explanation: "CH3–C≡C–CH2–CH3 có đúng 5 C và khi đánh số từ đầu gần C≡C, liên kết ba bắt đầu ở C2."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Dùng pent-3-yne dù phải đổi chiều đánh số để được chỉ số nhỏ hơn.",
    "Chọn công thức mạch nhánh trái với dữ kiện."
  ],
  reviewSuggestions: [
    "Kiểm tra tên theo ba câu hỏi: bao nhiêu C, mạch có nhánh không, C≡C bắt đầu ở C số mấy?"
  ]
},
{
  id: "chem11-hc-s061",
  questionId: "chem11-hc-q061",
  recognition: "Dạng unsat bond shape: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Liên kết đôi C=C gồm"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "C=C gồm khung sigma và một liên kết pi."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-bond-shape."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s062",
  questionId: "chem11-hc-q062",
  recognition: "Dạng unsat bond shape: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Liên kết ba C≡C gồm"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "C≡C có một sigma trên trục và hai pi vuông góc."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-bond-shape."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s063",
  questionId: "chem11-hc-q063",
  recognition: "Dạng unsat bond shape: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Hình dạng phân tử acetylene HC≡CH là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Hai carbon liên kết ba có hình học thẳng."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-bond-shape."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s064",
  questionId: "chem11-hc-q064",
  recognition: "Dạng unsat bond shape: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Mô tả đúng là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Hình học quanh C=C là phẳng, quanh C≡C là thẳng."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-bond-shape."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s065",
  questionId: "chem11-hc-q065",
  recognition: "Dạng cis trans: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Chất có đồng phân hình học là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Mỗi C của C=C trong but-2-ene gắn H và CH3 khác nhau."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của cis-trans."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s066",
  questionId: "chem11-hc-q066",
  recognition: "Dạng cis trans: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Điều kiện có cis–trans là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Điều kiện cần là mỗi đầu C=C có hai thế khác nhau."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của cis-trans."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s067",
  questionId: "chem11-hc-q067",
  recognition: "Dạng cis trans: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Propene CH2=CHCH3 không có cis–trans vì"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Một carbon liên kết đôi có hai nhóm H giống nhau nên không thỏa điều kiện."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của cis-trans."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s068",
  questionId: "chem11-hc-q068",
  recognition: "Dạng cis trans: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Cis và trans không đổi qua lại bằng quay tự do vì"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Quay quanh C=C đòi hỏi phá tương tác pi."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của cis-trans."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s069",
  questionId: "chem11-hc-q069",
  recognition: "Dạng unsat physical: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Ethylene và acetylene ở điều kiện thường chủ yếu là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Các hydrocarbon không no nhỏ C2 có nhiệt độ sôi thấp nên là khí."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-physical."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s070",
  questionId: "chem11-hc-q070",
  recognition: "Dạng ngoại suy bảng nhiệt độ sôi trong dãy đồng đẳng: tìm xu hướng theo số carbon thay vì nhớ một giá trị riêng lẻ.",
  detailedSteps: [
    {
      order: 1,
      title: "Đọc xu hướng dữ liệu",
      explanation: "Từ C2 đến C4, nhiệt độ sôi tăng liên tục: −104 < −48 < −6 °C."
    },
    {
      order: 2,
      title: "Giải thích và dự đoán",
      explanation: "Pent-1-ene lớn hơn but-1-ene nên lực phân tán mạnh hơn; nhiệt độ sôi hợp lí phải cao hơn −6 °C."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Cho rằng phân tử nặng hơn luôn có nhiệt độ sôi thấp hơn.",
    "Suy diễn rằng các chất cùng dãy đồng đẳng có cùng nhiệt độ sôi."
  ],
  reviewSuggestions: [
    "Khi gặp bảng số liệu, hãy mô tả xu hướng trước rồi mới chọn đáp án."
  ]
},
{
  id: "chem11-hc-s071",
  questionId: "chem11-hc-q071",
  recognition: "Dạng giải thích hiện tượng phân lớp: kết hợp độ phân cực, độ tan và khối lượng riêng.",
  detailedSteps: [
    {
      order: 1,
      title: "Giải thích hai lớp",
      explanation: "Pent-1-ene kém phân cực còn nước phân cực, nên hai chất hầu như không hòa tan vào nhau."
    },
    {
      order: 2,
      title: "Xác định vị trí lớp",
      explanation: "Dữ kiện lớp hydrocarbon ở trên cho biết khối lượng riêng của pent-1-ene nhỏ hơn nước; phương án C kết hợp đúng cả hai ý."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chỉ giải thích độ tan mà bỏ qua vị trí lớp.",
    "Cho rằng có hydrogen trong công thức thì chất sẽ tan tốt trong nước."
  ],
  reviewSuggestions: [
    "Với bài phân lớp, tách thành hai câu: vì sao không trộn lẫn và chất nào nhẹ hơn."
  ]
},
{
  id: "chem11-hc-s072",
  questionId: "chem11-hc-q072",
  recognition: "Dạng nhận diện chất từ dữ liệu vật lí: sắp xếp nhiệt độ sôi theo kích thước phân tử rồi kiểm tra bằng tính chất hóa học chung.",
  detailedSteps: [
    {
      order: 1,
      title: "Sắp xếp dữ liệu",
      explanation: "Trong cùng dãy alkene mạch thẳng, số C tăng thường làm nhiệt độ sôi tăng. Vì vậy −48 < −6 < 30 °C tương ứng C3 < C4 < C5."
    },
    {
      order: 2,
      title: "Đối chiếu các mẫu",
      explanation: "X là C3, Y là C4, Z là C5. Việc cả ba làm mất màu bromine phù hợp với cùng có liên kết C=C."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Xếp nhiệt độ sôi ngược chiều với kích thước phân tử.",
    "Dùng tính mất màu bromine để phân biệt ba alkene trong khi tính chất này là chung."
  ],
  reviewSuggestions: [
    "Ưu tiên dữ liệu có khả năng phân biệt mẫu; dữ liệu giống nhau chỉ dùng để xác nhận nhóm chất."
  ]
},
{
  id: "chem11-hc-s073",
  questionId: "chem11-hc-q073",
  recognition: "Dạng add h2 br2: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Sản phẩm hydrogen hóa hoàn toàn ethylene là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "CH2=CH2 cộng H2 qua liên kết pi tạo CH3CH3."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-h2-br2."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s074",
  questionId: "chem11-hc-q074",
  recognition: "Dạng add h2 br2: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Ethylene cộng Br2 tạo"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Hai Br gắn vào hai carbon của C=C, tạo 1,2-dibromoethane."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-h2-br2."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s075",
  questionId: "chem11-hc-q075",
  recognition: "Dạng add h2 br2: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Bromine hóa alkene là phản ứng"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "C=C mở liên kết pi và cộng hai Br, không thế H."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-h2-br2."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s076",
  questionId: "chem11-hc-q076",
  recognition: "Dạng add h2 br2: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Một mol acetylene cộng H2 hoàn toàn cần tối đa"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "C≡C có hai liên kết pi nên cộng tối đa 2 mol H2 để thành ethane."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-h2-br2."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s077",
  questionId: "chem11-hc-q077",
  recognition: "Dạng add hx water: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Sản phẩm chính cộng HBr vào propene theo Markovnikov là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "H vào carbon đầu có nhiều H hơn, Br vào carbon giữa."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-hx-water."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s078",
  questionId: "chem11-hc-q078",
  recognition: "Dạng add hx water: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Hydration propene trong acid cho sản phẩm chính là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Cộng H–OH theo Markovnikov tạo propan-2-ol chính."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-hx-water."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s079",
  questionId: "chem11-hc-q079",
  recognition: "Dạng add hx water: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Quy tắc Markovnikov trong trường hợp chuẩn cho biết"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Quy tắc định hướng H vào carbon giàu H hơn."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-hx-water."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s080",
  questionId: "chem11-hc-q080",
  recognition: "Dạng add hx water: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Cộng nước vào alkene thường cần"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Hydration alkene được xúc tác acid."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-hx-water."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s081",
  questionId: "chem11-hc-q081",
  recognition: "Dạng add data: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: 0,10 mol ethylene làm mất màu tối đa bao nhiêu mol Br2 khi cộng một lần?"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Một C=C cộng một mol Br2 nên tỉ lệ 1:1."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của add-data."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s082",
  questionId: "chem11-hc-q082",
  recognition: "Dạng hỗn hợp alkene–alkyne cộng H2: alkene dùng 1 mol H2/mol, alkyne dùng 2 mol H2/mol khi hydrogen hóa hoàn toàn.",
  detailedSteps: [
    {
      order: 1,
      title: "Đặt ẩn và lập tổng mol",
      explanation: "Gọi x, y lần lượt là mol ethene và acetylene: x + y = 0,15."
    },
    {
      order: 2,
      title: "Dùng số mol H2",
      explanation: "Hydrogen hóa hoàn toàn: x + 2y = 0,20. Trừ hai phương trình được y = 0,05 mol."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Cho cả ethene và acetylene cùng tỉ lệ H2 1:1.",
    "Không chú ý từ “hoàn toàn”, khiến bỏ lần cộng thứ hai của C≡C."
  ],
  reviewSuggestions: [
    "Lập bảng: ethene—1 liên kết pi—1 H2; acetylene—2 liên kết pi—2 H2."
  ]
},
{
  id: "chem11-hc-s083",
  questionId: "chem11-hc-q083",
  recognition: "Dạng xác định thành phần hỗn hợp từ lượng Br2 tối đa: quy đổi mỗi liên kết pi thành một mol Br2 cộng.",
  detailedSteps: [
    {
      order: 1,
      title: "Lập hệ theo số mol chất",
      explanation: "Gọi x mol ethene, y mol acetylene: x + y = 0,20."
    },
    {
      order: 2,
      title: "Lập hệ theo Br2 và tính phần mol",
      explanation: "Cộng tối đa: x + 2y = 0,30 nên y = 0,10 mol. Phần mol acetylene = 0,10/0,20 = 50%."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Dùng tỉ lệ Br2 1:1 cho acetylene khi đề nói cộng tối đa.",
    "Tìm được 0,10 mol nhưng quên chia cho tổng số mol để đổi sang phần trăm."
  ],
  reviewSuggestions: [
    "Sau khi giải hệ, luôn kiểm tra lượng Br2: 0,10×1 + 0,10×2 = 0,30 mol."
  ]
},
{
  id: "chem11-hc-s084",
  questionId: "chem11-hc-q084",
  recognition: "Dạng nhận diện cấu tạo bằng hai bằng chứng: lượng H2 cho số liên kết pi, AgNO3/NH3 nhận nhóm ≡C–H đầu mạch.",
  detailedSteps: [
    {
      order: 1,
      title: "Dùng dữ kiện hydrogen hóa",
      explanation: "Cộng tối đa 2 mol H2 và tạo butane phù hợp với một liên kết ba hoặc hai liên kết đôi trong khung C4."
    },
    {
      order: 2,
      title: "Dùng thuốc thử chọn lọc",
      explanation: "AgNO3/NH3 chỉ cho kết tủa với alkyne đầu mạch có ≡C–H. Trong các phương án, HC≡C–CH2–CH3 là but-1-yne."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Dừng lại sau dữ kiện cộng H2 nên chọn cả but-2-yne.",
    "Cho rằng mọi alkyne đều phản ứng với AgNO3/NH3."
  ],
  reviewSuggestions: [
    "Xử lí từng dữ kiện như một bộ lọc; chỉ chọn cấu tạo thỏa mãn đồng thời tất cả bộ lọc."
  ]
},
{
  id: "chem11-hc-s085",
  questionId: "chem11-hc-q085",
  recognition: "Dạng polymerization: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Mắt xích polyethylene là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Liên kết pi ethylene mở, tạo mắt xích no –CH2–CH2–."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của polymerization."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s086",
  questionId: "chem11-hc-q086",
  recognition: "Dạng polymerization: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Monomer tạo polypropylene là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Propene CH2=CHCH3 trùng hợp tạo polypropylene."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của polymerization."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s087",
  questionId: "chem11-hc-q087",
  recognition: "Dạng polymerization: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Trong trùng hợp alkene, biến đổi chính là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Liên kết pi mở và hình thành liên kết sigma giữa mắt xích."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của polymerization."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s088",
  questionId: "chem11-hc-q088",
  recognition: "Dạng polymerization: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Phương trình khái quát PE đúng là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Mắt xích PE không còn C=C."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của polymerization."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s089",
  questionId: "chem11-hc-q089",
  recognition: "Dạng terminal alkyne: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Chất phản ứng với AgNO3/NH3 tạo kết tủa là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Acetylene có hydrogen đầu mạch ≡C–H."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của terminal-alkyne."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s090",
  questionId: "chem11-hc-q090",
  recognition: "Dạng terminal alkyne: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Cặp đều là alk-1-yne có thể phản ứng là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Ethyne và prop-1-yne đều có ≡C–H."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của terminal-alkyne."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s091",
  questionId: "chem11-hc-q091",
  recognition: "Dạng terminal alkyne: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: But-2-yne không tạo kết tủa bạc vì"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Alkyne nội không có nhóm ≡C–H."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của terminal-alkyne."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s092",
  questionId: "chem11-hc-q092",
  recognition: "Dạng terminal alkyne: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Kết luận đúng về thuốc thử AgNO3/NH3 là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Chỉ alkyne đầu mạch phản ứng tạo acetylide bạc."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của terminal-alkyne."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s093",
  questionId: "chem11-hc-q093",
  recognition: "Dạng unsat oxidation: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Alkene làm mất màu dung dịch KMnO4 do"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Liên kết pi bị oxi hóa, làm màu permanganate giảm."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-oxidation."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s094",
  questionId: "chem11-hc-q094",
  recognition: "Dạng thiết kế chuỗi nhận biết ba hydrocarbon: dùng thuốc thử chọn lọc nhất trước, rồi kiểm tra tính không no của phần còn lại.",
  detailedSteps: [
    {
      order: 1,
      title: "Tách ethyne",
      explanation: "Ethyne là alkyne đầu mạch nên tạo kết tủa với AgNO3/NH3; ethene và ethane không cho hiện tượng này."
    },
    {
      order: 2,
      title: "Nhận ethene và suy ra ethane",
      explanation: "Cho phần khí còn lại qua nước bromine: ethene làm mất màu, ethane không phản ứng trong điều kiện thường. Khí còn lại là ethane."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Dùng bromine trước rồi tưởng có thể phân biệt ngay ethene với ethyne vì cả hai đều làm mất màu.",
    "Gán nhầm phản ứng AgNO3/NH3 cho ethene."
  ],
  reviewSuggestions: [
    "Trong chuỗi nhận biết, ưu tiên thuốc thử chỉ phản ứng với một thành phần trước."
  ]
},
{
  id: "chem11-hc-s095",
  questionId: "chem11-hc-q095",
  recognition: "Dạng đánh giá tính đủ của bằng chứng: một phép thử nhóm chức thường chỉ xác nhận tính không no, chưa định danh duy nhất chất.",
  detailedSteps: [
    {
      order: 1,
      title: "Xác định điều phép thử chứng minh",
      explanation: "Mất màu bromine cho thấy mẫu có khả năng phản ứng với Br2, thường do liên kết bội trong phạm vi bài học."
    },
    {
      order: 2,
      title: "Kiểm tra tính duy nhất",
      explanation: "Alkyne cũng cộng bromine, nên chưa thể kết luận riêng ethene. Nếu nghi alkyne đầu mạch, AgNO3/NH3 cung cấp bằng chứng phân biệt bổ sung."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Đồng nhất “phản ứng dương tính” với “định danh duy nhất”.",
    "Cho rằng alkyne không cộng bromine."
  ],
  reviewSuggestions: [
    "Luôn hỏi: còn chất nào khác cũng cho cùng hiện tượng không; nếu có, cần phép thử thứ hai."
  ]
},
{
  id: "chem11-hc-s096",
  questionId: "chem11-hc-q096",
  recognition: "Dạng đốt cháy alkene: số mol CO2 cho số carbon; với CnH2n, một mol chất tạo n mol CO2 và n mol H2O.",
  detailedSteps: [
    {
      order: 1,
      title: "Tìm số carbon",
      explanation: "n(CO2)/n(alkene) = 0,30/0,10 = 3 nên phân tử có 3 C, công thức là C3H6."
    },
    {
      order: 2,
      title: "Tính lượng nước",
      explanation: "C3H6 + 9/2 O2 → 3CO2 + 3H2O. Vì vậy 0,10 mol C3H6 tạo 0,30 mol H2O."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Tìm đúng n = 3 nhưng viết C3H8 theo công thức alkane.",
    "Cho rằng số mol H2O luôn lớn hơn CO2 như khi đốt alkane."
  ],
  reviewSuggestions: [
    "Ghi phương trình cháy tổng quát CnH2n → nCO2 + nH2O trước khi thay số."
  ]
},
{
  id: "chem11-hc-s097",
  questionId: "chem11-hc-q097",
  recognition: "Dạng prep ethylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Trong phòng thí nghiệm, ethylene được điều chế từ"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Tách H2O khỏi ethanol bằng H2SO4 đặc và nhiệt tạo ethylene."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-ethylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s098",
  questionId: "chem11-hc-q098",
  recognition: "Dạng prep ethylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Chất xúc tác/tác nhân thường dùng khi dehydrate ethanol là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Acid sulfuric đặc xúc tác dehydration ethanol khi đun."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-ethylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s099",
  questionId: "chem11-hc-q099",
  recognition: "Dạng prep ethylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Sản phẩm hữu cơ của CH3CH2OH → ? + H2O là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Bảo toàn C2H6O trừ H2O còn C2H4, ethylene."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-ethylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s100",
  questionId: "chem11-hc-q100",
  recognition: "Dạng prep ethylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Khi thu ethylene rồi thử bromine, hiện tượng phù hợp là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Ethylene cộng Br2 qua C=C."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-ethylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s101",
  questionId: "chem11-hc-q101",
  recognition: "Dạng prep acetylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Acetylene được điều chế trong phòng thí nghiệm từ"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Calcium carbide thủy phân tạo C2H2."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-acetylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s102",
  questionId: "chem11-hc-q102",
  recognition: "Dạng prep acetylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Phương trình đúng là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Bảo toàn cho phương trình carbide với hai nước tạo acetylene và calcium hydroxide."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-acetylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s103",
  questionId: "chem11-hc-q103",
  recognition: "Dạng prep acetylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Trước khi đốt acetylene vừa điều chế cần"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Dòng khí đầu còn trộn không khí, có nguy cơ nổ khi châm lửa."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-acetylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s104",
  questionId: "chem11-hc-q104",
  recognition: "Dạng prep acetylene: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: CaC2 với nước không tạo ethylene vì sản phẩm khí đúng là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Carbide tạo acetylene C2H2, không phải ethylene."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của prep-acetylene."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s105",
  questionId: "chem11-hc-q105",
  recognition: "Dạng unsat applications: nhận dấu hiệu trong đề trước khi viết phản ứng hoặc kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng",
      explanation: "Dữ kiện trọng tâm: Ứng dụng quan trọng của ethylene là"
    },
    {
      order: 2,
      title: "Xử lí",
      explanation: "Ethylene là monomer PE và nguyên liệu tổng hợp lớn."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn theo từ khóa bề mặt mà không kiểm tra điều kiện của unsat-applications."
  ],
  reviewSuggestions: [
    "Viết công thức cấu tạo, kiểm tra liên kết bội và điều kiện phản ứng trước khi chọn đáp án."
  ]
},
{
  id: "chem11-hc-s106",
  questionId: "chem11-hc-q106",
  recognition: "Dạng ghép chất với ứng dụng: ethylene có vai trò điều hòa sinh trưởng quả; ngọn lửa oxy–acetylene có nhiệt độ cao.",
  detailedSteps: [
    {
      order: 1,
      title: "Ghép mục đích thứ nhất",
      explanation: "Ethylene được dùng ở nồng độ kiểm soát để kích thích và điều hòa quá trình chín của quả."
    },
    {
      order: 2,
      title: "Ghép mục đích thứ hai",
      explanation: "Acetylene cháy trong oxygen tạo ngọn lửa nhiệt độ cao, phù hợp hàn và cắt kim loại."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Đảo ứng dụng của ethylene và acetylene.",
    "Hiểu “kích thích chín” là sử dụng khí không kiểm soát, bỏ qua yêu cầu an toàn."
  ],
  reviewSuggestions: [
    "Lập bảng hai cột chất–ứng dụng và gắn mỗi ứng dụng với một tính chất hoặc phản ứng giải thích."
  ]
},
{
  id: "chem11-hc-s107",
  questionId: "chem11-hc-q107",
  recognition: "Dạng xác định sản phẩm cracking bằng bảo toàn nguyên tử: sản phẩm chưa biết phải giữ đủ tổng số C và H.",
  detailedSteps: [
    {
      order: 1,
      title: "Bảo toàn carbon",
      explanation: "X có số carbon bằng 8 − 3 = 5."
    },
    {
      order: 2,
      title: "Bảo toàn hydrogen",
      explanation: "X có số hydrogen bằng 18 − 6 = 12, nên X là C5H12. Phương trình C8H18 → C3H6 + C5H12 đã cân bằng."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chỉ bảo toàn carbon mà không kiểm tra hydrogen.",
    "Mặc định cả hai sản phẩm cracking đều là alkene."
  ],
  reviewSuggestions: [
    "Với phương trình công nghiệp khuyết sản phẩm, lập hai dòng bảo toàn C và H."
  ]
},
{
  id: "chem11-hc-s108",
  questionId: "chem11-hc-q108",
  recognition: "Dạng tổng hợp điều chế–an toàn–ứng dụng: mỗi mệnh đề phải đúng; chỉ một lỗi cũng loại cả phương án.",
  detailedSteps: [
    {
      order: 1,
      title: "Kiểm tra nguồn điều chế",
      explanation: "Ethanol tách nước tạo ethylene; CaC2 tác dụng nước tạo acetylene: CaC2 + 2H2O → C2H2 + Ca(OH)2."
    },
    {
      order: 2,
      title: "Kiểm tra an toàn và ứng dụng",
      explanation: "Phải đuổi không khí khỏi hệ trước khi đốt acetylene để tránh hỗn hợp nổ. Ethylene là nguyên liệu polymer; oxy–acetylene dùng hàn cắt. Chỉ D đúng toàn bộ."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn phương án có một ý quen thuộc nhưng bỏ qua ý điều chế hoặc an toàn sai.",
    "Nhầm CaC2 tạo ethylene."
  ],
  reviewSuggestions: [
    "Với câu tổng hợp, đánh dấu đúng/sai từng vế trước khi chọn phương án."
  ]
},
{
  id: "chem11-hc-s109",
  questionId: "chem11-hc-q109",
  recognition: "Dạng khái niệm–công thức arene: tìm dấu hiệu vòng benzene và chỉ dùng CnH2n−6 đúng phạm vi dãy đồng đẳng benzene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Arene được định nghĩa đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Khái niệm dựa trên cấu trúc: arene là hydrocarbon có ít nhất một vòng benzene."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Định nghĩa arene theo mùi hoặc áp dụng CnH2n−6 cho mọi hợp chất có vòng benzene."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s110",
  questionId: "chem11-hc-q110",
  recognition: "Dạng khái niệm–công thức arene: tìm dấu hiệu vòng benzene và chỉ dùng CnH2n−6 đúng phạm vi dãy đồng đẳng benzene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Công thức nào phù hợp với một đồng đẳng benzene có 7 carbon?. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Với dãy đồng đẳng benzene: H=2n−6=8, nên C7H8."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Định nghĩa arene theo mùi hoặc áp dụng CnH2n−6 cho mọi hợp chất có vòng benzene."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s111",
  questionId: "chem11-hc-q111",
  recognition: "Dạng khái niệm–công thức arene: tìm dấu hiệu vòng benzene và chỉ dùng CnH2n−6 đúng phạm vi dãy đồng đẳng benzene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Chất nào không phải arene?. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Cyclohexane có vòng no nhưng không có vòng benzene."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Định nghĩa arene theo mùi hoặc áp dụng CnH2n−6 cho mọi hợp chất có vòng benzene."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s112",
  questionId: "chem11-hc-q112",
  recognition: "Dạng khái niệm–công thức arene: tìm dấu hiệu vòng benzene và chỉ dùng CnH2n−6 đúng phạm vi dãy đồng đẳng benzene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Nhận định đúng về công thức CnH2n−6 là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Styrene và naphthalene là phản ví dụ cho việc áp công thức này một cách phổ quát."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Định nghĩa arene theo mùi hoặc áp dụng CnH2n−6 cho mọi hợp chất có vòng benzene."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s113",
  questionId: "chem11-hc-q113",
  recognition: "Dạng tên–công thức arene thường gặp: đối chiếu phần gắn với C6H5 và phân biệt mạch alkyl với vinyl, vòng ngưng tụ.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Công thức phân tử của benzene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Benzene là arene đơn giản có công thức C6H6."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Nhầm styrene với ethylbenzene hoặc naphthalene với đồng đẳng benzene."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s114",
  questionId: "chem11-hc-q114",
  recognition: "Dạng tên–công thức arene thường gặp: đối chiếu phần gắn với C6H5 và phân biệt mạch alkyl với vinyl, vòng ngưng tụ.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: C6H5CH3 có tên thường là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "C6H5CH3 là methylbenzene, tên thường toluene."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Nhầm styrene với ethylbenzene hoặc naphthalene với đồng đẳng benzene."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s115",
  questionId: "chem11-hc-q115",
  recognition: "Dạng tên–công thức arene thường gặp: đối chiếu phần gắn với C6H5 và phân biệt mạch alkyl với vinyl, vòng ngưng tụ.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Công thức thu gọn của styrene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Styrene là vinylbenzene, có nhóm CH=CH2 gắn với vòng."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Nhầm styrene với ethylbenzene hoặc naphthalene với đồng đẳng benzene."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s116",
  questionId: "chem11-hc-q116",
  recognition: "Dạng tên–công thức arene thường gặp: đối chiếu phần gắn với C6H5 và phân biệt mạch alkyl với vinyl, vòng ngưng tụ.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Cặp tên–công thức đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Naphthalene gồm hai vòng benzene ngưng tụ và có CTPT C10H8."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Nhầm styrene với ethylbenzene hoặc naphthalene với đồng đẳng benzene."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s117",
  questionId: "chem11-hc-q117",
  recognition: "Dạng o–m–p: cố định một nhóm ở C1 rồi đếm vị trí nhóm thứ hai; o=2, m=3, p=4.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: 1,2-dimethylbenzene còn gọi là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Hai nhóm CH3 kề nhau ở vị trí 1,2 tương ứng ortho."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Nhầm o–m–p và đếm hai cách quay vòng thành hai đồng phân khác nhau."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s118",
  questionId: "chem11-hc-q118",
  recognition: "Dạng o–m–p: cố định một nhóm ở C1 rồi đếm vị trí nhóm thứ hai; o=2, m=3, p=4.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: m-Xylene ứng với cách đánh số. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Meta tương ứng hai nhóm ở vị trí 1 và 3."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Nhầm o–m–p và đếm hai cách quay vòng thành hai đồng phân khác nhau."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s119",
  questionId: "chem11-hc-q119",
  recognition: "Dạng o–m–p: cố định một nhóm ở C1 rồi đếm vị trí nhóm thứ hai; o=2, m=3, p=4.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Số đồng phân vị trí của xylene C6H4(CH3)2 là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Do đối xứng vòng, chỉ có ba vị trí khác nhau: 1,2; 1,3; 1,4."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Nhầm o–m–p và đếm hai cách quay vòng thành hai đồng phân khác nhau."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s120",
  questionId: "chem11-hc-q120",
  recognition: "Dạng o–m–p: cố định một nhóm ở C1 rồi đếm vị trí nhóm thứ hai; o=2, m=3, p=4.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Ghép đúng thứ tự o-, m-, p-xylene với vị trí hai nhóm methyl là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Ortho–meta–para lần lượt là 1,2–1,3–1,4."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Nhầm o–m–p và đếm hai cách quay vòng thành hai đồng phân khác nhau."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s121",
  questionId: "chem11-hc-q121",
  recognition: "Dạng cấu tạo benzene: kiểm tra tính phẳng, góc 120°, độ dài sáu liên kết C–C và hệ pi liên hợp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Hình dạng khung carbon của benzene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Mỗi carbon của benzene có hình học phẳng tam giác; toàn vòng là lục giác phẳng."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Vẽ benzene gấp khúc hoặc coi ba liên kết đôi hoàn toàn định xứ, khác độ dài."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s122",
  questionId: "chem11-hc-q122",
  recognition: "Dạng cấu tạo benzene: kiểm tra tính phẳng, góc 120°, độ dài sáu liên kết C–C và hệ pi liên hợp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Đặc điểm đúng của sáu liên kết C–C trong benzene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Electron pi liên hợp phân bố trên vòng làm sáu liên kết C–C tương đương."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Vẽ benzene gấp khúc hoặc coi ba liên kết đôi hoàn toàn định xứ, khác độ dài."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s123",
  questionId: "chem11-hc-q123",
  recognition: "Dạng cấu tạo benzene: kiểm tra tính phẳng, góc 120°, độ dài sáu liên kết C–C và hệ pi liên hợp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Benzene bền hơn mô hình cyclohexatriene định xứ chủ yếu vì. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Sự liên hợp/delocalization của electron pi làm hệ vòng bền."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Vẽ benzene gấp khúc hoặc coi ba liên kết đôi hoàn toàn định xứ, khác độ dài."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s124",
  questionId: "chem11-hc-q124",
  recognition: "Dạng cấu tạo benzene: kiểm tra tính phẳng, góc 120°, độ dài sáu liên kết C–C và hệ pi liên hợp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Cách biểu diễn vòng lục giác có đường tròn bên trong nhấn mạnh rằng. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Đường tròn là mô hình biểu diễn hệ pi liên hợp, không phải một liên kết riêng."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Vẽ benzene gấp khúc hoặc coi ba liên kết đôi hoàn toàn định xứ, khác độ dài."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s125",
  questionId: "chem11-hc-q125",
  recognition: "Dạng dữ liệu vật lí: dùng nhiệt độ nóng chảy/sôi để suy trạng thái, dùng tỉ khối và độ phân cực để suy phân lớp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Benzene có khối lượng riêng khoảng 0,878 g/mL và hầu như không tan trong nước. Khi trộn rồi để yên, benzene thường. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Không tan tạo hai lớp; d<1 nên lớp benzene nằm trên."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Cho mọi arene đều lỏng, tan trong nước hoặc nhẹ hơn nước mà không đọc dữ liệu."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s126",
  questionId: "chem11-hc-q126",
  recognition: "Dạng dữ liệu vật lí: dùng nhiệt độ nóng chảy/sôi để suy trạng thái, dùng tỉ khối và độ phân cực để suy phân lớp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Naphthalene có nhiệt độ nóng chảy khoảng 80 °C. Ở 25 °C, chất này chủ yếu là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "25 °C thấp hơn nhiệt độ nóng chảy nên naphthalene ở thể rắn."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Cho mọi arene đều lỏng, tan trong nước hoặc nhẹ hơn nước mà không đọc dữ liệu."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s127",
  questionId: "chem11-hc-q127",
  recognition: "Dạng dữ liệu vật lí: dùng nhiệt độ nóng chảy/sôi để suy trạng thái, dùng tỉ khối và độ phân cực để suy phân lớp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Nhiệt độ sôi: benzene 80,1 °C; toluene 110,6 °C; o-xylene 144 °C. Thứ tự tăng đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Đọc trực tiếp bảng: 80,1 < 110,6 < 144."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Cho mọi arene đều lỏng, tan trong nước hoặc nhẹ hơn nước mà không đọc dữ liệu."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s128",
  questionId: "chem11-hc-q128",
  recognition: "Dạng dữ liệu vật lí: dùng nhiệt độ nóng chảy/sôi để suy trạng thái, dùng tỉ khối và độ phân cực để suy phân lớp.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: p-Xylene nóng chảy khoảng 13,3 °C, m-xylene −47,4 °C. Ở 0 °C, nhận định đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "0 °C thấp hơn mp của p-xylene nhưng cao hơn mp của m-xylene."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Cho mọi arene đều lỏng, tan trong nước hoặc nhẹ hơn nước mà không đọc dữ liệu."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s129",
  questionId: "chem11-hc-q129",
  recognition: "Dạng nguồn–an toàn arene: nhận nguồn BTX/arene đa vòng và áp dụng thứ bậc kiểm soát phơi nhiễm thay vì chỉ dựa vào PPE.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Nguồn tự nhiên quan trọng của benzene, toluene và xylene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "BTX hiện diện trong dầu mỏ và cũng được tạo/tách trong công nghiệp lọc hóa dầu."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Ngửi trực tiếp, dùng benzene trong phòng kín hoặc cho chất hữu cơ mặc nhiên an toàn."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s130",
  questionId: "chem11-hc-q130",
  recognition: "Dạng nguồn–an toàn arene: nhận nguồn BTX/arene đa vòng và áp dụng thứ bậc kiểm soát phơi nhiễm thay vì chỉ dựa vào PPE.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Xưởng đang dùng benzene làm dung môi trong bể hở. Biện pháp ưu tiên có tính triệt để hơn là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Thay thế và kiểm soát kỹ thuật giảm nguy cơ tại nguồn, hiệu quả hơn chỉ PPE."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Ngửi trực tiếp, dùng benzene trong phòng kín hoặc cho chất hữu cơ mặc nhiên an toàn."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s131",
  questionId: "chem11-hc-q131",
  recognition: "Dạng nguồn–an toàn arene: nhận nguồn BTX/arene đa vòng và áp dụng thứ bậc kiểm soát phơi nhiễm thay vì chỉ dựa vào PPE.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Phát biểu “arene là hợp chất hữu cơ nên an toàn” sai vì. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Nguồn gốc hữu cơ không quyết định độ an toàn; phải đánh giá phơi nhiễm và độc tính."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Ngửi trực tiếp, dùng benzene trong phòng kín hoặc cho chất hữu cơ mặc nhiên an toàn."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s132",
  questionId: "chem11-hc-q132",
  recognition: "Dạng nguồn–an toàn arene: nhận nguồn BTX/arene đa vòng và áp dụng thứ bậc kiểm soát phơi nhiễm thay vì chỉ dựa vào PPE.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Một can dung môi arene bị đổ trong phòng. Cách xử lí phù hợp nhất là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Arene dễ cháy, bay hơi và độc; không xả cống hay ngửi trực tiếp."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Ngửi trực tiếp, dùng benzene trong phòng kín hoặc cho chất hữu cơ mặc nhiên an toàn."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s133",
  questionId: "chem11-hc-q133",
  recognition: "Dạng halogen hóa benzene: có Br2/Cl2 và FeX3; thay một H trên vòng, đồng thời tạo HX.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Benzene tác dụng Br2 có FeBr3 tạo sản phẩm hữu cơ chính là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "FeBr3 xúc tác phản ứng thế H trên vòng bằng Br, tạo C6H5Br."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Viết phản ứng cộng hoặc bỏ xúc tác FeX3/sản phẩm HX."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s134",
  questionId: "chem11-hc-q134",
  recognition: "Dạng halogen hóa benzene: có Br2/Cl2 và FeX3; thay một H trên vòng, đồng thời tạo HX.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Vai trò chính của FeBr3 trong phản ứng brom hóa benzene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "FeBr3 là Lewis acid giúp tạo tác nhân brom hóa mạnh hơn."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Viết phản ứng cộng hoặc bỏ xúc tác FeX3/sản phẩm HX."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s135",
  questionId: "chem11-hc-q135",
  recognition: "Dạng halogen hóa benzene: có Br2/Cl2 và FeX3; thay một H trên vòng, đồng thời tạo HX.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Benzene không làm mất màu nước bromine ngay ở điều kiện thường cho thấy. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Tính bền thơm khiến benzene không phản ứng cộng dễ như alkene."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Viết phản ứng cộng hoặc bỏ xúc tác FeX3/sản phẩm HX."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s136",
  questionId: "chem11-hc-q136",
  recognition: "Dạng halogen hóa benzene: có Br2/Cl2 và FeX3; thay một H trên vòng, đồng thời tạo HX.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Phương trình thế brom đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Bảo toàn H và Br cho sản phẩm bromobenzene cùng HBr."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Viết phản ứng cộng hoặc bỏ xúc tác FeX3/sản phẩm HX."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s137",
  questionId: "chem11-hc-q137",
  recognition: "Dạng nitro hóa: nhận hỗn hợp HNO3 đặc/H2SO4 đặc, thay H vòng bằng NO2 và kiểm soát nhiệt.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Hỗn hợp dùng nitro hóa benzene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "H2SO4 đặc xúc tác/tạo tác nhân nitro hóa từ HNO3 đặc."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Dùng HNO3 loãng không xúc tác hoặc gia nhiệt bằng lửa trần."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s138",
  questionId: "chem11-hc-q138",
  recognition: "Dạng nitro hóa: nhận hỗn hợp HNO3 đặc/H2SO4 đặc, thay H vòng bằng NO2 và kiểm soát nhiệt.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Sản phẩm hữu cơ của phản ứng nitro hóa một lần benzene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Một H trên vòng được thay bởi NO2, tạo C6H5NO2."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Dùng HNO3 loãng không xúc tác hoặc gia nhiệt bằng lửa trần."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s139",
  questionId: "chem11-hc-q139",
  recognition: "Dạng nitro hóa: nhận hỗn hợp HNO3 đặc/H2SO4 đặc, thay H vòng bằng NO2 và kiểm soát nhiệt.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Thao tác an toàn phù hợp khi nitro hóa benzene quy mô học tập là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Hỗn hợp acid, benzene và hơi sản phẩm đều cần kiểm soát nhiệt/phơi nhiễm."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Dùng HNO3 loãng không xúc tác hoặc gia nhiệt bằng lửa trần."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s140",
  questionId: "chem11-hc-q140",
  recognition: "Dạng nitro hóa: nhận hỗn hợp HNO3 đặc/H2SO4 đặc, thay H vòng bằng NO2 và kiểm soát nhiệt.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Phương trình nitro hóa benzene cân bằng đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Phản ứng thế tạo nitrobenzene và nước theo tỉ lệ 1:1."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Dùng HNO3 loãng không xúc tác hoặc gia nhiệt bằng lửa trần."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s141",
  questionId: "chem11-hc-q141",
  recognition: "Dạng định hướng toluene: nhóm CH3 hướng nhóm thế mới ưu tiên ortho, para; phải đọc điều kiện để xác định phản ứng trên vòng.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Khi thế một lần vào vòng toluene, nhóm CH3 định hướng ưu tiên tới vị trí. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Trong phạm vi chương trình, CH3 là nhóm định hướng ortho–para."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Chọn meta là sản phẩm ưu tiên hay không phân biệt thế vòng với phản ứng mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s142",
  questionId: "chem11-hc-q142",
  recognition: "Dạng định hướng toluene: nhóm CH3 hướng nhóm thế mới ưu tiên ortho, para; phải đọc điều kiện để xác định phản ứng trên vòng.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Nitro hóa toluene một lần tạo hỗn hợp sản phẩm ưu tiên là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "NO2 vào chủ yếu các vị trí ortho và para so với CH3."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Chọn meta là sản phẩm ưu tiên hay không phân biệt thế vòng với phản ứng mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s143",
  questionId: "chem11-hc-q143",
  recognition: "Dạng định hướng toluene: nhóm CH3 hướng nhóm thế mới ưu tiên ortho, para; phải đọc điều kiện để xác định phản ứng trên vòng.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Một học sinh chọn m-nitrotoluene là sản phẩm ưu tiên duy nhất. Sửa đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Cần xét tác dụng định hướng của nhóm methyl đang có trên vòng."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Chọn meta là sản phẩm ưu tiên hay không phân biệt thế vòng với phản ứng mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s144",
  questionId: "chem11-hc-q144",
  recognition: "Dạng định hướng toluene: nhóm CH3 hướng nhóm thế mới ưu tiên ortho, para; phải đọc điều kiện để xác định phản ứng trên vòng.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Nitro hóa 0,20 mol benzene, hiệu suất tạo nitrobenzene là 80%. Khối lượng nitrobenzene (M=123 g/mol) thu được là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "n sản phẩm =0,20×0,80=0,16 mol; m=0,16×123=19,68 g."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Chọn meta là sản phẩm ưu tiên hay không phân biệt thế vòng với phản ứng mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s145",
  questionId: "chem11-hc-q145",
  recognition: "Dạng cộng benzene: điều kiện mạnh làm mất tính thơm; hydrogen hóa hoàn toàn hoặc cộng chlorine đều có tỉ lệ 1:3.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Hydrogen hóa hoàn toàn 1 mol benzene cần số mol H2 là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "C6H6 + 3H2 → C6H12; vòng nhận tổng 6 H."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Cho benzene cộng dễ hoặc chỉ dùng một mol H2/Cl2."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s146",
  questionId: "chem11-hc-q146",
  recognition: "Dạng cộng benzene: điều kiện mạnh làm mất tính thơm; hydrogen hóa hoàn toàn hoặc cộng chlorine đều có tỉ lệ 1:3.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Benzene cộng chlorine dưới điều kiện phù hợp theo phương trình. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Phản ứng cộng vào vòng dùng 3 mol Cl2 cho 1 mol benzene."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Cho benzene cộng dễ hoặc chỉ dùng một mol H2/Cl2."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s147",
  questionId: "chem11-hc-q147",
  recognition: "Dạng cộng benzene: điều kiện mạnh làm mất tính thơm; hydrogen hóa hoàn toàn hoặc cộng chlorine đều có tỉ lệ 1:3.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: So với ethene, phản ứng cộng vào benzene khó hơn chủ yếu vì. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Muốn cộng phải phá tính liên hợp thơm nên cần điều kiện mạnh."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Cho benzene cộng dễ hoặc chỉ dùng một mol H2/Cl2."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s148",
  questionId: "chem11-hc-q148",
  recognition: "Dạng cộng benzene: điều kiện mạnh làm mất tính thơm; hydrogen hóa hoàn toàn hoặc cộng chlorine đều có tỉ lệ 1:3.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Dấu hiệu phân biệt phản ứng thế và cộng chlorine của benzene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Theo dõi khung vòng và sản phẩm phụ HCl để phân loại phản ứng."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Cho benzene cộng dễ hoặc chỉ dùng một mol H2/Cl2."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s149",
  questionId: "chem11-hc-q149",
  recognition: "Dạng cháy arene: cân C→CO2, H→H2O rồi O; với CnH2n−6, một mol tạo n CO2 và n−3 H2O.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Phương trình cháy benzene cân bằng đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Cân 12 C, 12 H rồi 30 O cho hệ số nguyên nhỏ nhất."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Áp tỉ lệ cháy alkane, nhầm mol H2O lớn hơn CO2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s150",
  questionId: "chem11-hc-q150",
  recognition: "Dạng cháy arene: cân C→CO2, H→H2O rồi O; với CnH2n−6, một mol tạo n CO2 và n−3 H2O.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Đốt hoàn toàn 0,10 mol benzene thu được. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Một mol C6H6 tạo 6 mol CO2 và 3 mol H2O."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Áp tỉ lệ cháy alkane, nhầm mol H2O lớn hơn CO2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s151",
  questionId: "chem11-hc-q151",
  recognition: "Dạng cháy arene: cân C→CO2, H→H2O rồi O; với CnH2n−6, một mol tạo n CO2 và n−3 H2O.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Đốt hoàn toàn 0,10 mol toluene C7H8 tạo số mol CO2 và H2O lần lượt là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Một mol C7H8 tạo 7CO2 và 4H2O."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Áp tỉ lệ cháy alkane, nhầm mol H2O lớn hơn CO2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s152",
  questionId: "chem11-hc-q152",
  recognition: "Dạng cháy arene: cân C→CO2, H→H2O rồi O; với CnH2n−6, một mol tạo n CO2 và n−3 H2O.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Một arene thuộc dãy đồng đẳng benzene khi cháy cho n(CO2):n(H2O)=7:4. Công thức phù hợp là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Với CnH2n−6, tỉ lệ là n:(n−3); 7:4 ứng với n=7."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Áp tỉ lệ cháy alkane, nhầm mol H2O lớn hơn CO2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s153",
  questionId: "chem11-hc-q153",
  recognition: "Dạng oxi hóa alkylbenzene: KMnO4 đun nóng tác động mạch nhánh có H benzylic; đối chiếu hiện tượng benzene–toluene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Khi đun nóng toluene với dung dịch KMnO4 trong điều kiện phù hợp, phần bị oxi hóa chủ yếu là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Mạch nhánh benzylic bị oxi hóa về nhóm carboxyl/benzoate tùy môi trường."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Cho benzene làm mất màu KMnO4 như toluene hoặc cho vòng bị phá trước mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s154",
  questionId: "chem11-hc-q154",
  recognition: "Dạng oxi hóa alkylbenzene: KMnO4 đun nóng tác động mạch nhánh có H benzylic; đối chiếu hiện tượng benzene–toluene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Để phân biệt benzene và toluene bằng KMnO4, cách phù hợp là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Toluene có mạch nhánh bị oxi hóa; benzene bền trong điều kiện thí nghiệm này."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Cho benzene làm mất màu KMnO4 như toluene hoặc cho vòng bị phá trước mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s155",
  questionId: "chem11-hc-q155",
  recognition: "Dạng oxi hóa alkylbenzene: KMnO4 đun nóng tác động mạch nhánh có H benzylic; đối chiếu hiện tượng benzene–toluene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Ethylbenzene C6H5CH2CH3 bị oxi hóa mạnh ở mạch nhánh có thể tạo sản phẩm vòng mang nhóm. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Mạch nhánh có H ở carbon benzylic bị oxi hóa về nhóm –COOH trong mô hình chương trình."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Cho benzene làm mất màu KMnO4 như toluene hoặc cho vòng bị phá trước mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s156",
  questionId: "chem11-hc-q156",
  recognition: "Dạng oxi hóa alkylbenzene: KMnO4 đun nóng tác động mạch nhánh có H benzylic; đối chiếu hiện tượng benzene–toluene.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Hỗn hợp 0,20 mol benzene và toluene khi cháy tạo 1,30 mol CO2. Số mol toluene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Gọi x,y: x+y=0,20; 6x+7y=1,30. Thế x=0,20−y được y=0,10 mol."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Cho benzene làm mất màu KMnO4 như toluene hoặc cho vòng bị phá trước mạch nhánh."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s157",
  questionId: "chem11-hc-q157",
  recognition: "Dạng thí nghiệm arene: xác định phản ứng mục tiêu, điều kiện, hiện tượng và nguy cơ trước khi kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Khi tiến hành thí nghiệm nitro hóa benzene, thao tác phù hợp là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Benzene dễ cháy, hơi độc và hỗn hợp acid ăn mòn nên cần tủ hút, PPE, gia nhiệt kiểm soát."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Dùng lửa trần, ngửi trực tiếp, bỏ qua tủ hút và kiểm soát hỗn hợp acid/chất dễ cháy."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s158",
  questionId: "chem11-hc-q158",
  recognition: "Dạng thí nghiệm arene: xác định phản ứng mục tiêu, điều kiện, hiện tượng và nguy cơ trước khi kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Sản phẩm nitrobenzene thường được mô tả là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Nitrobenzene là chất lỏng dầu vàng nhạt trong mô tả thí nghiệm."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Dùng lửa trần, ngửi trực tiếp, bỏ qua tủ hút và kiểm soát hỗn hợp acid/chất dễ cháy."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s159",
  questionId: "chem11-hc-q159",
  recognition: "Dạng thí nghiệm arene: xác định phản ứng mục tiêu, điều kiện, hiện tượng và nguy cơ trước khi kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Trong thí nghiệm KMnO4 có đun nóng với hai mẫu benzene và toluene, mẫu cho sự mất màu/biến đổi rõ là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Mạch nhánh CH3 của toluene bị oxi hóa, benzene không tương tự."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Dùng lửa trần, ngửi trực tiếp, bỏ qua tủ hút và kiểm soát hỗn hợp acid/chất dễ cháy."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s160",
  questionId: "chem11-hc-q160",
  recognition: "Dạng thí nghiệm arene: xác định phản ứng mục tiêu, điều kiện, hiện tượng và nguy cơ trước khi kết luận.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Khi khảo sát phản ứng cộng chlorine vào benzene, yêu cầu an toàn quan trọng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Chlorine độc và benzene dễ cháy/độc; phải kiểm soát phát tán và nguồn năng lượng."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Dùng lửa trần, ngửi trực tiếp, bỏ qua tủ hút và kiểm soát hỗn hợp acid/chất dễ cháy."
  ],
  reviewSuggestions: [
    "Vẽ hoặc ghi rõ cấu trúc/phương trình trước khi chọn; kiểm tra điều kiện và bảo toàn nguyên tử."
  ]
},
{
  id: "chem11-hc-s161",
  questionId: "chem11-hc-q161",
  recognition: "Dạng điều chế công nghiệp: nhận reforming/vòng hóa–dehydrogen hóa, bảo toàn C và H, phân biệt với cracking.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Nguồn nguyên liệu công nghiệp quan trọng để thu arene là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "BTX được tách/tạo trong quá trình chế biến dầu mỏ và reforming hydrocarbon."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Cho reforming luôn làm giảm số C hoặc không bảo toàn H2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s162",
  questionId: "chem11-hc-q162",
  recognition: "Dạng điều chế công nghiệp: nhận reforming/vòng hóa–dehydrogen hóa, bảo toàn C và H, phân biệt với cracking.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Phương trình reforming cyclohexane đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Dehydrogen hóa cyclohexane giữ 6 C và tách 3H2 để tạo benzene."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Cho reforming luôn làm giảm số C hoặc không bảo toàn H2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s163",
  questionId: "chem11-hc-q163",
  recognition: "Dạng điều chế công nghiệp: nhận reforming/vòng hóa–dehydrogen hóa, bảo toàn C và H, phân biệt với cracking.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Nếu n-hexane reforming thành benzene và chỉ có H2 là sản phẩm phụ, phương trình đúng là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Chênh lệch 8 H tương ứng 4H2; số carbon được giữ nguyên."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Cho reforming luôn làm giảm số C hoặc không bảo toàn H2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s164",
  questionId: "chem11-hc-q164",
  recognition: "Dạng điều chế công nghiệp: nhận reforming/vòng hóa–dehydrogen hóa, bảo toàn C và H, phân biệt với cracking.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Điểm phân biệt reforming tạo arene với cracking là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Theo dõi số carbon trước–sau là dấu hiệu phân biệt trực tiếp."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Cho reforming luôn làm giảm số C hoặc không bảo toàn H2."
  ],
  reviewSuggestions: [
    "Lập bảng tên–công thức–dữ kiện hoặc tác nhân–điều kiện–sản phẩm để tránh chọn theo trí nhớ rời rạc."
  ]
},
{
  id: "chem11-hc-s165",
  questionId: "chem11-hc-q165",
  recognition: "Dạng ứng dụng–an toàn: ghép ứng dụng với chất và chọn kiểm soát nguy cơ tại nguồn, không xả thải tùy tiện.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Styrene được dùng quan trọng làm nguyên liệu sản xuất. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Liên kết vinyl của styrene tham gia trùng hợp tạo polystyrene."
    }
  ],
  finalAnswer: "A",
  commonMistakes: [
    "Dùng benzene tùy tiện, chỉ dựa vào khẩu trang thường hoặc xả arene xuống cống."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s166",
  questionId: "chem11-hc-q166",
  recognition: "Dạng ứng dụng–an toàn: ghép ứng dụng với chất và chọn kiểm soát nguy cơ tại nguồn, không xả thải tùy tiện.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Một quy trình đang dùng benzene làm dung môi vệ sinh trong phòng kín. Cải tiến ưu tiên là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Kiểm soát tại nguồn bằng thay thế và kỹ thuật hiệu quả hơn chỉ dựa vào hành vi/PPE."
    }
  ],
  finalAnswer: "B",
  commonMistakes: [
    "Dùng benzene tùy tiện, chỉ dựa vào khẩu trang thường hoặc xả arene xuống cống."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s167",
  questionId: "chem11-hc-q167",
  recognition: "Dạng ứng dụng–an toàn: ghép ứng dụng với chất và chọn kiểm soát nguy cơ tại nguồn, không xả thải tùy tiện.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Cách xử lí chất thải chứa arene phù hợp là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "Không chuyển ô nhiễm sang nước/không khí; cần quản lí như chất thải nguy hại."
    }
  ],
  finalAnswer: "C",
  commonMistakes: [
    "Dùng benzene tùy tiện, chỉ dựa vào khẩu trang thường hoặc xả arene xuống cống."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
},
{
  id: "chem11-hc-s168",
  questionId: "chem11-hc-q168",
  recognition: "Dạng ứng dụng–an toàn: ghép ứng dụng với chất và chọn kiểm soát nguy cơ tại nguồn, không xả thải tùy tiện.",
  detailedSteps: [
    {
      order: 1,
      title: "Nhận dạng và chọn quy tắc",
      explanation: "Dấu hiệu trọng tâm: Phương án đúng đồng thời về nguồn, điều chế, ứng dụng và an toàn là. Trước khi chọn đáp án, xác định đúng cấu trúc, dữ kiện và điều kiện chi phối của dạng bài."
    },
    {
      order: 2,
      title: "Đối chiếu và kết luận",
      explanation: "D là phương án duy nhất đúng ở cả bốn lớp: nguồn, phản ứng, ứng dụng và kiểm soát nguy cơ."
    }
  ],
  finalAnswer: "D",
  commonMistakes: [
    "Dùng benzene tùy tiện, chỉ dựa vào khẩu trang thường hoặc xả arene xuống cống."
  ],
  reviewSuggestions: [
    "Tách từng dữ kiện thành một bộ lọc; chỉ chọn phương án thỏa mãn đồng thời cấu trúc, điều kiện, hiện tượng và an toàn."
  ]
}
];
