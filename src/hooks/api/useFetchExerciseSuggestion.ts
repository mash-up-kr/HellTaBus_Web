import { useQuery } from 'react-query';
import { getSuggestionExercise } from '@/api';
import { Suggestion } from '@/types';

const useFetchExerciseSuggestion = (from: string, to: string) => {
  const { isLoading, error, isError, data } = useQuery<Suggestion, Error>(
    'suggestion',
    () => getSuggestionExercise(from, to),
    {
      retry: 1,
      keepPreviousData: true,
      refetchOnWindowFocus: 'always',
    }
  );

  return {
    isLoading,
    error,
    isError,
    suggestion: data ?? { suggestionExerciseList: [], suggestionPartList: [] },
  };
};

export default useFetchExerciseSuggestion;
