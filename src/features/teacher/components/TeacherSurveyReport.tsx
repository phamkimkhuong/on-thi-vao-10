import React, { useEffect, useState } from 'react';
import { surveyService } from '../../../services/surveyService';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Loader, MessageSquareHeart, Users, Star, ThumbsUp, Layers, RefreshCw, X, Eye } from 'lucide-react';

const GRADE_LABELS: Record<string, string> = {
  grade9: 'Lớp 9 (Ôn thi vào 10)',
  grade10: 'Lớp 10 (Chương trình mới)',
  grade11: 'Lớp 11 (Chương trình THPT nâng cao)',
  grade12: 'Lớp 12 (Ôn thi tốt nghiệp THPT & ĐH)',
};

const GOAL_LABELS: Record<string, string> = {
  exam10: 'Ôn thi tuyển sinh vào lớp 10',
  school_score: 'Nâng điểm số trên lớp',
  gpa_score: 'Nâng điểm số & Thi giữa kỳ/học kỳ',
  university_prep: 'Chuẩn bị sớm cho kỳ thi THPT & ĐGNL',
  university_exam: 'Ôn thi tốt nghiệp THPT & Đại học',
  assessment_exam: 'Luyện thi Đánh giá năng lực / Tư duy',
  self_study: 'Tự học trước chương trình',
  test_prep: 'Luyện thi học sinh giỏi / Trường chuyên',
};

const SUBJECT_LABELS: Record<string, string> = {
  math: 'Toán học 📐',
  english: 'Tiếng Anh 🇬🇧',
  chemistry: 'Hóa học 🧪',
  physics: 'Vật lý ⚡',
  biology: 'Sinh học 🌱',
};

const FEATURE_LABELS: Record<string, string> = {
  video: 'Video bài giảng ngắn',
  battle: 'Thi đấu & Đấu trường kiến thức',
  reminder: 'Lịch học tự động & Nhắc nhở',
  flashcard: 'Thẻ ghi nhớ Flashcard',
  advanced_bank: 'Ngân hàng đề thi thử các tỉnh',
};

const HURDLE_LABELS: Record<string, string> = {
  confused: 'Có, chưa biết bắt đầu từ chương nào 🌀',
  clear: 'Không, đã theo đúng Lộ trình Roadmap 🎯',
  need_ai: 'Muốn AI Gia sư lập lộ trình cá nhân hóa 🤖',
};

