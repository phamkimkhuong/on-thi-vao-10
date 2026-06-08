import React, { useState, useEffect, useRef } from 'react';
import { Question, Solution } from '../../types';
import { aiService } from '../../services/aiService';
import { LatexRenderer } from './LatexRenderer';
import { Send, X, Bot, User, Sparkles, Loader, Trash2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '../../services/firebase';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AiTutorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  solution: Solution | undefined;
  studentAnswer: string;
}

export const AiTutorPanel: React.FC<AiTutorPanelProps> = ({
  isOpen,
  onClose,
  question,
  solution,
  studentAnswer
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Khởi động tin nhắn chào mừng hoặc tải lịch sử chat từ Firestore
  useEffect(() => {
    if (isOpen) {
      if (auth.currentUser?.uid) {
        setIsLoadingHistory(true);
        const userId = auth.currentUser.uid;
        const chatRef = doc(db, 'users', userId, 'chats', question.id);
        
        getDoc(chatRef).then((docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data && Array.isArray(data.messages)) {
              setMessages(data.messages);
              return;
            }
          }
          // Default welcome message if no history exists
          setMessages([
            {
              role: 'model',
              text: `Xin chào! Thầy là Gia sư AI ôn thi vào 10. Thầy thấy em đang làm câu hỏi này. Thầy đã đọc đề bài và lời giải chi tiết. Em có gặp khó khăn hay thắc mắc gì cần thầy gợi ý không?`
            }
          ]);
        }).catch((err) => {
          console.error("Lỗi khi tải lịch sử chat từ Firestore:", err);
        }).finally(() => {
          setIsLoadingHistory(false);
        });
      } else {
        // Fallback default message
        setMessages([
          {
            role: 'model',
            text: `Xin chào! Thầy là Gia sư AI ôn thi vào 10. Thầy thấy em đang làm câu hỏi này. Thầy đã đọc đề bài và lời giải chi tiết. Em có gặp khó khăn hay thắc mắc gì cần thầy gợi ý không?`
          }
        ]);
      }
    }
  }, [isOpen, question.id]);

  // Tự động cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const saveChatHistory = async (updatedMessages: Message[]) => {
    if (!auth.currentUser?.uid) return;
    const userId = auth.currentUser.uid;
    const chatRef = doc(db, 'users', userId, 'chats', question.id);
    try {
      await setDoc(chatRef, {
        userId,
        questionId: question.id,
        messages: updatedMessages,
        updatedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error("Lỗi khi lưu lịch sử chat vào Firestore:", err);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    
    // Add user message
    const updatedMessages = [...messages, { role: 'user', text: userText } as Message];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const tutorReply = await aiService.askTutor(
        question,
        solution,
        studentAnswer,
        messages, // Send previous messages as context
        userText
      );

      const finalMessages = [...updatedMessages, { role: 'model', text: tutorReply } as Message];
      setMessages(finalMessages);
      saveChatHistory(finalMessages);
    } catch (err: any) {
      console.error(err);
      const errorMessages = [
        ...updatedMessages,
        {
          role: 'model',
          text: `⚠️ Lỗi: ${err.message || 'Không thể kết nối với Gia sư AI.'}`
        } as Message
      ];
      setMessages(errorMessages);
      saveChatHistory(errorMessages);
    } finally {
      setIsLoading(false);
    }
  };



  const handleClearHistory = async () => {
    const defaultWelcome: Message[] = [
      {
        role: 'model',
        text: `Đã làm sạch lịch sử trò chuyện. Thầy sẵn sàng hỗ trợ em giải đáp thắc mắc về câu hỏi này rồi!`
      }
    ];
    setMessages(defaultWelcome);

    if (auth.currentUser?.uid) {
      const userId = auth.currentUser.uid;
      const chatRef = doc(db, 'users', userId, 'chats', question.id);
      try {
        await setDoc(chatRef, {
          userId,
          questionId: question.id,
          messages: defaultWelcome,
          updatedAt: new Date().toISOString()
        });
      } catch (err) {
        console.error("Lỗi khi xóa lịch sử chat trong Firestore:", err);
      }
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-card border-l border-border shadow-2xl flex flex-col transition-all duration-300 animate-slide-in">
      
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Bot size={18} />
          </div>
          <div>
            <h3 className="text-xs font-black text-foreground flex items-center gap-1">
              Gia sư AI 10 <Sparkles size={11} className="text-amber-400 fill-amber-400 animate-pulse" />
            </h3>
            <p className="text-[9px] font-semibold text-muted-foreground">Hỗ trợ gợi ý tư duy Socratic</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearHistory}
            title="Xóa lịch sử chat"
            type="button"
            className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer"
          >
            <Trash2 size={14} />
          </button>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>
      </div>





      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {isLoadingHistory ? (
          <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-2 text-xs font-semibold animate-pulse">
            <Loader size={18} className="animate-spin text-emerald-600" />
            Đang tải lịch sử trò chuyện...
          </div>
        ) : (
          messages.map((m, idx) => {
            const isBot = m.role === 'model';
            return (
              <div
                key={idx}
                className={cn(
                  "flex items-start gap-2.5 max-w-[85%] animate-fade-in",
                  isBot ? "self-start" : "ml-auto flex-row-reverse"
                )}
              >
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                    isBot
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {isBot ? <Bot size={14} /> : <User size={14} />}
                </div>

                <div
                  className={cn(
                    "p-3 rounded-2xl text-xs font-semibold leading-relaxed shadow-sm overflow-x-auto",
                    isBot
                      ? "bg-secondary text-foreground rounded-tl-none border border-border/40"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  <LatexRenderer text={m.text} />
                </div>
              </div>
            );
          })
        )}

        {isLoading && (
          <div className="flex items-start gap-2.5 max-w-[85%] self-start animate-pulse">
            <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-sm">
              <Loader size={14} className="animate-spin text-emerald-600" />
            </div>
            <div className="p-3 bg-secondary text-foreground rounded-2xl rounded-tl-none border border-border/40 text-xs font-semibold">
              Gia sư đang suy nghĩ...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-4 border-t border-border bg-slate-50 dark:bg-slate-900/50 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Hỏi thầy hướng dẫn giải câu này..."
          disabled={isLoading}
          className="flex-1 bg-background border border-border rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-semibold disabled:bg-secondary/40"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="w-9 h-9 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer transition-all shadow-sm"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
};
