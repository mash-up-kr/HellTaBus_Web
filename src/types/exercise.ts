export interface Exercise {
  id: number;
  name: string;
  priority: number;
  part: string;
  baseCount: number;
  setCount: number;
  startWeight: number;
  changeWeight: number;
  setBreakTime: number;
  breakTime: number;
  imageLink: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type ExercisePartList = Partial<
  ['SHOULDER', 'ARM', 'CHEST', 'BACK', 'LOWER', 'TRICEPS', 'BICEPS']
>;

export interface Suggestion {
  suggestionPartList: ExercisePartList;
  suggestionExerciseList: Exercise[];
}

export interface ExerciseSet {
  id: number;
  index: number;
  weight: number;
  startTime: string;
  finishTime: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Feedback {
  id: number;
  difficulty: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ExerciseLog {
  id: number;
  startTime: string;
  finishTime: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  exercise: Exercise;
  setList: ExerciseSet[];
}

export type SplitType = 'FULL_BODY_WORKOUT' | 'SPLIT_3_DAY_WORKOUT' | 'SPLIT_5_DAY_WORKOUT';

interface ExercisePartInTabPanel {
  part: string;
  exercises: Exercise[];
}

export type ExercisePanel = ExercisePartInTabPanel[];
