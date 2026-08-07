import { db, firebaseStorage } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
  getDoc,
  getDocs,
  where,
  limit,
  serverTimestamp,
  increment
} from 'firebase/firestore';
import { AdminChatRoom, AdminChatMessage } from '../types/adminChatTypes';
import { logger } from '../utils/logger';

class AdminChatService {
  /**
   * Lắng nghe danh sách tin nhắn trong phòng chat thời gian thực (Real-time)
   */
  public subscribeToMessages(userId: string, callback: (messages: AdminChatMessage[]) => void): () => void {
    if (!userId) {
      callback([]);
      return () => {};
    }

    try {
      const messagesRef = collection(db, 'admin_chat_rooms', userId, 'messages');
      const q = query(messagesRef, orderBy('createdAt', 'asc'), limit(100));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const messages: AdminChatMessage[] = [];
          snapshot.forEach((docSnap) => {
            const d = docSnap.data();
            messages.push({
              id: docSnap.id,
              senderId: d.senderId || '',
              senderRole: (d.senderRole as 'student' | 'admin') || 'student',
              senderName: d.senderName || 'Học sinh',
              text: d.text || '',
              imageUrl: d.imageUrl || undefined,
              createdAt: d.createdAt?.toDate ? d.createdAt.toDate().toISOString() : d.createdAt || new Date().toISOString(),
              read: Boolean(d.read),
            });
          });
          callback(messages);
        },
        (err) => {
          logger.error('Lỗi khi lắng nghe tin nhắn Real-time:', err);
          callback([]);
        }
      );

