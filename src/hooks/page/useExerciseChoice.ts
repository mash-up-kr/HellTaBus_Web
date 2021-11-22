import { useFetchExercises } from '@/hooks/api';
import { Exercise } from '@/types';

const useExerciseChoice = () => {
  const { isLoading, error, isError, exercises } = useFetchExercises();

  const parseExercises = (list: Exercise[] | undefined) => list;
  const parsedExercises = parseExercises(exercises);

  return { isLoading, error, isError, parsedExercises };
};

export default useExerciseChoice;
