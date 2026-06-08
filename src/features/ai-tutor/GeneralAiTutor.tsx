import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { aiService } from '../../services/aiService';
import { LatexRenderer } from '../../components/common/LatexRenderer';
import { db } from '../../services/firebase';
import { doc, onSnapshot, setDoc, deleteDoc } from 'firebase/firestore';
import {
  Send, Bot, User, Sparkles, Loader, Trash2, Brain,
  AlertTriangle, CheckCircle, Award
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface StudentProfile {
  strengths?: string[];
  weaknesses?: string[];
  learningSummary?: string;
  lastUpdated?: any;
}

export const GeneralAiTutor: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppStore();

  const [showDiagnostics, setShowDiagnostics] = useState(() => {
    return localStorage.getItem('otv10_ai_show_diagnostics') !== 'false';
  });

  const toggleDiagnostics = () => {
    setShowDiagnostics(prev => {
      const next = !prev;
      localStorage.setItem('otv10_ai_show_diagnostics', String(next));
      return next;
    });
  };

  const [subject, setSubject] = useState<'math' | 'english'>('math');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Trạng thái hồ sơ học sinh tải từ Firestore
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 1. Lắng nghe hồ sơ học sinh (student_profiles) theo thời gian thực
  useEffect(() => {
    if (!user?.uid) return;

    setIsLoadingProfile(true);
    const profileRef = doc(db, 'student_profiles', user.uid);

    const unsubscribe = onSnapshot(profileRef, (docSnap) => {
      if (docSnap.exists()) {
        setProfile(docSnap.data() as StudentProfile);
      } else {
        setProfile(null);
      }
      setIsLoadingProfile(false);
    }, (err) => {
      console.error("Lỗi khi lắng nghe hồ sơ học sinh:", err);
      setIsLoadingProfile(false);
    });

    return () => unsubscribe();
  }, [user?.uid]);

  // 2. Tải lịch sử chat chung cho môn học từ Firestore (hoặc tin nhắn mặc định)
  useEffect(() => {
    if (!user?.uid) return;

    const chatRef = doc(db, 'users', user.uid, 'general_chats', subject);

    onSnapshot(chatRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && Array.isArray(data.messages)) {
          setMessages(data.messages);
          return;
        }
      }

      // Default welcome message
      const defaultText = subject === 'math'
        ? `Chào em! Thầy là Gia sư AI môn Toán ôn thi vào 10. Thầy đã sẵn sàng đồng hành cùng em ôn luyện. Em đang vướng mắc ở chuyên đề nào (Rút gọn biểu thức, Hệ thức Vi-ét, Parabol, Hình học...) hay cần thầy ra bài tập thử thách nào không?`
        : `Hello! Thầy là Gia sư AI môn Tiếng Anh ôn thi vào 10. Thầy sẽ giúp em làm chủ các chủ điểm ngữ pháp, cấu trúc viết lại câu, từ vựng... Em có thắc mắc gì hoặc cần thầy ra đề luyện tập không?`;

      setMessages([{ role: 'model', text: defaultText }]);
    }, (err) => {
      console.error("Lỗi khi tải lịch sử chat:", err);
    });
  }, [user?.uid, subject]);

  // Tự động cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const saveChatHistory = async (updatedMessages: Message[]) => {
    if (!user?.uid) return;
    const chatRef = doc(db, 'users', user.uid, 'general_chats', subject);
    try {
      await setDoc(chatRef, {
        userId: user.uid,
        subjectId: subject,
        messages: updatedMessages,
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error("Lỗi khi lưu lịch sử chat:", err);
    }
  };

  const handleClearHistory = async () => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa lịch sử cuộc trò chuyện này?")) return;

    if (user?.uid) {
      const chatRef = doc(db, 'users', user.uid, 'general_chats', subject);
      try {
        await deleteDoc(chatRef);
        setMessages([]);
      } catch (err) {
        console.error("Lỗi khi xóa lịch sử chat:", err);
      }
    }
  };

  const handleSend = async (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();

    const textToSend = (customText || input).trim();
    if (!textToSend || isLoading) return;

    if (!customText) setInput('');
    setErrorMsg(null);

    const updatedMessages = [...messages, { role: 'user', text: textToSend } as Message];
    setMessages(updatedMessages);
    setIsLoading(true);

    const systemInstruction = subject === 'math'
      ? `Bạn là một Gia sư AI môn Toán tận tâm hỗ trợ học sinh Việt Nam ôn thi vào lớp 10.
Nhiệm vụ của bạn là: Hướng dẫn học sinh hiểu các bài toán đại số và hình học.
Tuyệt đối tuân thủ phương pháp Socratic: KHÔNG đưa ra đáp án hoặc lời giải đầy đủ ngay lập tức. Hãy gợi ý từng bước, đặt câu hỏi gợi mở, chỉ ra lỗi sai nhỏ để học sinh tự mình tư duy.
Sử dụng các công thức Toán định dạng LaTeX (kẹp giữa các dấu đô la $) để hiển thị đẹp mắt (ví dụ: $x^2 - 5x + 6 = 0$).`
      : `Bạn là một Gia sư AI môn Tiếng Anh tận tâm hỗ trợ học sinh Việt Nam ôn thi vào lớp 10.
Nhiệm vụ của bạn là: Hướng dẫn học sinh hiểu các cấu trúc ngữ pháp, từ vựng và phương pháp viết lại câu.
Tuyệt đối tuân thủ phương pháp Socratic: KHÔNG đưa ra kết quả làm bài ngay lập tức. Hãy gợi ý các quy tắc ngữ pháp, chỉ ra lỗi sai nhỏ, hoặc lấy ví dụ tương tự để học sinh tự sửa.`;

    try {
      // Chuẩn bị payload gửi đi (contents có tối đa 5 tin nhắn gần nhất do backend tối ưu)
      const contents = updatedMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const reply = await aiService.callGemini({
        contents,
        systemInstruction,
        useRag: true,
        subjectId: subject
      });

      const finalMessages = [...updatedMessages, { role: 'model', text: reply } as Message];
      setMessages(finalMessages);
      saveChatHistory(finalMessages);
    } catch (err: any) {
      console.error("Lỗi khi gửi tin nhắn cho AI:", err);
      const isLimitError = err.message?.includes("Hôm nay bạn đã dùng hết hạn mức") || err.message?.includes("resource-exhausted");

      const errorText = isLimitError
        ? "⚠️ Bạn đã hết hạn mức 20 lượt hỏi AI miễn phí trong ngày hôm nay. Hãy nâng cấp gói Premium để tiếp tục chat không giới hạn với Gia sư AI!"
        : `⚠️ Lỗi kết nối: ${err.message || 'Không thể liên lạc được với Gia sư AI.'}`;

      if (isLimitError) {
        setErrorMsg("LIMIT_EXHAUSTED");
      }

      const finalMessages = [...updatedMessages, { role: 'model', text: errorText } as Message];
      setMessages(finalMessages);
      saveChatHistory(finalMessages);
    } finally {
      setIsLoading(false);
    }
  };

  // Các gợi ý câu hỏi nhanh
  const mathSuggestions = [
    "Thầy giải thích lại cách áp dụng hệ thức Vi-ét",
    "Gợi ý cho em các bước chứng minh tứ giác nội tiếp",
    "Em hay quên điều kiện của delta, thầy ra bài tập giúp em luyện tập đi ạ",
    "Cho em một câu toán thực tế ôn thi lớp 10"
  ];

  const englishSuggestions = [
    "Hướng dẫn em cách đổi Although sang Despite",
    "Thầy cho em xin bài tập trắc nghiệm chia động từ",
    "Giải thích cấu trúc Câu điều kiện loại 2",
    "Nhắc nhở các lỗi sai thường gặp khi viết lại câu bị động"
  ];

  const suggestions = subject === 'math' ? mathSuggestions : englishSuggestions;

  return (
    <div className="flex-1 flex flex-col lg:flex-row lg:h-[calc(100vh-100px)] lg:overflow-hidden p-0 gap-3 bg-slate-50/50 dark:bg-slate-950/20">

      {/* 1. Cột trái: Khung Chat */}
      <div className="flex-1 flex flex-col bg-card border border-border/80 rounded-2xl shadow-xl overflow-hidden min-h-[500px] lg:min-h-0">

        {/* Chat Header */}
        <div className="p-3 border-b border-border bg-slate-50/50 dark:bg-slate-900/20 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/10">
              <Bot size={20} />
            </div>
            <div>
              <h2 className="text-sm font-black flex items-center gap-1.5 leading-none">
                Gia sư AI Ôn thi 10
                <span className="px-2 py-0.5 text-[8px] bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md font-bold flex items-center gap-0.5">
                  <Sparkles size={8} className="fill-amber-400" /> Socratic
                </span>
              </h2>
              <p className="text-[10px] font-semibold text-muted-foreground mt-1">Đã được nạp bộ tri thức RAG & Trí nhớ cá nhân hóa</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Subject selector tabs */}
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex gap-1 text-[11px] font-bold">
              <button
                onClick={() => setSubject('math')}
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-all cursor-pointer",
                  subject === 'math'
                    ? "bg-card text-foreground shadow-sm font-black"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Môn Toán
              </button>
              <button
                onClick={() => setSubject('english')}
                className={cn(
                  "px-3 py-1.5 rounded-lg transition-all cursor-pointer",
                  subject === 'english'
                    ? "bg-card text-foreground shadow-sm font-black"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Tiếng Anh
              </button>
            </div>

            <button
              onClick={toggleDiagnostics}
              title={showDiagnostics ? "Ẩn Hồ sơ năng lực AI" : "Hiện Hồ sơ năng lực AI"}
              className={cn(
                "p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs font-bold border",
                showDiagnostics
                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20"
                  : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground border-border/60"
              )}
            >
              <Brain size={16} />
              <span className="hidden sm:inline">{showDiagnostics ? "Ẩn Hồ sơ AI" : "Hiện Hồ sơ AI"}</span>
            </button>

            <button
              onClick={handleClearHistory}
              title="Làm mới cuộc trò chuyện"
              className="p-2 rounded-xl text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground transition-all cursor-pointer"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-grow overflow-y-auto p-3 space-y-3 bg-slate-50/20 dark:bg-slate-900/5">
          {messages.map((m, idx) => {
            const isBot = m.role === 'model';
            return (
              <div
                key={idx}
                className={cn(
                  "flex items-start gap-3 max-w-[85%] animate-fade-in",
                  isBot ? "self-start" : "ml-auto flex-row-reverse"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm",
                  isBot
                    ? "bg-gradient-to-tr from-amber-500/10 to-orange-500/10 text-amber-600 border border-amber-500/20"
                    : "bg-primary text-primary-foreground"
                )}>
                  {isBot ? <Bot size={15} /> : <User size={15} />}
                </div>
                <div className={cn(
                  "p-3.5 rounded-2xl text-[12px] font-semibold leading-relaxed shadow-sm overflow-x-auto",
                  isBot
                    ? "bg-card text-foreground rounded-tl-none border border-border/60"
                    : "bg-primary text-primary-foreground rounded-tr-none"
                )}>
                  <LatexRenderer text={m.text} />
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start gap-3 max-w-[80%] animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 shadow-sm">
                <Loader size={15} className="animate-spin text-amber-600" />
              </div>
              <div className="p-3.5 bg-card text-muted-foreground border border-border/60 rounded-2xl rounded-tl-none text-[12px] font-bold">
                Gia sư đang suy nghĩ...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Gợi ý câu hỏi nhanh (nếu không loading) */}
        {!isLoading && (
          <div className="p-2 bg-slate-50/40 dark:bg-slate-900/5 border-t border-border flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-thin">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(undefined, s)}
                className="px-3 py-1.5 bg-card hover:bg-slate-100 dark:hover:bg-slate-800 border border-border rounded-xl text-[10px] font-bold text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-sm shrink-0"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Hạn mức Premium Gate Banner */}
        {errorMsg === "LIMIT_EXHAUSTED" && (
          <div className="mx-4 mt-2 p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center gap-2">
              <Award className="text-amber-500 shrink-0" size={24} />
              <div className="text-left">
                <h4 className="text-xs font-black text-amber-700 dark:text-amber-400">Nâng cấp Premium - Không giới hạn AI</h4>
                <p className="text-[10px] font-semibold text-muted-foreground mt-0.5">Mở khóa chặng 9-10 điểm và trò chuyện không giới hạn với Gia sư AI</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/premium')}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white font-black text-[10px] rounded-xl shadow-md transition-all cursor-pointer shrink-0"
            >
              Nâng Cấp Ngay
            </button>
          </div>
        )}

        {/* Chat Input Form */}
        <form onSubmit={(e) => handleSend(e)} className="p-3 border-t border-border bg-slate-50/50 dark:bg-slate-900/20 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading || errorMsg === "LIMIT_EXHAUSTED"}
            placeholder={
              errorMsg === "LIMIT_EXHAUSTED"
                ? "Bạn đã hết lượt hỏi hôm nay. Vui lòng nâng cấp..."
                : subject === 'math'
                  ? "Hỏi Gia sư về công thức delta, Vi-ét hoặc gửi câu hỏi..."
                  : "Hỏi về câu bị động, điều kiện hoặc các dạng từ..."
            }
            className="flex-1 bg-background border border-border rounded-2xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-semibold disabled:bg-secondary/40 placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading || errorMsg === "LIMIT_EXHAUSTED"}
            className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white hover:opacity-95 disabled:opacity-40 flex items-center justify-center shrink-0 cursor-pointer shadow-md shadow-orange-500/10 transition-all"
          >
            <Send size={16} />
          </button>
        </form>
      </div>

      {/* 2. Cột phải: Hồ sơ năng lực (Real-time Profile) */}
      {showDiagnostics && (
        <div className="w-full lg:w-80 shrink-0 flex flex-col lg:h-full pr-1 animate-fade-in">

          {/* Real-time Diagnostics Card */}
          <div className="flex-1 bg-card border border-border/80 rounded-2xl p-4 shadow-xl flex flex-col overflow-hidden min-h-[350px] shrink-0">
            <div className="flex items-center gap-2 pb-4 border-b border-border">
              <Brain className="text-amber-500" size={18} />
              <div className="text-left">
                <h3 className="text-xs font-black text-foreground">Hồ Sơ Năng Lực AI</h3>
                <p className="text-[8px] font-semibold text-muted-foreground mt-0.5">Chẩn đoán điểm mạnh/yếu thời gian thực</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mt-4 space-y-4 pr-1 text-left">
              {isLoadingProfile ? (
                <div className="flex flex-col items-center justify-center h-40 text-muted-foreground gap-2 text-[10px] font-bold animate-pulse">
                  <Loader size={16} className="animate-spin text-amber-500" />
                  Đang tải dữ liệu hồ sơ...
                </div>
              ) : profile ? (
                <>
                  {/* 1. Tóm tắt học lực */}
                  {profile.learningSummary && (
                    <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-border/40">
                      <span className="text-[8px] font-black text-amber-600 dark:text-amber-400 block mb-1">TIẾN TRÌNH HIỆN TẠI</span>
                      <p className="text-[10px] font-bold leading-relaxed text-foreground">{profile.learningSummary}</p>
                    </div>
                  )}

                  {/* 2. Điểm mạnh */}
                  <div>
                    <span className="text-[8px] font-black text-emerald-600 block mb-2">ĐIỂM MẠNH ({profile.strengths?.length || 0})</span>
                    {profile.strengths && profile.strengths.length > 0 ? (
                      <ul className="space-y-1.5">
                        {profile.strengths.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[10px] font-bold text-muted-foreground leading-tight">
                            <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={12} />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[9px] text-muted-foreground italic">Chưa ghi nhận điểm mạnh đặc biệt.</p>
                    )}
                  </div>

                  {/* 3. Điểm yếu */}
                  <div>
                    <span className="text-[8px] font-black text-orange-600 block mb-2">ĐIỂM YẾU / LỖI SAI ({profile.weaknesses?.length || 0})</span>
                    {profile.weaknesses && profile.weaknesses.length > 0 ? (
                      <ul className="space-y-1.5">
                        {profile.weaknesses.map((w, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[10px] font-bold text-muted-foreground leading-tight">
                            <AlertTriangle className="text-orange-500 shrink-0 mt-0.5" size={12} />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[9px] text-muted-foreground italic">Tuyệt vời! Chưa phát hiện lỗi sai hệ thống nào.</p>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-40 text-center gap-3">
                  <Brain className="text-slate-300 dark:text-slate-700" size={32} />
                  <p className="text-[10px] font-bold text-muted-foreground leading-relaxed px-2">
                    Chưa có dữ liệu chẩn đoán. Thầy sẽ phân tích và tự động ghi nhận các điểm mạnh, lỗi sai thường gặp khi em gửi câu hỏi ôn luyện!
                  </p>
                </div>
              )}
            </div>

            {profile?.lastUpdated && (
              <div className="pt-3 border-t border-border text-[8px] text-muted-foreground font-semibold text-right">
                Cập nhật mới nhất: {new Date(profile.lastUpdated.seconds * 1000).toLocaleString("vi-VN")}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default GeneralAiTutor;