      return unsubscribe;
    } catch (err) {
      logger.error('Lỗi khởi tạo Real-time listener:', err);
      callback([]);
      return () => {};
    }
  }

  /**
   * Upload hình ảnh chat lên Firebase Storage
   */
  public async uploadChatImage(file: File, studentId: string): Promise<string | null> {
    if (!file || !studentId) return null;
    try {
      const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const storagePath = `chat_images/${studentId}/${Date.now()}_${cleanFileName}`;
      const storageRef = ref(firebaseStorage, storagePath);
      const uploadTask = await uploadBytesResumable(storageRef, file);
      const downloadUrl = await getDownloadURL(uploadTask.ref);
      return downloadUrl;
    } catch (err) {
      logger.error('Lỗi khi tải ảnh chat lên Firebase Storage:', err);
      return null;
    }
  }

  /**
   * Gửi tin nhắn mới (cho phía Học sinh hoặc Admin)
   */
  public async sendMessage(payload: {
    studentId: string;
    studentName: string;
    studentEmail?: string;
    studentGrade?: string;
    senderRole: 'student' | 'admin';
    senderName: string;
    senderId: string;
    text: string;
    imageUrl?: string;
  }): Promise<boolean> {
    const { studentId, studentName, studentEmail, studentGrade, senderRole, senderName, senderId, text, imageUrl } = payload;
    const cleanText = text.trim();
    if (!studentId || (!cleanText && !imageUrl)) return false;

    try {
      const roomRef = doc(db, 'admin_chat_rooms', studentId);
      const messagesRef = collection(db, 'admin_chat_rooms', studentId, 'messages');

      const messageDocData: Record<string, any> = {
        senderId,
        senderRole,
        senderName,
        text: cleanText,
        createdAt: serverTimestamp(),
        read: false,
      };

      if (imageUrl) {
        messageDocData.imageUrl = imageUrl;
      }

      // 1. Thêm tin nhắn mới vào subcollection
      await addDoc(messagesRef, messageDocData);

      // 2. Cập nhật thông tin phòng chat (UPSERT)
      const isFromStudent = senderRole === 'student';
      const lastMsgText = cleanText || (imageUrl ? '📷 [Hình ảnh]' : '');

      await setDoc(
        roomRef,
        {
          id: studentId,
          studentId,
          studentName,
          studentEmail: studentEmail || null,
          studentGrade: studentGrade || null,
          lastMessage: lastMsgText,
          lastSender: senderRole,
          updatedAt: serverTimestamp(),
          ...(isFromStudent
            ? { unreadCountAdmin: increment(1) }
            : { unreadCountStudent: increment(1) }),
        },
        { merge: true }
      );

      logger.info(`Đã gửi tin nhắn chat thành công từ ${senderRole}: ${lastMsgText.substring(0, 30)}`);
      return true;
    } catch (err) {
      logger.error('Lỗi khi gửi tin nhắn Admin chat:', err);
      return false;
    }
  }

  /**
   * Đánh dấu học sinh đã đọc tất cả tin nhắn từ Admin
   */
  public async markAsReadStudent(studentId: string): Promise<void> {
    if (!studentId) return;
    try {
      const roomRef = doc(db, 'admin_chat_rooms', studentId);
      await updateDoc(roomRef, {
        unreadCountStudent: 0,
      });
    } catch {
      // ignore
    }
  }

  /**
   * Đánh dấu Admin đã đọc tất cả tin nhắn từ Học sinh
   */
  public async markAsReadAdmin(studentId: string): Promise<void> {
    if (!studentId) return;
    try {
      const roomRef = doc(db, 'admin_chat_rooms', studentId);
      await updateDoc(roomRef, {
        unreadCountAdmin: 0,
      });
    } catch {
      // ignore
    }
  }

  /**
   * Lắng nghe danh sách các phòng chat phía Giáo viên / Admin (Real-time)
   */
  public subscribeToChatRooms(callback: (rooms: AdminChatRoom[]) => void): () => void {
    try {
      const roomsRef = collection(db, 'admin_chat_rooms');
      const q = query(roomsRef, orderBy('updatedAt', 'desc'), limit(50));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const rooms: AdminChatRoom[] = [];
          snapshot.forEach((docSnap) => {
            const d = docSnap.data();
            rooms.push({
              id: docSnap.id,
              studentId: d.studentId || docSnap.id,
              studentName: d.studentName || 'Học sinh',
              studentAvatar: d.studentAvatar || undefined,
              studentEmail: d.studentEmail || undefined,
              studentGrade: d.studentGrade || undefined,
              lastMessage: d.lastMessage || '',
              lastSender: (d.lastSender as 'student' | 'admin') || 'student',
              unreadCountAdmin: d.unreadCountAdmin || 0,
              unreadCountStudent: d.unreadCountStudent || 0,
              updatedAt: d.updatedAt?.toDate ? d.updatedAt.toDate().toISOString() : d.updatedAt || new Date().toISOString(),
            });
          });
          callback(rooms);
        },
        (err) => {
          logger.error('Lỗi khi lắng nghe danh sách phòng chat Admin:', err);
          callback([]);
        }
      );

      return unsubscribe;
    } catch (err) {
      logger.error('Lỗi khởi tạo listener phòng chat Admin:', err);
      callback([]);
      return () => {};
    }
  }
  /**
   * Khởi tạo hoặc mở phòng chat với 1 học sinh theo Email hoặc ID (Do Admin chủ động nhắn trước)
   */
  public async createOrFindRoomForStudent(searchKey: string): Promise<AdminChatRoom | null> {
    const key = searchKey.trim().toLowerCase();
    if (!key) return null;

    try {
      // 1. Tìm trong collection users theo email
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', key), limit(1));
      const snap = await getDocs(q);

      let studentId = '';
      let studentName = key.split('@')[0];
      let studentEmail = key;
      let studentGrade = 'all';

      if (!snap.empty) {
        const userDoc = snap.docs[0];
        studentId = userDoc.id;
        const d = userDoc.data();
        studentName = d.displayName || d.name || studentName;
        studentEmail = d.email || studentEmail;
        studentGrade = d.selectedGrade || 'all';
      } else {
        // Thử tìm theo ID
        const docRef = doc(db, 'users', searchKey.trim());
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          studentId = docSnap.id;
          const d = docSnap.data();
          studentName = d.displayName || d.name || studentName;
          studentEmail = d.email || studentEmail;
          studentGrade = d.selectedGrade || 'all';
        } else {
          // Tạo studentId dựa trên email
          studentId = searchKey.trim().replace(/[^a-zA-Z0-9]/g, '_');
        }
      }

      const roomRef = doc(db, 'admin_chat_rooms', studentId);
      const roomSnap = await getDoc(roomRef);

      if (roomSnap.exists()) {
        const d = roomSnap.data();
        return {
          id: roomSnap.id,
          studentId: d.studentId || roomSnap.id,
          studentName: d.studentName || studentName,
          studentEmail: d.studentEmail || studentEmail,
          studentGrade: d.studentGrade || studentGrade,
          lastMessage: d.lastMessage || 'Khởi tạo cuộc trò chuyện từ Admin',
          lastSender: (d.lastSender as 'student' | 'admin') || 'admin',
          unreadCountAdmin: d.unreadCountAdmin || 0,
          unreadCountStudent: d.unreadCountStudent || 0,
          updatedAt: d.updatedAt?.toDate ? d.updatedAt.toDate().toISOString() : d.updatedAt || new Date().toISOString(),
        };
      }

      // Tạo phòng chat mới trong Firestore
      const newRoomData = {
        id: studentId,
        studentId,
        studentName,
        studentEmail,
        studentGrade,
        lastMessage: 'Cuộc trò chuyện được mở từ Admin',
        lastSender: 'admin' as const,
        unreadCountAdmin: 0,
        unreadCountStudent: 0,
        updatedAt: serverTimestamp(),
      };

      await setDoc(roomRef, newRoomData);

      return {
        ...newRoomData,
        lastSender: 'admin',
        updatedAt: new Date().toISOString(),
      };
    } catch (err) {
      logger.error('Lỗi khi tạo phòng chat từ Admin:', err);
      return null;
    }
  }
}

export const adminChatService = new AdminChatService();
