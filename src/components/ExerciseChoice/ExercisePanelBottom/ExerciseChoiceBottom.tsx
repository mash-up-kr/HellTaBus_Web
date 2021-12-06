import React, { useMemo } from 'react';
import classNames from 'classnames';
import style from './exerciseChoiceBottom.module.scss';
import { Exercise } from '@/types';
import Open from '@/assets/svg/open.svg';
import { EXERCISE_ACTIVITY } from '@/consts';
import { startActivity } from '@/utils/mobile/token';

interface Props {
  selectedExercises: Map<string, Exercise[]>;
  maxSizeOfselectableExercise: number;
}

const { s_exerciseChoiceBottom, s_sheetOpenButtonWrapper, s_submitButtonWrapper } = style;

const ExerciseChoiceBottom = ({ selectedExercises, maxSizeOfselectableExercise }: Props) => {
  const selectedExerciseCount = Array.from(selectedExercises.values()).reduce(
    (accumulated, selectedExercisesByPart) => accumulated + selectedExercisesByPart.length,
    0
  );
  const disabledOfSubmitButton = selectedExerciseCount < maxSizeOfselectableExercise;

  const handleOpenExerciseActivity: React.MouseEventHandler<HTMLButtonElement> = () => {
    const exerciseList = Array.from(selectedExercises.values()).reduce(
      (accumulated, selectedExercisesByPart) => [...accumulated, ...selectedExercisesByPart],
      []
    );

    const option = {
      target: EXERCISE_ACTIVITY,
      exerciseList: JSON.stringify(exerciseList),
    };

    startActivity(option, (resCodes: string, resMsg: string, resData: JSON) => {
      console.log(resCodes + resMsg + JSON.stringify(resData));
    });
  };

  return (
    <div className={classNames(s_exerciseChoiceBottom)}>
      <div className={classNames(s_sheetOpenButtonWrapper)}>
        <button type="button">
          <Open />
        </button>
      </div>
      <div className={classNames(s_submitButtonWrapper)}>
        <button
          type="button"
          disabled={disabledOfSubmitButton}
          onClick={handleOpenExerciseActivity}
        >
          {`운동 시작 (${selectedExerciseCount}/${maxSizeOfselectableExercise})`}
        </button>
      </div>
    </div>
  );
};

export default ExerciseChoiceBottom;
