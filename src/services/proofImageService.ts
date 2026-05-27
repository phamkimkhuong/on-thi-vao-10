import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { firebaseStorage } from './firebase';
import type { ProofImage } from '../types';

export interface ProofImageUploadInput {
  id: string;
  file: File;
}

export interface ProofImageUploadProgress {
  id: string;
  bytesTransferred: number;
  totalBytes: number;
  progressPercent: number; // 0 to 100
  state: 'running' | 'paused' | 'success' | 'error' | 'canceled';
  error?: Error;
}

export interface UploadControl {
  pause: () => void;
  resume: () => void;
  cancel: () => void;
}

export interface ProofImageUploadOptions {
  onProgress?: (progresses: Record<string, ProofImageUploadProgress>) => void;
  onTasksCreated?: (controls: Record<string, UploadControl>) => void;
}

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

const getImageExtension = (file: File): string => {
  const byType: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/heic': 'heic',
    'image/heif': 'heif'
  };

  if (byType[file.type]) return byType[file.type];

  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  return fileExtension && fileExtension.length <= 5 ? fileExtension : 'jpg';
};

const compressImage = (file: File, maxWidth = 1200, maxHeight = 1600, quality = 0.75): Promise<File> => {
  return new Promise((resolve) => {
    if (!file.type.startsWith('image/')) {
      resolve(file);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Tính toán kích thước mới để giữ nguyên tỷ lệ khung hình
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(file);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        // Nén ảnh sang định dạng JPEG chất lượng 75%
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const newFileName = file.name.replace(/\.[^/.]+$/, "") + ".jpg";
              const compressedFile = new File([blob], newFileName, {
                type: 'image/jpeg',
                lastModified: Date.now()
              });
              resolve(compressedFile);
            } else {
              resolve(file);
            }
          },
          'image/jpeg',
          quality
        );
      };
      img.onerror = () => resolve(file);
    };
    reader.onerror = () => resolve(file);
  });
};

const assertImageFile = (file: File): void => {
  if (!file.type.startsWith('image/')) {
    throw new Error('Chỉ hỗ trợ upload ảnh bài làm.');
  }

  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error('Mỗi ảnh bài làm cần nhỏ hơn 5MB.');
  }
};

const safePathSegment = (value: string): string => {
  return value.replace(/[^a-zA-Z0-9_-]/g, '-');
};

export const proofImageService = {
  uploadProofImages(
    userId: string,
    attemptId: string,
    images: ProofImageUploadInput[],
    options?: ProofImageUploadOptions
  ): Promise<ProofImage[]> {
    const uploadedAt = new Date().toISOString();
    const progresses: Record<string, ProofImageUploadProgress> = {};
    const controls: Record<string, UploadControl> = {};

    const triggerProgress = () => {
      if (options?.onProgress) {
        options.onProgress({ ...progresses });
      }
    };

    const uploadPromises = images.map(async (image, index) => {
      const imageId = safePathSegment(image.id || `proof-${index}`);
      
      // Khởi tạo trạng thái progress ban đầu
      progresses[imageId] = {
        id: imageId,
        bytesTransferred: 0,
        totalBytes: image.file.size,
        progressPercent: 0,
        state: 'running'
      };

      // Tự động nén ảnh phía client trước khi upload
      let fileToUpload = image.file;
      try {
        fileToUpload = await compressImage(image.file);
      } catch (err) {
        console.warn('Lỗi khi nén ảnh bài làm, chuyển sang dùng ảnh gốc:', err);
      }

      assertImageFile(fileToUpload);

      const extension = getImageExtension(fileToUpload);
      const storagePath = `users/${userId}/attempts/${attemptId}/proof-${imageId}.${extension}`;
      const imageRef = ref(firebaseStorage, storagePath);

      const uploadTask = uploadBytesResumable(imageRef, fileToUpload, {
        contentType: fileToUpload.type,
        customMetadata: {
          userId,
          attemptId,
          originalName: image.file.name
        }
      });

      // Tạo controls tương tác cho task này
      controls[imageId] = {
        pause: () => uploadTask.pause(),
        resume: () => uploadTask.resume(),
        cancel: () => uploadTask.cancel()
      };

      return new Promise<ProofImage>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const bytesTransferred = snapshot.bytesTransferred;
            const totalBytes = snapshot.totalBytes;
            const progressPercent = totalBytes > 0 ? Math.round((bytesTransferred / totalBytes) * 100) : 0;
            
            let state: ProofImageUploadProgress['state'] = 'running';
            if (snapshot.state === 'paused') {
              state = 'paused';
            } else if (snapshot.state === 'running') {
              state = 'running';
            }

            progresses[imageId] = {
              id: imageId,
              bytesTransferred,
              totalBytes,
              progressPercent,
              state
            };
            triggerProgress();
          },
          (error) => {
            const isCanceled = error.code === 'storage/canceled';
            progresses[imageId] = {
              ...progresses[imageId],
              state: isCanceled ? 'canceled' : 'error',
              error
            };
            triggerProgress();
            reject(new Error(isCanceled ? 'Tải ảnh lên đã bị hủy.' : `Không thể tải ảnh: ${error.message}`));
          },
          async () => {
            try {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
              progresses[imageId] = {
                ...progresses[imageId],
                progressPercent: 100,
                state: 'success'
              };
              triggerProgress();

              resolve({
                id: imageId,
                storagePath,
                downloadUrl,
                fileName: fileToUpload.name,
                contentType: fileToUpload.type,
                sizeBytes: fileToUpload.size,
                uploadedAt
              });
            } catch (err) {
              reject(err);
            }
          }
        );
      });
    });

    // Gửi controls ra ngoài sau khi khởi tạo thành công
    if (options?.onTasksCreated) {
      setTimeout(() => {
        if (options.onTasksCreated) {
          options.onTasksCreated(controls);
        }
      }, 0);
    }

    return Promise.all(uploadPromises);
  }
};
