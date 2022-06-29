import { useQuery } from 'react-query';
import { getExerciseHistory } from '@/api';
import { ExerciseLog } from '@/types';

const useFetchExerciseHistory = (from: string, to: string) => {
  const { isLoading, error, isError, data } = useQuery<ExerciseLog[], Error>(
    'exerciseHistory',
    () => getExerciseHistory(from, to),
    {
      staleTime: 1000 * 60 * 60 * 2, // 2시간
      retry: 1,
      keepPreviousData: true,
      refetchOnWindowFocus: 'always',
    }
  );

  return {
    isLoading,
    error,
    isError,
    exerciseHistory: data ?? [],
  };
};

export default useFetchExerciseHistory;
