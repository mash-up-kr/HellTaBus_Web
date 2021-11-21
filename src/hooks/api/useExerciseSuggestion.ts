import { useQuery } from 'react-query';
import { getSuggestionExercise } from '@/api';
import { Suggestion } from '@/types';

const useFetchExercises = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDate();
  const currentDay = today.getDay();

  const sunday = new Date(currentYear, currentMonth, currentDate - currentDay);
  const saturday = new Date(currentYear, currentMonth, currentDate + (6 - currentDay));

  const from = `${sunday.getFullYear()}-${sunday.getMonth()}-${sunday.getDate()}`;
  const to = `${saturday.getFullYear()}-${saturday.getMonth()}-${saturday.getDate()}`;

  const { isLoading, error, isError, data } = useQuery<Suggestion, Error>(
    'suggestion',
    () => getSuggestionExercise(from, to),
    {
      keepPreviousData: true,
    }
  );

  return {
    isLoading,
    error,
    isError,
    suggestion: data,
  };
};

export default useFetchExercises;
