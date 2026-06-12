import React, { useState, useEffect, useRef } from 'react';
import { Question, Solution } from '../../types';
import { aiService } from '../../services/aiService';
import { LatexRenderer } from './LatexRenderer';
import { Send, X, Bot, User, Sparkles, Loader, Trash2, Paperclip } from 'lucide-react';
import { cn } from '../../utils/cn';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth, firebaseStorage } from '../../services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getPersonalizedGreeting, StudentProfile } from '../../utils/greetingHelper';
import { mathTopics } from '../../data/mathData';
import { englishTopics } from '../../data/englishData';

interface Message {
  role: 'user' | 'model';
  text: string;
  imageUrl?: string;
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
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<Message[]>([]);
  const hasNewMessages = useRef(false);

  // Đồng bộ tin nhắn mới nhất sang Ref
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Clean up object URL when component unmounts or previewUrl changes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const convertFileToBase64 = (file: File): Promise<{ data: string; mimeType: string }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1];
        resolve({
          data: base64Data,
          mimeType: file.type
        });
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Chỉ hỗ trợ gửi các file hình ảnh.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Dung lượng hình ảnh phải nhỏ hơn 5MB.');
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Tải hồ sơ học sinh khi mở bảng chat bài tập
  useEffect(() => {
    if (isOpen && auth.currentUser?.uid) {
      setIsLoadingProfile(true);
      const profileRef = doc(db, 'student_profiles', auth.currentUser.uid);
      getDoc(profileRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setProfile(docSnap.data() as StudentProfile);
          } else {
            setProfile(null);
          }
        })
        .catch((err) => {
          console.error("Lỗi khi tải hồ sơ học sinh:", err);
        })
        .finally(() => {
          setIsLoadingProfile(false);
        });
    } else if (!isOpen) {
      setProfile(null);
    }
  }, [isOpen]);

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

  // Cập nhật tin nhắn chào mừng cá nhân hóa khi profile tải xong và tin nhắn hiện tại vẫn đang là tin nhắn chào mặc định
  useEffect(() => {
    if (isLoadingProfile || !isOpen) return;
    
    if (messages.length === 1 && messages[0].role === 'model') {
      const currentText = messages[0].text;
      
      const isDefaultOrGenericWelcome = 
        currentText.startsWith('Xin chào! Thầy là Gia sư AI') ||
        currentText.startsWith('Chào ') ||
        currentText.startsWith('Hello ');
        
      if (isDefaultOrGenericWelcome) {
        const cleanSubjectId = question.subjectId || 'math';
        const topicsList = cleanSubjectId === 'math' ? mathTopics : englishTopics;
        const topic = topicsList.find(t => t.id === question.topicId);
        const topicName = topic ? topic.name : '';
        
        const displayName = auth.currentUser?.displayName;
        const personalizedText = getPersonalizedGreeting(
          displayName,
          profile,
          cleanSubjectId,
          topicName
        );
        
        if (currentText !== personalizedText) {
          setMessages([{ role: 'model', text: personalizedText }]);
        }
      }
    }
  }, [profile, isLoadingProfile, isOpen, question, messages]);

  // Bộ lắng nghe đóng phiên (Click X, chuyển câu hỏi, hoặc rời trang) để chạy chẩn đoán 1 lần duy nhất
  useEffect(() => {
    if (isOpen) {
      hasNewMessages.current = false;
    }

    return () => {
      if (hasNewMessages.current && messagesRef.current.length > 1) {
        const chatHistoryForDiagnosis = messagesRef.current.map(m => ({
          role: m.role,
          text: m.text
        }));
        
        aiService.diagnoseSession(chatHistoryForDiagnosis, question.subjectId);
        hasNewMessages.current = false; // Tránh chạy lặp lại
      }
    };
  }, [isOpen, question.id, question.subjectId]);

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
    if ((!input.trim() && !selectedFile) || isLoading || isUploadingImage) return;

    const userText = input.trim();
    setInput('');

    let uploadedImageUrl: string | undefined = undefined;
    let base64Image: { data: string; mimeType: string } | undefined = undefined;

    setIsLoading(true);
    hasNewMessages.current = true;

    // Reset input states immediately so the user sees something is happening
    const fileToSend = selectedFile;
    const previewToSend = previewUrl;
    
    // Clear image selection UI
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }

    try {
      if (fileToSend) {
        setIsUploadingImage(true);
        // 1. Convert to base64 in parallel for Gemini
        base64Image = await convertFileToBase64(fileToSend);

        // 2. Upload to Firebase Storage
        if (auth.currentUser?.uid) {
          const userId = auth.currentUser.uid;
          const timestamp = Date.now();
          const fileExtension = fileToSend.name.split('.').pop() || 'jpg';
          const storagePath = `users/${userId}/chats/${question.id}/msg_img_${timestamp}.${fileExtension}`;
          const storageRef = ref(firebaseStorage, storagePath);
          
          // Start upload task
          const uploadTask = uploadBytesResumable(storageRef, fileToSend);
          await new Promise<void>((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              null,
              (error) => reject(error),
              () => resolve()
            );
          });
          uploadedImageUrl = await getDownloadURL(storageRef);
        }
        setIsUploadingImage(false);
      }

      // Add user message to state and Firestore
      const newUserMsg: Message = {
        role: 'user',
        text: userText,
        ...(uploadedImageUrl ? { imageUrl: uploadedImageUrl } : {})
      };

      const updatedMessages = [...messages, newUserMsg];
      setMessages(updatedMessages);

      // Call AI Service
      const tutorReply = await aiService.askTutor(
        question,
        solution,
        studentAnswer,
        messages, // Send previous messages as context
        userText,
        base64Image
      );

      const finalMessages = [...updatedMessages, { role: 'model', text: tutorReply } as Message];
      setMessages(finalMessages);
      saveChatHistory(finalMessages);
    } catch (err: any) {
      console.error(err);
      setIsUploadingImage(false);
      const errorMsgText = `⚠️ Lỗi: ${err.message || 'Không thể kết nối với Gia sư AI.'}`;
      
      const newUserMsg: Message = {
        role: 'user',
        text: userText,
        ...(uploadedImageUrl ? { imageUrl: uploadedImageUrl } : {})
      };
      
      const errorMessages = [
        ...messages,
        newUserMsg,
        {
          role: 'model',
          text: errorMsgText
        } as Message
      ];
      setMessages(errorMessages);
      saveChatHistory(errorMessages);
    } finally {
      setIsLoading(false);
      setIsUploadingImage(false);
      if (previewToSend) {
        URL.revokeObjectURL(previewToSend);
      }
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
                    "p-3 rounded-2xl text-xs font-semibold leading-relaxed shadow-sm overflow-x-auto flex flex-col gap-2",
                    isBot
                      ? "bg-secondary text-foreground rounded-tl-none border border-border/40"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {m.imageUrl && (
                    <div className="relative max-w-full overflow-hidden rounded-lg border border-border/30 bg-background/50">
                      <img 
                        src={m.imageUrl} 
                        alt="Bài làm đính kèm" 
                        className="max-h-48 w-auto object-contain cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                        onClick={() => setActiveLightboxUrl(m.imageUrl || null)}
                      />
                    </div>
                  )}
                  {m.text && <LatexRenderer text={m.text} />}
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
              {isUploadingImage ? "Đang tải ảnh bài làm..." : "Gia sư đang suy nghĩ..."}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Container */}
      <div className="border-t border-border bg-slate-50 dark:bg-slate-900/50 p-4">
        {/* Preview Image Container */}
        {previewUrl && (
          <div className="relative inline-block mb-3 p-1 bg-background border border-border rounded-lg shadow-sm group">
            <img 
              src={previewUrl} 
              alt="Xem trước bài làm" 
              className="max-h-20 max-w-full rounded-md object-contain"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-md hover:bg-destructive/90 transition-colors cursor-pointer"
              title="Xóa ảnh"
            >
              <X size={12} />
            </button>
          </div>
        )}

        <form onSubmit={handleSend} className="flex gap-2 items-center">
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          
          {/* Attachment Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading || isUploadingImage}
            className="w-9 h-9 rounded-xl border border-border bg-background hover:bg-secondary disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer transition-all shadow-sm text-muted-foreground"
            title="Đính kèm hình ảnh bài làm"
          >
            <Paperclip size={15} />
          </button>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi thầy hướng dẫn giải câu này..."
            disabled={isLoading || isUploadingImage}
            className="flex-1 bg-background border border-border rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary text-foreground font-semibold disabled:bg-secondary/40"
          />
          <button
            type="submit"
            disabled={(!input.trim() && !selectedFile) || isLoading || isUploadingImage}
            className="w-9 h-9 rounded-xl bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer transition-all shadow-sm"
          >
            <Send size={15} />
          </button>
        </form>
      </div>

      {/* Lightbox / Modal xem ảnh trực tiếp */}
      {activeLightboxUrl && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in cursor-zoom-out"
          onClick={() => setActiveLightboxUrl(null)}
        >
          <button
            onClick={() => setActiveLightboxUrl(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900 text-white cursor-pointer transition-all border border-white/10"
            title="Đóng"
          >
            <X size={20} />
          </button>
          <div 
            className="relative max-w-[90vw] max-h-[85vh] overflow-hidden rounded-xl bg-card border border-border/10 shadow-2xl p-1 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeLightboxUrl} 
              alt="Hình ảnh phóng to" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};
