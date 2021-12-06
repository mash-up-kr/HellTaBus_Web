import React from 'react';
import classNames from 'classnames';
import {
  Carousel,
  CustomInput,
  CustomLabel,
  ExerciseCardWithVolume,
  ExercisePartCarouselHeader,
} from '@/components';
import style from './exercisePartCarousel.module.scss';
import { Exercise } from '@/types';

interface Props {
  partName: string;
  exercises: Exercise[];
  selectedExercises?: Map<string, Set<Exercise>>;
  setSelectedExercises?: React.Dispatch<React.SetStateAction<Map<string, Set<Exercise>>>>;
  suggestionSize?: number;
}

const { s_exercisePartCarousel, s_customCarousel, s_notSelectedExerciseCard } = style;

const ExercisePartCarousel = ({
  partName,
  exercises,
  selectedExercises,
  setSelectedExercises,
  suggestionSize,
}: Props) => {
  const selectedCount = selectedExercises?.get(partName)?.size || 0;

  return (
    <div className={classNames(s_exercisePartCarousel)}>
      <ExercisePartCarouselHeader
        partName={partName}
        suggestionSize={suggestionSize}
        selectedCount={selectedCount}
      />
      <Carousel className={classNames(s_customCarousel)}>
        {exercises.map((exercise) => {
          const { id, priority, imageLink, name, setCount, baseCount, startWeight, changeWeight } =
            exercise;
          const exerciseCardId = `exerciseCard-${id}`;
          const isSelected = (_exercise: Exercise) =>
            selectedExercises?.get(partName)?.has(_exercise);
          const handleClick = (_exercise: Exercise) => {
            if (!setSelectedExercises) return;

            const selectedExercisesByPartName = selectedExercises?.get(partName) as Set<Exercise>;

            setSelectedExercises((prev) => {
              const newSelectedExercisesByPartName = new Set(selectedExercisesByPartName);

              const action = isSelected(_exercise) ? 'delete' : 'add';
              newSelectedExercisesByPartName[action](_exercise);

              return new Map(prev).set(partName, newSelectedExercisesByPartName);
            });
          };

          return (
            <React.Fragment key={exerciseCardId}>
              <CustomLabel htmlFor={exerciseCardId}>
                <ExerciseCardWithVolume
                  classNameForBorder={classNames({
                    [s_notSelectedExerciseCard]: !isSelected(exercise),
                  })}
                  isSuggestion={priority <= (suggestionSize as number)}
                  imageLink={imageLink}
                  exerciseName={name}
                  setCount={setCount}
                  baseCount={baseCount}
                  weight={startWeight + changeWeight}
                />
              </CustomLabel>
              <CustomInput
                id={exerciseCardId}
                className={classNames('s_a11yHidden')}
                type="checkbox"
                onClick={() => handleClick(exercise)}
              />
            </React.Fragment>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ExercisePartCarousel;
