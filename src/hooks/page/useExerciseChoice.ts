import { useMemo } from 'react';
import { EXERCISE_PART, EXERCISE_PART_OF_TAB_BY_SPLIT_TYPE, SPLIT_TYPE } from '@/consts';
import { useFetchExercises, useFetchUserInfo } from '@/hooks';
import { Exercise, ExercisePanel, IndexableType, Tab } from '@/types';
import { reduceObject } from '@/utils';

const toTabHeaders = (exerciseParts: IndexableType<string>) =>
  reduceObject(
    exerciseParts,
    (accumulated, exercisePart, key) => {
      if (exercisePart === EXERCISE_PART.BICEPS || exercisePart === EXERCISE_PART.TRICEPS) {
        return accumulated;
      }
      return [...(accumulated as Tab[]), { id: key, title: exercisePart }];
    },
    []
  ) as Tab[];

const toTabPanelsOfFullBodyWorkout = (exercises: Exercise[]) => {
  return [
    reduceObject(
      EXERCISE_PART,
      (accumulated, exercisePart, key) => {
        if (exercisePart === EXERCISE_PART.BICEPS || exercisePart === EXERCISE_PART.TRICEPS) {
          return accumulated;
        }

        const exercisesByParts = exercises.filter((exercise) => {
          const { part: exercisePartKey } = exercise;
          return exercisePart === EXERCISE_PART.ARM
            ? EXERCISE_PART[exercisePartKey] === EXERCISE_PART.BICEPS ||
                EXERCISE_PART[exercisePartKey] === EXERCISE_PART.TRICEPS
            : exercisePartKey === key;
        });

        return [...(accumulated as []), { part: exercisePart, exercises: exercisesByParts }];
      },
      []
    ),
  ] as ExercisePanel[];
};

const toTabPanelsOfSplit3DayWorkout = (exercises: Exercise[], tabHeaders: Tab[]) => {
  const tabPanels = tabHeaders.reduce((accumulated, { id, title }) => {
    const exercisePartKeysOfTab = id.split('_AND_');
    const exercisePartsOfTab = title.split('/');

    const exercisesByParts = exercisePartKeysOfTab.map((exercisePartKeyOfTab) =>
      exercises.filter((exercise) => {
        const { part: exercisePartKey } = exercise;
        return exercisePartKeyOfTab === exercisePartKey;
      })
    );

    accumulated.set(
      id,
      Array.from({ length: exercisePartKeysOfTab.length }, (_, index) => ({
        part: exercisePartsOfTab[index],
        exercises: exercisesByParts[index],
      }))
    );

    return accumulated;
  }, new Map());

  return Array.from(tabPanels.values());
};

const toTabPanelsOfSplit5DayWorkout = (exercises: Exercise[], tabHeaders: Tab[]) => {
  const tabPanels = tabHeaders.reduce(
    (accumulated, { id: exercisePartKeyOfTab, title: exercisePartOfTab }) => {
      const exercisesByPart = exercises.filter((exercise) => {
        const { part: exercisePartKey } = exercise;

        return EXERCISE_PART[exercisePartKeyOfTab] === EXERCISE_PART.ARM
          ? EXERCISE_PART[exercisePartKey] === EXERCISE_PART.BICEPS ||
              EXERCISE_PART[exercisePartKey] === EXERCISE_PART.TRICEPS
          : exercisePartKeyOfTab === exercisePartKey;
      });

      accumulated.set(exercisePartKeyOfTab, [
        {
          part: exercisePartOfTab,
          exercises: exercisesByPart,
        },
      ]);
      return accumulated;
    },
    new Map()
  );

  return Array.from(tabPanels.values());
};

const useExerciseChoice = () => {
  const { error: exerciseError, isError: isExerciseError, exercises } = useFetchExercises();
  const { error: userInfoError, isError: isUserInfoError, userInfo } = useFetchUserInfo();

  const exerciseTabHeaders: Tab[] | null = useMemo(() => {
    if (!userInfo?.splitType) return null;

    const { splitType: splitTypeKey } = userInfo;
    const splitType = SPLIT_TYPE[splitTypeKey];

    return toTabHeaders(EXERCISE_PART_OF_TAB_BY_SPLIT_TYPE[splitType]);
  }, [userInfo]);

  const exerciseTabPanels: ExercisePanel[] = useMemo(() => {
    if (!exercises || !exerciseTabHeaders) return [];

    const isFullBodyWorkout = exerciseTabHeaders.length === 0;
    const isSplit3DayWorkout = exerciseTabHeaders.length === 3;
    const isSplit5DayWorkout = exerciseTabHeaders.length === 5;

    if (isFullBodyWorkout) {
      return toTabPanelsOfFullBodyWorkout(exercises);
    }
    if (isSplit3DayWorkout) {
      return toTabPanelsOfSplit3DayWorkout(exercises, exerciseTabHeaders);
    }
    if (isSplit5DayWorkout) {
      return toTabPanelsOfSplit5DayWorkout(exercises, exerciseTabHeaders);
    }

    return [];
  }, [exercises, exerciseTabHeaders]);

  return {
    error: exerciseError || userInfoError,
    isError: isExerciseError || isUserInfoError,
    exercises,
    tabHeaders: exerciseTabHeaders,
    tabPanels: exerciseTabPanels,
  };
};

export default useExerciseChoice;
