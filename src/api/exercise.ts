import api from '@/api/core';
import { Exercise, Suggestion } from '@/types';
import { throwErrorMessage } from '@/utils';

export const getExercises = (parts = ''): Promise<Exercise[]> =>
  api.get({
    url: '/exercise',
    params: {
      partList: parts,
    },
  });

export const getSuggestionExercise = (from = '', to = ''): Promise<Suggestion> =>
  api
    .get({
      url: '/exercise/suggestion',
      params: {
        from,
        to,
      },
    })
    .catch(throwErrorMessage);
