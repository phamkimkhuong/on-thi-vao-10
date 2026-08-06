import React, { useState } from 'react';
import type { SurveyConfig } from '../../types/surveyTypes';
import { SurveyStepRenderer } from './SurveyStepRenderer';
import { surveyService } from '../../services/surveyService';
import { useAppStore } from '../../services/store';
import { X, ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import type { GradeCode, SubjectCode } from '../../types';

interface SurveyModalProps {
  isOpen: boolean;
  config: SurveyConfig;
  onClose: () => void;
}

export const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, config, onClose }) => {
  const { selectedGrade, selectedSubject, setGrade, setSubject } = useAppStore();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>(() => {
    const savedData = surveyService.getSurveyState().data || {};
    return {
      grade: selectedGrade,
      preferredSubject: selectedSubject,
      ...savedData,
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Khi mở lại Modal (ví dụ bấm từ Sidebar), tự động nạp lại câu trả lời cũ để học sinh xem / chỉnh sửa
  React.useEffect(() => {
    if (isOpen) {
      const savedData = surveyService.getSurveyState().data || {};
      setAnswers({
        grade: selectedGrade,
        preferredSubject: selectedSubject,
        ...savedData,
      });
      setCurrentStep(0);
      setIsCompleted(false);
    }
  }, [isOpen, selectedGrade, selectedSubject]);

  if (!isOpen) return null;

  const currentQuestion = config.questions[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === config.questions.length - 1;
  const currentAnswer = answers[currentQuestion.id];

  // Validation: kiểm tra câu hỏi hiện tại có giá trị hợp lệ để tiếp tục không
  const canProceed = () => {
    if (currentQuestion.isOptional) return true;
    if (currentQuestion.type === 'free_text') return true;

    if (currentQuestion.type === 'emoji_scale') {
      if (!currentAnswer) return false;
      const rating = typeof currentAnswer === 'number' ? currentAnswer : currentAnswer?.rating;
      if (!rating) return false;
      // Bắt buộc phải chọn / nhập lý do nếu chọn 1 hoặc 2
      if (rating === 1 || rating === 2) {
        const reason = typeof currentAnswer === 'object' ? currentAnswer?.reason : null;
        if (!reason || reason.trim() === '' || reason === 'other' || reason.trim() === 'other:') {
          return false;
        }
      }
      return true;
    }

    if (currentQuestion.type === 'multi_choice') {
      if (!Array.isArray(currentAnswer) || currentAnswer.length === 0) return false;
      // Nếu chọn 'other' nhưng chưa gõ nội dung thì chưa cho tiếp tục
      const hasEmptyOther = currentAnswer.some(
        (val) => val === 'other' || (typeof val === 'string' && val.trim() === 'other:')
      );
      if (hasEmptyOther) return false;
      return true;
    }

    if (currentQuestion.type === 'single_choice') {
      if (!currentAnswer) return false;
      // Nếu chọn 'other' nhưng chưa gõ nội dung thì chưa cho tiếp tục
      if (currentAnswer === 'other' || (typeof currentAnswer === 'string' && currentAnswer.trim() === 'other:')) {
        return false;
      }
      return true;
    }

    return currentAnswer !== undefined && currentAnswer !== null && currentAnswer !== '';
  };

  const handleStepChange = (val: any) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: val }));
  };

  const handleNext = () => {
    if (isLastStep) {
      handleSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    surveyService.skipSurvey();
    onClose();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await surveyService.saveSurvey({
        grade: answers.grade as GradeCode,
        goal: answers.goal,
        preferredSubject: answers.preferredSubject as SubjectCode,
        selfAssessedLevel: answers.selfAssessedLevel,
        primaryDevice: answers.primaryDevice,
        uiRating: answers.uiRating,
        wishedFeatures: answers.wishedFeatures,
        studyHurdles: answers.studyHurdles,
        npsScore: answers.npsScore,
        additionalComments: answers.additionalComments,
      });

      // Tự động cập nhật Lớp & Môn học trong Zustand Store theo lựa chọn của người dùng
      if (answers.grade && (answers.grade === 'grade9' || answers.grade === 'grade10' || answers.grade === 'grade11' || answers.grade === 'grade12')) {
        setGrade(answers.grade);
      }
      if (answers.preferredSubject) {
        setSubject(answers.preferredSubject as SubjectCode);
      }

      setIsCompleted(true);
      setTimeout(() => {
        onClose();
      }, 1800);
    } catch (error) {
      console.error('Lỗi khi lưu kết quả khảo sát:', error);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = Math.round(((currentStep + 1) / config.questions.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-tight">
                {config.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {config.subtitle}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSkip}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            title="Bỏ qua"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isCompleted && (
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 overflow-hidden">
            <div
              className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Main Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isCompleted ? (
            <div className="py-10 flex flex-col items-center justify-center text-center animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                Cảm ơn bạn rất nhiều! 🎉
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
                Chúng mình đã ghi nhận phản hồi và sẽ tối ưu ứng dụng để bạn có trải nghiệm học tốt nhất!
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {/* Question Header */}
              <div>
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  Câu hỏi {currentStep + 1} / {config.questions.length}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {currentQuestion.title}
                </h3>
                {currentQuestion.description && (
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {currentQuestion.description}
                  </p>
                )}
              </div>

              {/* Step Dynamic Content */}
              <div className="mt-2">
                <SurveyStepRenderer
                  question={currentQuestion}
                  value={currentAnswer}
                  answers={answers}
                  onChange={handleStepChange}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {!isCompleted && (
          <div className="p-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={isFirstStep}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                isFirstStep
                  ? 'opacity-0 pointer-events-none'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleSkip}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 px-2 py-1 transition-colors cursor-pointer"
              >
                Để sau
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed() || isSubmitting}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all cursor-pointer shadow-lg ${
                  canProceed() && !isSubmitting
                    ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-indigo-500/20 active:scale-95'
                    : 'bg-slate-300 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed shadow-none'
                }`}
              >
                {isSubmitting ? (
                  <span>Đang lưu...</span>
                ) : isLastStep ? (
                  <span>Hoàn thành 🚀</span>
                ) : (
                  <>
                    <span>Tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
