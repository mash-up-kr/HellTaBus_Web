import React from 'react';
import { useExerciseChoice } from '@/hooks';

function ExerciseChoice() {
  const { isLoading, error, isError, parsedExercises } = useExerciseChoice();

  if (isLoading) {
    return <div>로딩...</div>;
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return <div />;
}

export default ExerciseChoice;
