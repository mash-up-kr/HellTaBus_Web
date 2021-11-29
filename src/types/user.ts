import { SplitType } from '@/types';

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

export interface User extends UserInfo {
  id: number;
  email: string;
  googleAccount: string;
  splitType: SplitType;
  explanation: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
