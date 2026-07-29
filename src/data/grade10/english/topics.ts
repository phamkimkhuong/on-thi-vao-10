import { Topic } from '@/types';
import { g10EnglishListeningExtensionTopics } from './listeningExtension';

const modules = import.meta.glob('./modules/module*/index.ts', { eager: true });

export const g10EnglishTopics: Topic[] = [
  ...Object.values(modules).flatMap((mod: any) => mod.topics || []),
  ...g10EnglishListeningExtensionTopics
].sort((a, b) => a.orderIndex - b.orderIndex);
