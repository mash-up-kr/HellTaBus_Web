import React from 'react';
import { useFetchExercises } from '@/hooks';
import { Exercise } from '@/types';

const useExerciseChoicePage = () => {
  const { isLoading, error, isError, exercises } = useFetchExercises();

  const parseExercises = (list: Exercise[]) => list;
  const parsedExercises = parseExercises(exercises!);

  return { isLoading, error, isError, parsedExercises };
};

function ExerciseChoice() {
  const { isLoading, error, isError, parsedExercises } = useExerciseChoicePage();

  if (isLoading) {
    return <div>로딩...</div>;
  }

  if (isError) {
    return <div>{error!.message}</div>;
  }

  return <div />;
}

export default ExerciseChoice;
