import api from '@/api/core';
import { Exercise, Suggestion } from '@/types';

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
    .catch(({ response }) => {
      throw response.data.message;
    });
