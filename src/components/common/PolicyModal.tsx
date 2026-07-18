import React from 'react';
import { X, ShieldCheck, FileText, CreditCard, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/45 backdrop-blur-xs flex items-center justify-center p-4 z-55 animate-fade-in">
      <div className="bg-card/95 border border-border/50 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-scale-in max-h-[85vh] flex flex-col glass">

        {/* Modal Header */}
        <div className="px-6 py-4.5 border-b border-border/40 flex items-center justify-between bg-secondary/15">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck size={16} />
            </div>
            <span className="font-black text-xs uppercase tracking-wider text-foreground">Điều khoản & Chính sách sử dụng</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng bảng điều khoản và chính sách"
            className="p-1.5 rounded-xl hover:bg-secondary text-muted-foreground transition-all cursor-pointer hover:text-foreground active:scale-95 shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">

          {/* Section 1: Điều khoản dịch vụ */}
          <div className="space-y-2.5">
            <h4 className="font-black text-sm text-foreground flex items-center gap-1.5 border-b border-border/40 pb-1.5">
              <FileText size={15} className="text-primary" />
              1. Điều khoản Dịch vụ (Terms of Service)
            </h4>
            <div className="text-[11px] font-semibold text-muted-foreground leading-relaxed space-y-2">
              <p>
                Chào mừng bạn đến với <strong>ezonthi</strong>. Bằng việc truy cập và sử dụng dịch vụ học tập trực tuyến trên website này, bạn đồng ý tuân thủ các quy định dưới đây:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Quyền sở hữu trí tuệ:</strong> Toàn bộ đề thi, lời giải chi tiết, sơ đồ tư duy lý thuyết và nội dung hỗ trợ học tập đều thuộc bản quyền của chúng tôi. Nghiêm cấm sao chép, phân phối hoặc bán lại nội dung này dưới mọi hình thức thương mại.</li>
                <li><strong>Quy định sử dụng tài khoản:</strong> Mỗi tài khoản Premium chỉ dành cho một học sinh duy nhất sử dụng. Hệ thống hỗ trợ đăng nhập trên nhiều thiết bị nhưng không cho phép sử dụng đồng thời (học chung nhóm). Tài khoản vi phạm có thể bị khóa tạm thời.</li>
                <li><strong>Miễn trừ trách nhiệm:</strong> Kết quả thi thử và phản hồi của Gia sư Socratic chỉ mang tính chất tham khảo, giúp học sinh rèn luyện tư duy và kiểm tra lỗ hổng kiến thức, không thay thế cho điểm thi thật của Bộ Giáo dục & Đào tạo.</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Chính sách bảo mật */}
          <div className="space-y-2.5">
            <h4 className="font-black text-sm text-foreground flex items-center gap-1.5 border-b border-border/40 pb-1.5">
              <ShieldCheck size={15} className="text-emerald-500" />
              2. Chính sách Bảo mật Thông tin (Privacy Policy)
            </h4>
            <div className="text-[11px] font-semibold text-muted-foreground leading-relaxed space-y-2">
              <p>
                Chúng tôi tôn trọng và cam kết bảo vệ tuyệt đối quyền riêng tư và dữ liệu cá nhân của học sinh:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Dữ liệu thu thập:</strong> Email tài khoản Google đăng nhập, Họ tên hiển thị, Lịch sử làm bài thi, Tiến độ lộ trình học tập, Hình ảnh bài làm tự luận do học sinh tải lên.</li>
                <li><strong>Mục đích thu thập:</strong> Phục vụ việc lưu giữ tiến độ học tập trên các thiết bị khác nhau, chấm điểm bài giải tự luận bằng AI và phản hồi các ticket hỗ trợ.</li>
                <li><strong>Cam kết bảo mật:</strong> Dữ liệu lưu trữ an toàn trên máy chủ đám mây của Google (Firebase). Chúng tôi cam kết không cung cấp, chia sẻ hoặc bán thông tin cá nhân của học sinh cho bất kỳ đối tác quảng cáo hay bên thứ ba nào khác.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Chính sách thanh toán và hoàn tiền */}
          <div className="space-y-2.5">
            <h4 className="font-black text-sm text-foreground flex items-center gap-1.5 border-b border-border/40 pb-1.5">
              <CreditCard size={15} className="text-amber-500" />
              3. Chính sách Thanh toán & Hoàn tiền (Payment & Refund)
            </h4>
            <div className="text-[11px] font-semibold text-muted-foreground leading-relaxed space-y-2">
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Hình thức thanh toán:</strong> Website hỗ trợ kích hoạt gói Premium thông qua chuyển khoản ngân hàng hoặc quét mã QR tự động từ ứng dụng ngân hàng di động.</li>
                <li><strong>Kích hoạt dịch vụ:</strong> Tài khoản Premium sẽ được nâng cấp tự động ngay khi giao dịch chuyển khoản thành công được hệ thống ghi nhận (thông thường trong vòng 3 - 5 phút).</li>
                <li><strong>Chính sách hoàn phí:</strong> Do dịch vụ số có giá trị sử dụng ngay sau khi kích hoạt, chúng tôi <strong>không áp dụng chính sách hoàn trả học phí</strong> đối với các tài khoản Premium đã kích hoạt thành công (trừ trường hợp hệ thống gặp lỗi kỹ thuật nghiêm trọng liên tục quá 48h khiến học sinh không thể sử dụng và ban quản trị không thể khắc phục).</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Hỗ trợ và Giải quyết khiếu nại */}
          <div className="space-y-2.5">
            <h4 className="font-black text-sm text-foreground flex items-center gap-1.5 border-b border-border/40 pb-1.5">
              <HelpCircle size={15} className="text-indigo-500" />
              4. Giải quyết Khiếu nại & Hỗ trợ (Support & Dispute)
            </h4>
            <div className="text-[11px] font-semibold text-muted-foreground leading-relaxed space-y-2">
              <p>
                Khi gặp bất kỳ sự cố kỹ thuật hoặc lỗi liên quan đến kích hoạt tài khoản Premium, học sinh và phụ huynh có thể thực hiện theo quy trình sau:
              </p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Gửi yêu cầu trực tiếp qua tính năng <strong>"Hỗ trợ & Góp ý"</strong> ở thanh menu bên trái. Ban chuyên môn sẽ phản hồi qua email được cung cấp trong vòng tối đa 24h làm việc.</li>
                <li>Mọi tranh chấp hoặc khiếu nại phát sinh sẽ được ưu tiên giải quyết trên tinh thần thương lượng và hòa giải nhằm đảm bảo quyền lợi tốt nhất cho học sinh.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-border/30 flex justify-end bg-secondary/10 shrink-0">
          <Button
            onClick={onClose}
            className="font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-6 py-2 cursor-pointer h-9 rounded-xl active:scale-95 transition-all"
          >
            Tôi đã hiểu và Đồng ý
          </Button>
        </div>

      </div>
    </div>
  );
};
