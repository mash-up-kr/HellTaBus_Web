import { useQuery } from 'react-query';
import { getExercises } from '@/api';
import { Exercise } from '@/types';

const useFetchExercises = () => {
  const { isLoading, error, isError, data } = useQuery<Exercise[], Error>(
    'exercise',
    () => getExercises(),
    {
      keepPreviousData: true,
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
