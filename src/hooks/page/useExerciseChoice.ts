import { useMemo } from 'react';
import { EXERCISE_PART, EXERCISE_PART_BY_SPLIT_TYPE } from '@/consts';
import { useFetchExercises, useFetchUserInfo } from '@/hooks';
import { Tab } from '@/types';
import { reduceObject } from '@/utils';

const useExerciseChoice = () => {
  const {
    isLoading: isExerciseLoading,
    error: exerciseError,
    isError: isExerciseError,
    exercises,
  } = useFetchExercises();
  const { error: userInfoError, isError: isUserInfoError, userInfo } = useFetchUserInfo();

  const exerciseTabHeaders: Tab[] = useMemo(
    () =>
      userInfo?.splitType
        ? (reduceObject(
            EXERCISE_PART_BY_SPLIT_TYPE[userInfo?.splitType],
            (accumulated, value, key) => {
              if (value === EXERCISE_PART.BICEPS || value === EXERCISE_PART.TRICEPS) {
                return accumulated;
              }
              return [...(accumulated as []), { id: key, title: value }];
            },
            []
          ) as Tab[])
        : [],
    [userInfo]
  );

  return {
    isExerciseLoading,
    error: exerciseError || userInfoError,
    isError: isExerciseError || isUserInfoError,
    exercises,
    tabHeaders: exerciseTabHeaders,
  };
};

export default useExerciseChoice;
