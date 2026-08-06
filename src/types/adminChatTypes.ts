export interface AdminChatRoom {
  id: string; // userId của học sinh
  studentId: string;
  studentName: string;
  studentAvatar?: string;
  studentEmail?: string;
  studentGrade?: string;
  lastMessage: string;
  lastSender: 'student' | 'admin';
  unreadCountAdmin: number;
  unreadCountStudent: number;
  updatedAt: string;
}

export interface AdminChatMessage {
  id: string;
  senderId: string;
  senderRole: 'student' | 'admin';
  senderName: string;
  text: string;
  imageUrl?: string;
  createdAt: string;
  read: boolean;
}
