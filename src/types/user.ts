import { SplitType } from '@/types';

export interface User {
  id: number;
  nickname: string;
  email: string;
  googleAccount: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  splitType: SplitType;
  audioCoach: string;
  speed: string;
  explanation: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface UserInfo {
  nickname: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  splitType: string;
  audioCoach: string;
  speed: string;
  explanation: boolean | null;
}