export const TeacherSurveyReport: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);

  const fetchSummary = async () => {
    setLoading(true);
    try {
      const summary = await surveyService.getAdminSurveySummary();
      setData(summary);
    } catch (error) {
      console.error('Lỗi khi nạp báo cáo khảo sát O(1) read:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <Loader className="w-8 h-8 animate-spin text-primary mb-3" />
        <p className="text-sm font-bold text-muted-foreground">Đang tải báo cáo khảo sát (O(1) Read)...</p>
      </div>
    );
  }

  const total = data?.totalResponses || 0;
  const grades = data?.grades || {};
  const uiRatings = data?.uiRatings || {};
  const latestFeedbacks: any[] = data?.latestFeedbacks || [];

  // Tính điểm đánh giá UI trung bình
  let totalRatingSum = 0;
  let totalRatingCount = 0;
  Object.entries(uiRatings).forEach(([score, count]) => {
    const numScore = parseInt(score, 10);
    const numCount = Number(count);
    if (!isNaN(numScore) && !isNaN(numCount)) {
      totalRatingSum += numScore * numCount;
      totalRatingCount += numCount;
    }
  });
  const avgRating = totalRatingCount > 0 ? (totalRatingSum / totalRatingCount).toFixed(1) : '5.0';

  return (
    <div className="space-y-6 animate-fadeIn relative">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card/60 p-5 rounded-3xl border border-border/40 shadow-xs">
        <div>
          <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
            <MessageSquareHeart className="w-6 h-6 text-indigo-500" />
            Báo Cáo Khảo Sát & Phản Hồi Học Sinh
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Dữ liệu gom cụm tối ưu 1-Read Firestore cho Admin • Bấm vào phản hồi học sinh để xem chi tiết đầy đủ.
          </p>
        </div>
        <button
          type="button"
          onClick={fetchSummary}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-xs font-extrabold border border-border/30 transition-all cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Làm mới</span>
        </button>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="rounded-3xl border-border/40 bg-card">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">Tổng Số Phản Hồi</p>
              <h3 className="text-2xl font-black text-foreground mt-0.5">{total}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/40 bg-card">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-500">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">Đánh Giá Giao Diện Trung Bình</p>
              <h3 className="text-2xl font-black text-foreground mt-0.5">{avgRating} / 5.0 ⭐</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/40 bg-card">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider">Khối Lớp Tham Gia</p>
              <h3 className="text-2xl font-black text-foreground mt-0.5">
                {Object.keys(grades).length} Khối lớp
              </h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Phân bố theo Khối Lớp */}
        <Card className="rounded-3xl border-border/40 bg-card">
          <CardHeader>
            <CardTitle className="text-base font-extrabold flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Phân Bố Học Sinh Theo Khối Lớp
            </CardTitle>
            <CardDescription className="text-xs">Số lượng học sinh hoàn thành khảo sát theo từng lớp</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { code: 'grade9', label: 'Lớp 9 (Ôn thi vào 10)' },
              { code: 'grade10', label: 'Lớp 10' },
              { code: 'grade11', label: 'Lớp 11' },
              { code: 'grade12', label: 'Lớp 12 (Thi THPT)' },
            ].map((g) => {
              const count = Number(grades[g.code] || 0);
              const percent = total > 0 ? Math.round((count / total) * 100) : 0;
              return (
                <div key={g.code} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span className="text-foreground">{g.label}</span>
                    <span className="text-primary">{count} học sinh ({percent}%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Mức Độ Hài Lòng UI */}
        <Card className="rounded-3xl border-border/40 bg-card">
          <CardHeader>
            <CardTitle className="text-base font-extrabold flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-amber-500" />
              Mức Độ Hài Lòng Về Giao Diện & Màu Sắc
            </CardTitle>
            <CardDescription className="text-xs">Tỉ lệ bình chọn từ 1 Star đến 5 Star</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { score: 5, label: '5 ⭐ — Rất tuyệt vời' },
              { score: 4, label: '4 ⭐ — Tốt / Hài lòng' },
              { score: 3, label: '3 ⭐ — Bình thường' },
              { score: 2, label: '2 ⭐ — Cần cải thiện' },
              { score: 1, label: '1 ⭐ — Chưa tốt' },
            ].map((r) => {
              const count = Number(uiRatings[r.score] || 0);
              const percent = totalRatingCount > 0 ? Math.round((count / totalRatingCount) * 100) : 0;
              return (
                <div key={r.score} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-extrabold">
                    <span className="text-foreground">{r.label}</span>
                    <span className="text-amber-600 dark:text-amber-400">{count} chọn ({percent}%)</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Latest Feedbacks List */}
      <Card className="rounded-3xl border-border/40 bg-card">
        <CardHeader>
          <CardTitle className="text-base font-extrabold flex items-center gap-2">
            <MessageSquareHeart className="w-5 h-5 text-indigo-500" />
            Danh Sách Phản Hồi & Lời Nhắn Gần Nhất
          </CardTitle>
          <CardDescription className="text-xs">Bấm vào bất kỳ dòng nào để xem chi tiết đầy đủ câu trả lời của học sinh đó</CardDescription>
        </CardHeader>
        <CardContent>
          {latestFeedbacks.length === 0 ? (
            <div className="py-8 text-center text-xs text-muted-foreground font-semibold">
              Chưa có phản hồi nào được ghi nhận.
            </div>
          ) : (
            <div className="divide-y divide-border/20 max-h-[450px] overflow-y-auto">
              {latestFeedbacks.slice().reverse().map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedFeedback(item)}
                  className="py-3.5 px-3 rounded-2xl hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-all cursor-pointer space-y-1.5 group border border-transparent hover:border-indigo-500/20"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                    <div className="flex items-center gap-2 font-extrabold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <span>{item.userEmail || 'Học sinh'}</span>
                      <Eye className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold">
                      {item.grade && (
                        <span className="px-2 py-0.5 rounded-md bg-secondary text-foreground uppercase">
                          {item.grade}
                        </span>
                      )}
                      <span>{item.submittedAt ? new Date(item.submittedAt).toLocaleDateString('vi-VN') : ''}</span>
                    </div>
                  </div>
                  {item.comments && (
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium bg-secondary/30 p-2.5 rounded-xl border border-border/20 line-clamp-2">
                      "{item.comments}"
                    </p>
                  )}
                  {Array.isArray(item.wishedFeatures) && item.wishedFeatures.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap text-[10px] text-muted-foreground font-semibold">
                      <span>Tính năng mong muốn:</span>
                      {item.wishedFeatures.map((f: string, fIdx: number) => {
                        const cleanVal = f.startsWith('other:') ? f.replace(/^other:?\s*/, 'Khác: ') : (FEATURE_LABELS[f] || f);
                        return (
                          <span key={fIdx} className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 font-bold">
                            {cleanVal}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal Chi Tiết Phản Hồi Khảo Sát */}
      {selectedFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
          <div className="relative w-full max-w-xl max-h-[90vh] bg-card border border-border/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-scaleUp">
            {/* Modal Header */}
            <div className="p-5 border-b border-border/30 flex items-center justify-between bg-secondary/40">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <MessageSquareHeart size={22} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground">Chi Tiết Phản Hồi Khảo Sát</h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    {selectedFeedback.userEmail || 'Học sinh'} • {selectedFeedback.submittedAt ? new Date(selectedFeedback.submittedAt).toLocaleString('vi-VN') : ''}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFeedback(null)}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-4 overflow-y-auto flex-1">
              {/* Khối Lớp & Môn Học */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/30">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Khối Lớp</div>
                  <div className="text-sm font-extrabold text-foreground mt-0.5">
                    {GRADE_LABELS[selectedFeedback.grade] || selectedFeedback.grade || 'Chưa chọn'}
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/30">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Môn Học Tập Trung</div>
                  <div className="text-sm font-extrabold text-foreground mt-0.5">
                    {SUBJECT_LABELS[selectedFeedback.preferredSubject || selectedFeedback.fullSurvey?.preferredSubject] || selectedFeedback.preferredSubject || 'Chưa chọn'}
                  </div>
                </div>
              </div>

              {/* Mục Tiêu Học Tập */}
              {(selectedFeedback.goal || selectedFeedback.fullSurvey?.goal) && (
                <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/30">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Mục Tiêu Học Tập Lớn Nhất</div>
                  <div className="text-sm font-extrabold text-foreground mt-0.5">
                    {GOAL_LABELS[selectedFeedback.goal || selectedFeedback.fullSurvey?.goal] || selectedFeedback.goal || selectedFeedback.fullSurvey?.goal}
                  </div>
                </div>
              )}

              {/* Đánh Giá Giao Diện */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                <div className="text-[11px] font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">Đánh Giá Màu Sắc & Giao Diện</div>
                <div className="text-sm font-extrabold text-amber-950 dark:text-amber-100 mt-0.5 flex items-center gap-2">
                  <span>
                    {typeof selectedFeedback.uiRating === 'number'
                      ? `${selectedFeedback.uiRating} / 5 ⭐`
                      : (selectedFeedback.uiRating?.rating ? `${selectedFeedback.uiRating.rating} / 5 ⭐` : 'Chưa đánh giá')}
                  </span>
                </div>
                {typeof selectedFeedback.uiRating === 'object' && selectedFeedback.uiRating?.reason && (
                  <div className="text-xs text-amber-800 dark:text-amber-300 mt-1 font-semibold">
                    Lý do chưa hài lòng: "{selectedFeedback.uiRating.reason.startsWith('other:') ? selectedFeedback.uiRating.reason.replace(/^other:?\s*/, 'Khác: ') : selectedFeedback.uiRating.reason}"
                  </div>
                )}
              </div>

              {/* Tính Năng Mong Muốn */}
              {Array.isArray(selectedFeedback.wishedFeatures) && selectedFeedback.wishedFeatures.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/30 space-y-2">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Tính Năng Mong Muốn Bổ Sung</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedFeedback.wishedFeatures.map((f: string, fIdx: number) => {
                      const cleanVal = f.startsWith('other:') ? f.replace(/^other:?\s*/, 'Ý kiến khác: ') : (FEATURE_LABELS[f] || f);
                      return (
                        <span key={fIdx} className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-bold">
                          {cleanVal}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Vướng Mắc Khi Học */}
              {(selectedFeedback.studyHurdles || selectedFeedback.fullSurvey?.studyHurdles) && (
                <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/30">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Phân Vân Về Cách Bắt Đầu Học</div>
                  <div className="text-xs font-bold text-foreground mt-0.5">
                    {HURDLE_LABELS[selectedFeedback.studyHurdles || selectedFeedback.fullSurvey?.studyHurdles] ||
                     (selectedFeedback.studyHurdles || selectedFeedback.fullSurvey?.studyHurdles)?.replace(/^other:?\s*/, 'Khác: ')}
                  </div>
                </div>
              )}

              {/* NPS Score */}
              {(selectedFeedback.npsScore !== undefined && selectedFeedback.npsScore !== null) && (
                <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/30">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Sẵn Sàng Giới Thiệu Bạn Bè (NPS)</div>
                  <div className="text-sm font-black text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {selectedFeedback.npsScore} / 10 🌟
                  </div>
                </div>
              )}

              {/* Góp Ý Tự Do */}
              {selectedFeedback.comments && (
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40">
                  <div className="text-[11px] font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">Góp Ý & Lời Nhắn Tự Do</div>
                  <p className="text-xs text-indigo-950 dark:text-indigo-100 font-medium mt-1 italic">
                    "{selectedFeedback.comments}"
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border/30 bg-secondary/20 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedFeedback(null)}
                className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
