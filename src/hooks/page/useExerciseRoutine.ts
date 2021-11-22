import { useFetchExerciseHistory, useFetchExerciseSuggestion } from '@/hooks/api';

const useExerciseRoutine = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentDay = today.getDay();

  const sunday = new Date(currentYear, currentMonth, currentDate - currentDay);
  const saturday = new Date(currentYear, currentMonth, currentDate + (6 - currentDay));

  const from = `${sunday.getFullYear()}-${sunday.getMonth() + 1}-${sunday.getDate()}`;
  const to = `${saturday.getFullYear()}-${saturday.getMonth() + 1}-${saturday.getDate()}`;

  const {
    suggestion,
    error: suggestionError,
    isError: isSuggestionError,
    isLoading: isLoadingSuggestion,
  } = useFetchExerciseSuggestion(from, to);

  const {
    exerciseHistory,
    error: exerciseHistoryError,
    isError: isExerciseHistoryError,
    isLoading: isLoadingExerciseHistory,
  } = useFetchExerciseHistory(from, to);

  const error = suggestionError || exerciseHistoryError;
  const isError = isSuggestionError || isExerciseHistoryError;

  return {
    suggestion,
    exerciseHistory,
    isLoadingSuggestion,
    isLoadingExerciseHistory,
    error,
    isError,
  };
};

export default useExerciseRoutine;
