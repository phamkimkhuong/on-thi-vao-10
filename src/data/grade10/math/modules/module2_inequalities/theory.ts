export const math10Qt3Theory: string[] = [
  '**1. Bất phương trình bậc nhất hai ẩn**\nCó dạng $ax+by\\le c$ hoặc với $<,>,\\ge$, trong đó $a^2+b^2>0$. Mỗi nghiệm là một cặp $(x;y)$, nên tập nghiệm được biểu diễn bằng một nửa mặt phẳng.',
  '**2. Đường biên và dấu bằng**\nĐường $ax+by=c$ chia mặt phẳng thành hai nửa. Với $\\le,\\ge$, đường biên thuộc miền nghiệm và vẽ nét liền; với $<,>$, đường biên bị loại và vẽ nét đứt.',
  '**3. Chọn nửa mặt phẳng**\nChọn điểm thử không nằm trên đường biên, thường là $O(0;0)$. Thay vào bất phương trình: nếu đúng, lấy phía chứa điểm thử; nếu sai, lấy phía còn lại. Nếu đường biên đi qua O, phải chọn điểm khác.',
  '**4. Hệ bất phương trình**\nMiền nghiệm của hệ là **giao** các nửa mặt phẳng. Nó có thể rỗng, bị chặn hoặc không bị chặn. Các đỉnh ứng viên là giao điểm các đường biên nhưng phải thay lại toàn bộ hệ để loại giao điểm không thuộc miền.',
  '**5. Hàm mục tiêu tuyến tính**\n$$F(x;y)=px+qy$$\nTrên một miền đa giác khác rỗng, đóng và bị chặn, GTLN/GTNN đạt tại ít nhất một đỉnh. Nếu đường mức của F song song với một cạnh tối ưu, mọi điểm trên cạnh đó cùng đạt cực trị.',
  '**6. Miền không bị chặn**\nKhông được kết luận tự động “không có cực trị”. Miền không bị chặn vẫn có thể có GTNN hoặc GTLN; cần xét hướng tăng của F hoặc các đường mức. Nếu F tăng vô hạn theo một tia thuộc miền thì không có GTLN hữu hạn theo hướng đó.',
  '**7. Ràng buộc nguyên**\nNếu $x,y$ phải là số nguyên, nghiệm tối ưu liên tục tại một đỉnh không nguyên chưa chắc dùng được. Cần xét các điểm nguyên khả thi, đặc biệt quanh biên/đỉnh tối ưu, hoặc liệt kê khi miền nhỏ.',
  '**8. Mô hình hóa bài toán thực tế**\nChọn biến và đơn vị; thêm $x,y\\ge0$ cùng điều kiện nguyên nếu cần; dịch từng nguồn lực thành bất phương trình; lập hàm lợi nhuận/chi phí; tìm miền khả thi; tối ưu; kiểm tra phương án có ý nghĩa thực tế.',
  '**9. Quy trình tính toán**\nVẽ đường biên; xác định đúng phía; lấy giao; tìm và kiểm tra các đỉnh; tính F tại đỉnh nếu đủ điều kiện; xử lí riêng miền không bị chặn hoặc biến nguyên; trả lời kèm đơn vị.',
  '**10. Lỗi cần tránh**\n- Lấy hợp thay giao các nửa mặt phẳng.\n- Chọn điểm thử nằm trên đường biên.\n- Vẽ nét liền cho bất phương trình nghiêm.\n- Giữ mọi giao điểm đường biên mà không kiểm tra hệ.\n- Áp dụng định lý đỉnh cho miền rỗng/không bị chặn mà không phân tích.\n- Bỏ điều kiện nguyên của số sản phẩm.'
];

export const g10MathModule2TheoryByQuestionTypeId: Record<string, string[]> = {
  'math10-qt3': math10Qt3Theory
};
