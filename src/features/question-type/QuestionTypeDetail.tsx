import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mathQuestionTypes, mathQuestions, mathSolutions } from '../../data/mathData';
import { englishQuestionTypes, englishQuestions, englishSolutions } from '../../data/englishData';
import { useAppStore } from '../../services/store';
import { Tabs, TabItem } from '../../components/ui/tabs';
import { QuestionType, Question, Solution } from '../../types';
import { Card, CardHeader, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { 
  AlertTriangle, 
  Activity, 
  ChevronLeft, 
  PlayCircle,
  Lightbulb,
  CornerDownRight
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { getSubjectTheme } from '../../utils/theme';
import { getSubjectFromQuestionTypeId } from '../../utils/subject';

export const QuestionTypeDetail: React.FC = () => {
  const { questionTypeId } = useParams<{ questionTypeId: string }>();
  const navigate = useNavigate();
  const { selectedSubject, setSubject } = useAppStore();

  useEffect(() => {
    const subjectFromRoute = getSubjectFromQuestionTypeId(questionTypeId);
    if (subjectFromRoute && subjectFromRoute !== selectedSubject) {
      setSubject(subjectFromRoute);
    }
  }, [questionTypeId, selectedSubject, setSubject]);

  // Tìm dạng bài trực tiếp trong quá trình render (Derived State)
  const detail: QuestionType | null = questionTypeId
    ? (mathQuestionTypes.find(t => t.id === questionTypeId) || 
       englishQuestionTypes.find(t => t.id === questionTypeId) || null)
    : null;

  // Tìm câu hỏi mẫu đi kèm trực tiếp (Derived State)
  const exampleQuestion: Question | null = detail
    ? (detail.id.startsWith('math') 
       ? mathQuestions.find(item => item.questionTypeId === detail.id)
       : englishQuestions.find(item => item.questionTypeId === detail.id)) || null
    : null;

  // Tìm lời giải mẫu đi kèm trực tiếp (Derived State)
  const exampleSolution: Solution | null = exampleQuestion
    ? (detail?.id.startsWith('math')
       ? mathSolutions.find(s => s.questionId === exampleQuestion.id)
       : englishSolutions.find(s => s.questionId === exampleQuestion.id)) || null
    : null;

  if (!detail) {
    return (
      <div className="p-8 text-center text-muted-foreground font-semibold">
        Không tìm thấy thông tin chi tiết dạng bài. Vui lòng quay lại lộ trình.
      </div>
    );
  }

  const isMath = detail.id.startsWith('math');

  // Xây dựng tab items
  const tabItems: TabItem[] = [
    {
      id: 'recognition',
      label: '💡 Cách nhận biết',
      content: (
        <Card className={cn("border", getSubjectTheme(isMath ? 'math' : 'english').border)}>
          <CardContent className="p-6 space-y-4">
            <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
              <Lightbulb size={16} className="text-amber-500" /> Dấu hiệu xuất hiện trong đề bài:
            </h4>
            <ul className="space-y-3">
              {detail.recognitionSigns.map((sign: string, idx: number) => (
                <li key={idx} className="text-xs font-semibold text-muted-foreground flex items-start gap-2 leading-relaxed">
                  <span className="text-primary shrink-0 mt-0.5">•</span>
                  <LatexRenderer text={sign} />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      id: 'method',
      label: '📝 Quy trình giải',
      content: (
        <Card className={cn("border", getSubjectTheme(isMath ? 'math' : 'english').border)}>
          <CardContent className="p-6 space-y-4">
            <h4 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
              <Activity size={16} className="text-primary" /> Các bước thực hiện chuẩn chỉ:
            </h4>
            <div className="space-y-4">
              {detail.solvingSteps.map((step: string, idx: number) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground leading-relaxed pt-0.5">
                    <LatexRenderer text={step} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )
    },
    {
      id: 'mistakes',
      label: '🚨 Lỗi thường gặp',
      content: (
        <Card className="border-rose-500/10 bg-rose-50/5 dark:bg-rose-950/5">
          <CardContent className="p-6 space-y-4">
            <h4 className="font-extrabold text-sm text-rose-500 flex items-center gap-1.5">
              <AlertTriangle size={16} className="text-rose-500 animate-pulse" /> Các bẫy học sinh hay mắc phải:
            </h4>
            <ul className="space-y-3">
              {detail.commonMistakes.map((mistake: string, idx: number) => (
                <li key={idx} className="text-xs font-semibold text-rose-700 dark:text-rose-400 flex items-start gap-2.5 leading-relaxed bg-rose-100/30 dark:bg-rose-950/20 p-2.5 rounded-xl">
                  <CornerDownRight size={14} className="shrink-0 mt-0.5 text-rose-500" />
                  <LatexRenderer text={mistake} />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      id: 'example',
      label: '🔬 Ví dụ mẫu',
      content: (
        <div className="space-y-4">
          {exampleQuestion ? (
            <>
              {/* Đề bài ví dụ */}
              <Card className={cn("border", getSubjectTheme(isMath ? 'math' : 'english').border)}>
                <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 py-4">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Đề bài ví dụ</span>
                </CardHeader>
                <CardContent className="p-5 font-semibold text-xs leading-relaxed text-foreground">
                  <LatexRenderer text={exampleQuestion.content} />
                  {exampleQuestion.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {exampleQuestion.options.map((opt: string, i: number) => (
                        <div key={i} className="p-3 bg-secondary rounded-xl border border-border/10">
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Lời giải mẫu */}
              {exampleSolution && (
                <Card className={cn("border", getSubjectTheme(isMath ? 'math' : 'english').border)}>
                  <CardHeader className="bg-slate-50/50 dark:bg-slate-900/10 py-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Lời giải phân tích từng bước</span>
                  </CardHeader>
                  <CardContent className="p-5 space-y-6">
                    <div className={cn(
                      "text-xs font-semibold text-muted-foreground p-3.5 rounded-xl border",
                      getSubjectTheme(isMath ? 'math' : 'english').bg,
                      getSubjectTheme(isMath ? 'math' : 'english').border
                    )}>
                      <span className="font-extrabold text-foreground block mb-1">💡 Tư duy nhận diện:</span>
                      <LatexRenderer text={exampleSolution.recognition} />
                    </div>

                    <div className="space-y-6">
                      {exampleSolution.detailedSteps.map((step: any, idx: number) => (
                        <div key={idx} className="space-y-1.5">
                          <h5 className="font-extrabold text-xs text-foreground flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">
                              {step.order}
                            </span>
                            {step.title}
                          </h5>
                          <div className="pl-7 space-y-2 text-xs font-semibold text-muted-foreground leading-relaxed">
                            <LatexRenderer text={step.explanation} />
                            {step.formula && (
                              <div className="p-2.5 bg-secondary/50 rounded-lg text-foreground border border-border/5">
                                <LatexRenderer text={step.formula} block={true} />
                              </div>
                            )}
                            {step.result && (
                              <p className="text-primary font-bold">
                                👉 Kết quả bước: <LatexRenderer text={step.result} />
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border/50 pt-4 flex flex-col sm:flex-row justify-between text-xs gap-3">
                      <div className="font-extrabold text-foreground">
                        Đáp án cuối cùng: <span className="text-primary font-black"><LatexRenderer text={exampleSolution.finalAnswer} /></span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <div className="p-8 text-center text-muted-foreground text-xs font-semibold bg-card rounded-xl border border-border/50">
              Hiện tại chưa có ví dụ mẫu cho dạng bài này.
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Nút Back về lộ trình */}
      <button 
        onClick={() => navigate('/roadmap')}
        className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
      >
        <ChevronLeft size={16} /> Quay lại Lộ trình học
      </button>

      {/* Header Dạng bài */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-card border border-border p-6 rounded-2xl shadow-sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className={cn(
              'text-[10px] font-bold px-2 py-0.5 rounded-full',
              getSubjectTheme(isMath ? 'math' : 'english').badge
            )}>
              {isMath ? '📐 Toán học lớp 9' : '🗣️ Tiếng Anh ôn thi'}
            </span>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-muted-foreground font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Tần suất: {detail.examFrequency === 'high' ? 'Hay thi (Cao)' : 'Trung bình'}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-foreground tracking-tight leading-snug">
            {detail.name}
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl font-semibold">
            {detail.description}
          </p>
        </div>

        <Button 
          onClick={() => navigate(`/practice/${detail.id}`)}
          className="font-bold text-xs px-5 py-3 shrink-0 active:scale-[0.98] w-full md:w-auto shadow-md"
        >
          <PlayCircle size={16} /> Bắt đầu Luyện tập ngay
        </Button>
      </div>

      {/* Tabs nội dung chi tiết */}
      <Tabs items={tabItems} defaultTabId="recognition" />

    </div>
  );
};
export default QuestionTypeDetail;
