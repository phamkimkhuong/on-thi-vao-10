import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/store';
import { aiService } from '../../services/aiService';
import { db, firebaseStorage } from '../../services/firebase';
import { doc, onSnapshot, setDoc, deleteDoc, collection, query, orderBy, getDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { MathLoginRequired } from '../../components/common/MathLoginRequired';
import { getSubjectName } from '../../utils/subject';

import { SUBJECT_SUGGESTIONS_MAP, buildAiTutorSystemInstruction } from './constants/aiTutorPrompts';
import { AiTutorHeader } from './components/AiTutorHeader';
import { AiTutorSidebar, type ChatSession } from './components/AiTutorSidebar';
import { AiTutorMessageList, type Message } from './components/AiTutorMessageList';
import { AiTutorInput } from './components/AiTutorInput';
import { AiTutorDiagnostics } from './components/AiTutorDiagnostics';
import { ImageLightboxModal } from './components/ImageLightboxModal';

interface SubjectProfile {
  strengths?: string[];
  weaknesses?: string[];
  learningSummary?: string;
  lastUpdated?: any;
}

interface StudentProfile {
  math?: SubjectProfile;
  english?: SubjectProfile;
  chemistry?: SubjectProfile;
  physics?: SubjectProfile;
  biology?: SubjectProfile;
  strengths?: string[];
  weaknesses?: string[];
  learningSummary?: string;
  lastUpdated?: any;
}

const generateChatStoragePath = (userId: string, subject: string, fileName: string) => {
  const fileExtension = fileName.split('.').pop() || 'jpg';
  const timestamp = Date.now();
  return `users/${userId}/general_chats/${subject}/msg_img_${timestamp}.${fileExtension}`;
};

export const GeneralAiTutor: React.FC = () => {
  const navigate = useNavigate();
  const { user, selectedGrade, selectedSubject: subject } = useAppStore();

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

  const handleDiagnosticsClick = () => {
    if (window.innerWidth < 1024) {
      setIsMobileDiagOpen(true);
    } else {
      toggleDiagnostics();
    }
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [isNewSessionDraft, setIsNewSessionDraft] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });
  const [isMobileDiagOpen, setIsMobileDiagOpen] = useState(false);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);
  const [activeLightboxUrl, setActiveLightboxUrl] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<Message[]>([]);
  const hasNewMessages = useRef(false);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runDiagnosisRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

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

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      if (runDiagnosisRef.current) {
        runDiagnosisRef.current();
      }
    }, 3 * 60 * 1000);
  }, [subject]);

  useEffect(() => {
    hasNewMessages.current = false;
    resetInactivityTimer();
    const currentSubject = subject;

    const runDiagnosis = () => {
      if (hasNewMessages.current && messagesRef.current.length > 1) {
        const chatHistoryForDiagnosis = messagesRef.current.map(m => ({
          role: m.role,
          text: m.text
        }));
        aiService.diagnoseSession(chatHistoryForDiagnosis, currentSubject);
        hasNewMessages.current = false;
      }
    };

    runDiagnosisRef.current = runDiagnosis;

    return () => {
      runDiagnosis();
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [subject, resetInactivityTimer]);

  // Lắng nghe hồ sơ học sinh realtime
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

  // Tải danh sách cuộc trò chuyện cho môn học
  useEffect(() => {
    if (!user?.uid) return;

    setIsLoadingSessions(true);
    const sessionsCollectionRef = collection(db, 'users', user.uid, 'general_chats', subject, 'sessions');
    const q = query(sessionsCollectionRef, orderBy('updatedAt', 'desc'));

    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      const loadedSessions: ChatSession[] = [];
      querySnapshot.forEach((docSnap) => {
        loadedSessions.push({
          id: docSnap.id,
          ...docSnap.data()
        } as ChatSession);
      });

      // Di trú legacy
      if (loadedSessions.length === 0) {
        try {
          const legacyDocRef = doc(db, 'users', user.uid, 'general_chats', subject);
          const legacyDocSnap = await getDoc(legacyDocRef);
          if (legacyDocSnap.exists()) {
            const legacyData = legacyDocSnap.data();
            if (legacyData && Array.isArray(legacyData.messages) && legacyData.messages.length > 0) {
              const newSessionDocRef = doc(sessionsCollectionRef);
              const firstMsg = legacyData.messages.find((m: any) => m.role === 'user');
              const title = firstMsg ? (firstMsg.text.substring(0, 30) + (firstMsg.text.length > 30 ? '...' : '')) : "Cuộc trò chuyện cũ";

              await setDoc(newSessionDocRef, {
                title,
                messages: legacyData.messages,
                subjectId: subject,
                createdAt: legacyData.updatedAt || new Date().toISOString(),
                updatedAt: legacyData.updatedAt || new Date().toISOString()
              });

              await deleteDoc(legacyDocRef);
              return;
            }
          }
        } catch (err) {
          console.error("Lỗi khi di trú cuộc hội thoại cũ:", err);
        }
      }

      setSessions(loadedSessions);
      setIsLoadingSessions(false);

      if (loadedSessions.length > 0) {
        setActiveSessionId((prev) => {
          if (prev && loadedSessions.some((s) => s.id === prev)) {
            return prev;
          }
          return loadedSessions[0].id;
        });
        setIsNewSessionDraft(false);
      } else {
        setActiveSessionId(null);
        setIsNewSessionDraft(true);
      }
    }, (err) => {
      console.error("Lỗi khi tải lịch sử cuộc trò chuyện:", err);
      setIsLoadingSessions(false);
    });

    return () => unsubscribe();
  }, [user?.uid, subject]);

  // Nạp nội dung tin nhắn của session đang active
  useEffect(() => {
    if (isNewSessionDraft || !activeSessionId) {
      setMessages([]);
      return;
    }
    const currentSession = sessions.find((s) => s.id === activeSessionId);
    if (currentSession && Array.isArray(currentSession.messages)) {
      setMessages(currentSession.messages);
    } else {
      setMessages([]);
    }
  }, [activeSessionId, sessions, isNewSessionDraft]);

  // Cuộn xuống tin nhắn cuối
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const saveChatHistory = async (sessionIdToSave: string, updatedMsgs: Message[], newTitle?: string) => {
    if (!user?.uid) return;

    try {
      const sessionDocRef = doc(db, 'users', user.uid, 'general_chats', subject, 'sessions', sessionIdToSave);

      const updateData: any = {
        messages: updatedMsgs,
        updatedAt: new Date().toISOString()
      };

      if (newTitle) {
        updateData.title = newTitle;
        updateData.subjectId = subject;
        updateData.createdAt = new Date().toISOString();
      }

      await setDoc(sessionDocRef, updateData, { merge: true });
    } catch (err) {
      console.error("Lỗi khi lưu lịch sử chat:", err);
    }
  };

  const handleClearHistory = async () => {
    if (!user?.uid || !activeSessionId) {
      setMessages([]);
      setIsNewSessionDraft(true);
      return;
    }

    if (window.confirm("Bạn có chắc chắn muốn xóa cuộc trò chuyện này không?")) {
      try {
        const sessionDocRef = doc(db, 'users', user.uid, 'general_chats', subject, 'sessions', activeSessionId);
        await deleteDoc(sessionDocRef);
        setMessages([]);
        setActiveSessionId(null);
        setIsNewSessionDraft(true);
      } catch (err) {
        console.error("Lỗi khi xóa cuộc trò chuyện:", err);
        alert("Không thể xóa cuộc trò chuyện. Vui lòng thử lại.");
      }
    }
  };

  const handleDeleteSession = async (sessionIdToDelete: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user?.uid) return;

    if (window.confirm("Bạn có chắc chắn muốn xóa cuộc trò chuyện này không?")) {
      try {
        const sessionDocRef = doc(db, 'users', user.uid, 'general_chats', subject, 'sessions', sessionIdToDelete);
        await deleteDoc(sessionDocRef);
        if (activeSessionId === sessionIdToDelete) {
          setActiveSessionId(null);
          setIsNewSessionDraft(true);
          setMessages([]);
        }
      } catch (err) {
        console.error("Lỗi khi xóa cuộc trò chuyện:", err);
        alert("Không thể xóa cuộc trò chuyện.");
      }
    }
  };

  const handleSend = async (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const textToSend = customText !== undefined ? customText : input;
    if ((!textToSend.trim() && !selectedFile) || isLoading || errorMsg === "LIMIT_EXHAUSTED") return;

    const fileToSend = selectedFile;
    const previewToSend = previewUrl;

    if (!customText) setInput('');
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';

    setIsLoading(true);
    let uploadedImageUrl: string | undefined = undefined;
    let base64Image: { data: string; mimeType: string } | undefined = undefined;

    let currentSessionId = activeSessionId;
    let isNewSession = false;
    let sessionTitle = "";

    if (isNewSessionDraft || !currentSessionId) {
      if (user?.uid) {
        const sessionsCollectionRef = collection(db, 'users', user.uid, 'general_chats', subject, 'sessions');
        currentSessionId = doc(sessionsCollectionRef).id;
      } else {
        currentSessionId = `temp_${Date.now()}`;
      }
      isNewSession = true;
      sessionTitle = textToSend ? (textToSend.substring(0, 30) + (textToSend.length > 30 ? '...' : '')) : "Hình ảnh bài làm";
    }

    try {
      if (fileToSend) {
        setIsUploadingImage(true);
        base64Image = await convertFileToBase64(fileToSend);

        if (user?.uid) {
          const userId = user.uid;
          const storagePath = generateChatStoragePath(userId, subject, fileToSend.name);
          const storageRef = ref(firebaseStorage, storagePath);

          const uploadTask = uploadBytesResumable(storageRef, fileToSend);
          await new Promise<void>((resolve, reject) => {
            uploadTask.on('state_changed', null, (error) => reject(error), () => resolve());
          });
          uploadedImageUrl = await getDownloadURL(storageRef);
        }
        setIsUploadingImage(false);
      }

      const newUserMsg: Message = {
        role: 'user',
        text: textToSend,
        ...(uploadedImageUrl ? { imageUrl: uploadedImageUrl } : {})
      };

      const updatedMessages = isNewSession ? [newUserMsg] : [...messages, newUserMsg];
      setMessages(updatedMessages);

      if (isNewSession) {
        await saveChatHistory(currentSessionId, updatedMessages, sessionTitle);
        setActiveSessionId(currentSessionId);
        setIsNewSessionDraft(false);
      } else {
        await saveChatHistory(currentSessionId, updatedMessages);
      }

      hasNewMessages.current = true;
      resetInactivityTimer();

      const systemInstruction = buildAiTutorSystemInstruction(subject, selectedGrade);

      const contents = updatedMessages.slice(-8).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const reply = await aiService.callGemini({
        contents,
        systemInstruction,
        useRag: true,
        subjectId: subject,
        temperature: 0.7,
        skipDiagnosis: true,
        chatId: currentSessionId,
        image: base64Image
      });

      const finalMessages = [...updatedMessages, { role: 'model', text: reply } as Message];
      setMessages(finalMessages);
      await saveChatHistory(currentSessionId, finalMessages);
    } catch (err: any) {
      console.error("Lỗi khi gửi tin nhắn cho AI:", err);
      setIsUploadingImage(false);
      const isLimitError = err.message?.includes("Hôm nay bạn đã dùng hết hạn mức") || err.message?.includes("resource-exhausted");

      const errorText = isLimitError
        ? "⚠️ Bạn đã hết hạn mức 20 lượt hỏi AI miễn phí trong ngày hôm nay. Hãy nâng cấp gói Premium để tiếp tục chat không giới hạn với Gia sư AI!"
        : `⚠️ Lỗi kết nối: ${err.message || 'Không thể liên lạc được với Gia sư AI.'}`;

      if (isLimitError) {
        setErrorMsg("LIMIT_EXHAUSTED");
      }

      const newUserMsg: Message = {
        role: 'user',
        text: textToSend,
        ...(uploadedImageUrl ? { imageUrl: uploadedImageUrl } : {})
      };

      const finalMessages = [...messages, newUserMsg, { role: 'model', text: errorText } as Message];
      setMessages(finalMessages);
      await saveChatHistory(currentSessionId, finalMessages);
    } finally {
      setIsLoading(false);
      setIsUploadingImage(false);
      if (previewToSend) {
        URL.revokeObjectURL(previewToSend);
      }
    }
  };

  // Student Profile Diagnostics calculation
  const cleanSubject = subject || 'math';
  const subProfile = profile?.[cleanSubject as keyof Omit<StudentProfile, 'strengths' | 'weaknesses' | 'learningSummary' | 'lastUpdated'>] as SubjectProfile | undefined;

  let strengths: string[] = subProfile?.strengths || [];
  let weaknesses: string[] = subProfile?.weaknesses || [];
  let learningSummary = subProfile?.learningSummary || "";
  let lastUpdated = subProfile?.lastUpdated;

  if (cleanSubject === "math" && profile && !profile.math) {
    if (profile.strengths) strengths = profile.strengths;
    if (profile.weaknesses) weaknesses = profile.weaknesses;
    if (profile.learningSummary) learningSummary = profile.learningSummary;
    if (profile.lastUpdated) lastUpdated = profile.lastUpdated;
  }

  const hasProfileData = strengths.length > 0 || weaknesses.length > 0 || !!learningSummary;
  const suggestions = SUBJECT_SUGGESTIONS_MAP[subject] || SUBJECT_SUGGESTIONS_MAP.math;

  if (!user) {
    return (
      <MathLoginRequired
        title="Gia sư Socratic"
        description="Gia sư Socratic giúp bạn giải thích chi tiết, gợi ý phương pháp giải và đồng hành cùng bạn học tập 24/7. Đăng nhập để bắt đầu trò chuyện cùng AI."
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-110px)] lg:h-[calc(100vh-100px)] overflow-hidden p-0 gap-3 bg-slate-50/50 dark:bg-slate-950/20 relative">
      {/* Cột trái: Khung Chat */}
      <div className="flex-1 flex flex-row bg-card border border-border/80 rounded-2xl shadow-xl overflow-hidden h-full relative">
        <AiTutorSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          sessions={sessions}
          activeSessionId={activeSessionId}
          setActiveSessionId={setActiveSessionId}
          isLoadingSessions={isLoadingSessions}
          onNewSession={() => {
            setIsNewSessionDraft(true);
            setActiveSessionId(null);
            if (window.innerWidth < 1024) setIsSidebarOpen(false);
          }}
          onDeleteSession={handleDeleteSession}
        />

        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <AiTutorHeader
            subject={subject}
            selectedGrade={selectedGrade}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            showDiagnostics={showDiagnostics}
            onDiagnosticsClick={handleDiagnosticsClick}
            onClearHistory={handleClearHistory}
          />

          <AiTutorMessageList
            messages={messages}
            isLoading={isLoading}
            isUploadingImage={isUploadingImage}
            suggestions={suggestions}
            errorMsg={errorMsg}
            onSendSuggestion={(s) => handleSend(undefined, s)}
            onImageClick={(url) => setActiveLightboxUrl(url)}
            onUpgradeClick={() => navigate('/premium')}
            messagesEndRef={messagesEndRef}
          />

          <AiTutorInput
            input={input}
            setInput={setInput}
            selectedFile={selectedFile}
            previewUrl={previewUrl}
            isLoading={isLoading}
            isUploadingImage={isUploadingImage}
            errorMsg={errorMsg}
            placeholder={`Hỏi Gia sư ${getSubjectName(subject)} hoặc gửi hình ảnh bài làm...`}
            fileInputRef={fileInputRef}
            onImageChange={handleImageChange}
            onRemoveImage={handleRemoveImage}
            onSubmit={(e) => handleSend(e)}
          />
        </div>
      </div>

      {/* Cột phải: Hồ sơ năng lực Desktop */}
      {showDiagnostics && (
        <AiTutorDiagnostics
          isLoadingProfile={isLoadingProfile}
          hasProfileData={hasProfileData}
          learningSummary={learningSummary}
          strengths={strengths}
          weaknesses={weaknesses}
          lastUpdated={lastUpdated}
        />
      )}

      {/* Mobile Hồ sơ năng lực Bottom Sheet */}
      {isMobileDiagOpen && (
        <AiTutorDiagnostics
          isMobile
          onCloseMobile={() => setIsMobileDiagOpen(false)}
          isLoadingProfile={isLoadingProfile}
          hasProfileData={hasProfileData}
          learningSummary={learningSummary}
          strengths={strengths}
          weaknesses={weaknesses}
          lastUpdated={lastUpdated}
        />
      )}

      <ImageLightboxModal
        activeLightboxUrl={activeLightboxUrl}
        onClose={() => setActiveLightboxUrl(null)}
      />
    </div>
  );
};

export default GeneralAiTutor;
