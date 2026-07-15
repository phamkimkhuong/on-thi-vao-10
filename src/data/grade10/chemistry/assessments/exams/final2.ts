import type { MockExam } from '@/types';
const instructions=['Bài gồm 20 câu trắc nghiệm nhiều lựa chọn (5 điểm) và 5 câu trả lời ngắn (5 điểm).','Phạm vi Chuyên đề 1–7; trọng tâm Chuyên đề 4–7.','Giữ đầy đủ dấu, đơn vị và hệ số; không xem tài liệu trong thời gian làm bài.'];
export const final2Exams:MockExam[]=[
 {id:'chem10-final2-a',subjectId:'chemistry',title:'Cuối học kỳ II – Hóa học 10 (Mã A)',duration:60,kind:'final',scopeTopicIds:['chem10-t1','chem10-t2','chem10-t3','chem10-t4','chem10-t5','chem10-t6','chem10-t7'],totalPoints:10,formCode:'A',resultReleasePolicy:'after_submit',instructions,questionIds:Array.from({length:25},(_,i)=>'chem10-assess-final2-a-q'+String(i+1).padStart(2,'0')),createdAt:'2026-07-15T00:00:00.000Z'},
 {id:'chem10-final2-b',subjectId:'chemistry',title:'Cuối học kỳ II – Hóa học 10 (Mã B)',duration:60,kind:'final',scopeTopicIds:['chem10-t1','chem10-t2','chem10-t3','chem10-t4','chem10-t5','chem10-t6','chem10-t7'],totalPoints:10,formCode:'B',resultReleasePolicy:'after_submit',instructions,questionIds:Array.from({length:25},(_,i)=>'chem10-assess-final2-b-q'+String(i+1).padStart(2,'0')),createdAt:'2026-07-15T00:00:00.000Z'}
];
