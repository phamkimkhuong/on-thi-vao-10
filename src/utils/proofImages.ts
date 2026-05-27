export interface LocalProofImage {
  id: string;
  file: File;
  previewUrl: string;
}

export const revokeLocalProofImages = (images: LocalProofImage[]): void => {
  images.forEach(image => URL.revokeObjectURL(image.previewUrl));
};
