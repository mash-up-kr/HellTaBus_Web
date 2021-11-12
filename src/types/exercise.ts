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
