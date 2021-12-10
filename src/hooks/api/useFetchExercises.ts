import { useQuery } from 'react-query';
import { getExercises } from '@/api';
import { Exercise } from '@/types';

const useFetchExercises = () => {
  const { isLoading, error, isError, data } = useQuery<Exercise[], Error>(
    'exercise',
    () => getExercises(),
    {
      staleTime: 1000 * 60 * 60 * 2, // 2시간
      keepPreviousData: true,
      refetchOnWindowFocus: 'always',
    }
  );

  return {
    isLoading,
    error,
    isError,
    exercises: data,
  };
};

export default useFetchExercises;
