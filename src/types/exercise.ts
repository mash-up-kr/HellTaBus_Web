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

export type ExercisePart = Partial<
  ['SHOULDER', 'ARM', 'CHEST', 'BACK', 'LOWER', 'TRICEPS', 'BICEPS']
>;

export interface Suggestion {
  suggestionPartList: ExercisePart;
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
  // TODO: /exercise-history api 변경 예정, 변경 후 feedback 프로퍼티 삭제
  feedback: Feedback;
}
