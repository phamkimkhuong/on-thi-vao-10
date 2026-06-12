import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { LocalProofImage, revokeLocalProofImages } from '../../../utils/proofImages';
import { proofImageService, ProofImageUploadProgress, UploadControl } from '../../../services/proofImageService';


export const useProofUpload = () => {
  const [proofImages, setProofImages] = useState<LocalProofImage[]>([]);
  const [uploadProgress, setUploadProgress] = useState<Record<string, ProofImageUploadProgress>>({});
  const [uploadControls, setUploadControls] = useState<Record<string, UploadControl>>({});

  const proofImagesRef = useRef(proofImages);
  useEffect(() => {
    proofImagesRef.current = proofImages;
  }, [proofImages]);

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      revokeLocalProofImages(proofImagesRef.current);
    };
  }, []);

  const totalUploadStats = useMemo(() => {
    const values = Object.values(uploadProgress);
    if (values.length === 0) return null;

    let totalBytes = 0;
    let bytesTransferred = 0;
    let runningCount = 0;
    let pausedCount = 0;
    let errorCount = 0;
    let canceledCount = 0;

    values.forEach(v => {
      totalBytes += v.totalBytes;
      bytesTransferred += v.bytesTransferred;
      if (v.state === 'running') runningCount++;
      else if (v.state === 'paused') pausedCount++;
      else if (v.state === 'error') errorCount++;
      else if (v.state === 'canceled') canceledCount++;
    });

    const percent = totalBytes > 0 ? Math.round((bytesTransferred / totalBytes) * 100) : 0;

    return {
      percent,
      bytesTransferred,
      totalBytes,
      runningCount,
      pausedCount,
      errorCount,
      canceledCount,
      isPaused: pausedCount > 0 && runningCount === 0,
      isAllCompleted: bytesTransferred === totalBytes && totalBytes > 0
    };
  }, [uploadProgress]);

  const handlePauseUpload = useCallback(() => {
    Object.values(uploadControls).forEach(ctrl => ctrl.pause());
  }, [uploadControls]);

  const handleResumeUpload = useCallback(() => {
    Object.values(uploadControls).forEach(ctrl => ctrl.resume());
  }, [uploadControls]);

  const handleCancelUpload = useCallback(() => {
    Object.values(uploadControls).forEach(ctrl => ctrl.cancel());
  }, [uploadControls]);

  const executeUpload = async (userId: string, attemptId: string) => {
    if (proofImages.length === 0) return [];
    return await proofImageService.uploadProofImages(
      userId,
      attemptId,
      proofImages.map(image => ({ id: image.id, file: image.file })),
      {
        onProgress: (prog) => {
          setUploadProgress(prog);
        },
        onTasksCreated: (ctrls) => {
          setUploadControls(ctrls);
        }
      }
    );
  };

  const clearUpload = useCallback(() => {
    setProofImages(prev => {
      revokeLocalProofImages(prev);
      return [];
    });
    setUploadProgress({});
    setUploadControls({});
  }, []);

  return {
    proofImages,
    setProofImages,
    uploadProgress,
    setUploadProgress,
    uploadControls,
    setUploadControls,
    totalUploadStats,
    handlePauseUpload,
    handleResumeUpload,
    handleCancelUpload,
    executeUpload,
    clearUpload
  };
};
