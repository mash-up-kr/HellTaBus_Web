import { get } from '@/api/core';
import { Exercise } from '@/types/exercise';

export const getExercises = (parts = ''): Promise<Exercise[]> => {
  return get({
    url: '/exercise',
    params: {
      partList: parts,
    },
  });
};
