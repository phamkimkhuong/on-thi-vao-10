import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firebaseStorage } from './firebase';
import type { ProofImage } from '../types';

export interface ProofImageUploadInput {
  id: string;
  file: File;
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
  async uploadProofImages(
    userId: string,
    attemptId: string,
    images: ProofImageUploadInput[]
  ): Promise<ProofImage[]> {
    const uploadedAt = new Date().toISOString();

    return Promise.all(images.map(async (image, index) => {
      // Tự động nén ảnh phía client trước khi upload
      let fileToUpload = image.file;
      try {
        fileToUpload = await compressImage(image.file);
      } catch (err) {
        console.warn('Lỗi khi nén ảnh bài làm, chuyển sang dùng ảnh gốc:', err);
      }

      assertImageFile(fileToUpload);

      const imageId = safePathSegment(image.id || `proof-${index}`);
      const extension = getImageExtension(fileToUpload);
      const storagePath = `users/${userId}/attempts/${attemptId}/proof-${imageId}.${extension}`;
      const imageRef = ref(firebaseStorage, storagePath);

      await uploadBytes(imageRef, fileToUpload, {
        contentType: fileToUpload.type,
        customMetadata: {
          userId,
          attemptId,
          originalName: image.file.name
        }
      });

      const downloadUrl = await getDownloadURL(imageRef);

      return {
        id: imageId,
        storagePath,
        downloadUrl,
        fileName: fileToUpload.name,
        contentType: fileToUpload.type,
        sizeBytes: fileToUpload.size,
        uploadedAt
      };
    }));
  }
};
