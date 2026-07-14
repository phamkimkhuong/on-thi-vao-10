import { db, firebaseStorage } from './firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  collectionGroup, 
  updateDoc
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { SupportTicket } from '../types';

export const supportService = {
  /**
   * Tạo một yêu cầu hỗ trợ mới cho học sinh
   */
  async createTicket(
    userId: string,
    userEmail: string,
    userName: string,
    category: 'bug' | 'feature' | 'question' | 'other',
    title: string,
    description: string,
    screenshotFile?: File
  ): Promise<SupportTicket> {
    const ticketId = `tk-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const createdAt = new Date().toISOString();
    let screenshotUrl = undefined;

    // Nếu học sinh tải lên ảnh chụp màn hình, tiến hành lưu vào Storage trước
    if (screenshotFile) {
      const extension = screenshotFile.name.split('.').pop()?.toLowerCase() || 'jpg';
      const storagePath = `users/${userId}/tickets/${ticketId}/screenshot.${extension}`;
      const storageRef = ref(firebaseStorage, storagePath);

      const uploadTask = uploadBytesResumable(storageRef, screenshotFile, {
        contentType: screenshotFile.type,
        customMetadata: {
          userId,
          ticketId,
          originalName: screenshotFile.name
        }
      });

      screenshotUrl = await new Promise<string>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          null,
          (err) => reject(err),
          async () => {
            try {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadUrl);
            } catch (err) {
              reject(err);
            }
          }
        );
      });
    }

    const ticket: SupportTicket = {
      id: ticketId,
      userId,
      userEmail,
      userName,
      category,
      title,
      description,
      screenshotUrl,
      status: 'pending',
      createdAt,
      updatedAt: createdAt
    };

    // Lưu ticket document vào Firestore tại path: /users/{userId}/tickets/{ticketId}
    const ticketDocRef = doc(db, 'users', userId, 'tickets', ticketId);
    await setDoc(ticketDocRef, ticket);

    return ticket;
  },

  /**
   * Lấy danh sách ticket của học sinh cụ thể
   */
  async getStudentTickets(userId: string): Promise<SupportTicket[]> {
    const ticketsCollectionRef = collection(db, 'users', userId, 'tickets');
    const snapshot = await getDocs(ticketsCollectionRef);
    const tickets: SupportTicket[] = [];
    
    snapshot.forEach((d) => {
      tickets.push(d.data() as SupportTicket);
    });

    // Sắp xếp theo ngày tạo giảm dần (mới nhất lên đầu)
    return tickets.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  /**
   * Lấy toàn bộ ticket của tất cả học sinh (dành cho Giáo viên)
   */
  async getAllTickets(): Promise<SupportTicket[]> {
    // Sử dụng Collection Group query để lấy các tài liệu 'tickets' từ mọi users
    const ticketsQuery = query(collectionGroup(db, 'tickets'));
    const snapshot = await getDocs(ticketsQuery);
    const tickets: SupportTicket[] = [];

    snapshot.forEach((d) => {
      tickets.push(d.data() as SupportTicket);
    });

    // Sắp xếp theo ngày tạo giảm dần
    return tickets.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  /**
   * Phản hồi và cập nhật trạng thái của Ticket (dành cho Giáo viên)
   */
  async updateTicketResponse(
    userId: string,
    ticketId: string,
    responseText: string,
    newStatus: 'resolved' | 'rejected'
  ): Promise<void> {
    const ticketDocRef = doc(db, 'users', userId, 'tickets', ticketId);
    
    await updateDoc(ticketDocRef, {
      teacherResponse: responseText,
      status: newStatus,
      updatedAt: new Date().toISOString()
    });
  }
};
