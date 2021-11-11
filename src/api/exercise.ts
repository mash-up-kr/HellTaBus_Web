import api from '@/api/core';
import { Exercise } from '@/types';

export const getExercises = (parts = ''): Promise<Exercise[]> =>
  api.get({
    url: '/exercise',
    params: {
      partList: parts,
    },
  });
