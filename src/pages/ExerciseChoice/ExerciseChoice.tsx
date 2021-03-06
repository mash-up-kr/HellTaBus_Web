import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { useExerciseChoice } from '@/hooks';
import { Tabs, Header, ExercisePartCarousel, ExerciseChoiceBottom, Loading } from '@/components';
import style from './exerciseChoice.module.scss';
import { EXERCISE_SUGGESTION_SIZE_BY_SPLIT_TYPE } from '@/consts';

const { s_exerciseChoice, s_exerciseChoiceHeader, s_exerciseTabs, s_exerciseTabPanel } = style;

const ExerciseChoice = () => {
  const history = useHistory();
  const handleClickBackButton = () => {
    history.goBack();
  };
  const {
    isLoading,
    tabHeaders,
    tabPanels,
    splitType,
    selectedExercises,
    setSelectedExercises,
    isModifyConfirmDialogOpen,
    setIsModifyConfirmDialogOpen,
    setCurrentTabIndex,
    setSelectedTabIndex,
    checkTabIndexWithSelectedExercises,
    sortExercisesByPriority,
  } = useExerciseChoice();
  const maxSizeOfSelectableExercise =
    EXERCISE_SUGGESTION_SIZE_BY_SPLIT_TYPE[splitType] * tabPanels[0]?.length;

  const [clickedIndex, setClickedIndex] = useState(0);
  const handleCustomClickTabHeader = (tabIndex: number, selectTab: (index: number) => void) => {
    setClickedIndex(tabIndex);
    if (!checkTabIndexWithSelectedExercises(tabIndex)) {
      setIsModifyConfirmDialogOpen(true);
    } else {
      setCurrentTabIndex(tabIndex);
      selectTab(tabIndex);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classNames(s_exerciseChoice)}>
      <Header
        className={classNames(s_exerciseChoiceHeader)}
        title="운동변경"
        handleClickBackButton={handleClickBackButton}
      />
      {tabHeaders && tabPanels ? (
        <Tabs
          headers={tabHeaders}
          className={classNames(s_exerciseTabs)}
          handleCustomClickTabHeader={handleCustomClickTabHeader}
          isModifyConfirmDialogOpen={isModifyConfirmDialogOpen}
          setIsModifyConfirmDialogOpen={setIsModifyConfirmDialogOpen}
          setSelectedTabIndex={setSelectedTabIndex}
          clickedIndex={clickedIndex}
          setSelectedExercises={setSelectedExercises}
        >
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
      <ExerciseChoiceBottom
        selectedExercises={selectedExercises}
        maxSizeOfselectableExercise={maxSizeOfSelectableExercise}
        sortExercisesByPriority={sortExercisesByPriority}
      />
    </div>
  );
};

export default ExerciseChoice;
