import { useQuery } from 'react-query';
import { getSuggestionExercise } from '@/api';
import { Suggestion } from '@/types';

const useFetchExerciseSuggestion = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentDay = today.getDay();

  const sunday = new Date(currentYear, currentMonth, currentDate - currentDay);
  const saturday = new Date(currentYear, currentMonth, currentDate + (6 - currentDay));

  const from = `${sunday.getFullYear()}-${sunday.getMonth() + 1}-${sunday.getDate()}`;
  const to = `${saturday.getFullYear()}-${saturday.getMonth() + 1}-${saturday.getDate()}`;

  const { isLoading, error, isError, data } = useQuery<Suggestion, Error>(
    'suggestion',
    () => getSuggestionExercise(from, to),
    {
      staleTime: 1000 * 60 * 60 * 6, // 6시간
      retry: 1,
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

export default useFetchExerciseSuggestion;
