import { get } from '@/api/core';
import { Exercise } from '@/types';

export const getExercises = (parts = ''): Promise<Exercise[]> => {
  return get({
    url: '/exercise',
    params: {
      partList: parts,
    },
  });
};
