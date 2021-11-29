import { SplitType } from '@/types';

export interface UserInfo {
  nickname: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  splitType: SplitType;
  audioCoach: string;
  speed: string;
  explanation: boolean | null;
}

export interface User extends UserInfo {
  id: number;
  email: string;
  googleAccount: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
