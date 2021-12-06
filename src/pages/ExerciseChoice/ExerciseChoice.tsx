import React from 'react';
import classNames from 'classnames';
import { useExerciseChoice } from '@/hooks';
import { Tabs, Header, ExercisePartCarousel } from '@/components';
import style from './exerciseChoice.module.scss';
import { EXERCISE_SUGGESTION_SIZE_BY_SPLIT_TYPE } from '@/consts';

const { s_exerciseChoiceHeader, s_exerciseTabPanel } = style;

const ExerciseChoice = () => {
  const { tabHeaders, tabPanels, splitType, selectedExercises, setSelectedExercises } =
    useExerciseChoice();

  return (
    <div>
      <Header
        className={classNames(s_exerciseChoiceHeader)}
        title="운동변경"
        handleClickBackButton={() => {}}
      />
      {tabHeaders && tabPanels ? (
        <Tabs headers={tabHeaders}>
          {tabPanels.map((exerciseParts, index) => (
            <div className={classNames(s_exerciseTabPanel)} key={`tabPanel-${index}`}>
              {exerciseParts.map(({ part, exercises }) => (
                <ExercisePartCarousel
                  key={`exercisePartCarousel-${part}`}
                  partName={part}
                  exercises={exercises}
                  selectedExercises={selectedExercises}
                  setSelectedExercises={setSelectedExercises}
                  suggestionSize={EXERCISE_SUGGESTION_SIZE_BY_SPLIT_TYPE[splitType]}
                />
              ))}
            </div>
          ))}
        </Tabs>
      ) : null}
    </div>
  );
};

export default ExerciseChoice;
