import { SplitType } from '@/types';

export interface SurveyFields {
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

export interface User extends SurveyFields {
  id: number;
  email: string;
  googleAccount: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
