import { useFetchExerciseHistory, useFetchExerciseSuggestion } from '@/hooks/api';
import { getFirstAndLastDateStringFromCurrentWeek } from '@/utils';

const useExerciseRoutine = () => {
  const { sundayDateString, saturdayDateString } = getFirstAndLastDateStringFromCurrentWeek();

  const {
    suggestion,
    error: suggestionError,
    isError: isSuggestionError,
    isLoading: isLoadingSuggestion,
  } = useFetchExerciseSuggestion(sundayDateString, saturdayDateString);

  const {
    exerciseHistory,
    error: exerciseHistoryError,
    isError: isExerciseHistoryError,
    isLoading: isLoadingExerciseHistory,
  } = useFetchExerciseHistory(sundayDateString, saturdayDateString);

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
