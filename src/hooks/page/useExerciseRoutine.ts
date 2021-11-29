import { useFetchExerciseHistory, useFetchExerciseSuggestion, useFetchUserInfo } from '@/hooks/api';
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

  const {
    userInfo,
    error: userInfoError,
    isError: isUserInfoError,
    isLoading: isLoadingUserInfo,
  } = useFetchUserInfo();

  const error = suggestionError || exerciseHistoryError || userInfoError;
  const isError = isSuggestionError || isExerciseHistoryError || isUserInfoError;

  return {
    suggestion,
    exerciseHistory,
    userInfo,
    isLoadingSuggestion,
    isLoadingExerciseHistory,
    isLoadingUserInfo,
    error,
    isError,
  };
};

export default useExerciseRoutine;
