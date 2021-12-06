import React from 'react';
import classNames from 'classnames';
import style from './exerciseChoiceBottom.module.scss';
import { Exercise } from '@/types';
import Open from '@/assets/svg/open.svg';

interface Props {
  selectedExercises: Map<string, Exercise[]>;
}

const { s_exerciseChoiceBottom, s_sheetOpenButtonWrapper, s_submitButtonWrapper } = style;

const ExerciseChoiceBottom = ({ selectedExercises }: Props) => {
  return (
    <div className={classNames(s_exerciseChoiceBottom)}>
      <div className={classNames(s_sheetOpenButtonWrapper)}>
        <button type="button">
          <Open />
        </button>
      </div>
      <div className={classNames(s_submitButtonWrapper)}>
        <button type="button">운동 시작</button>
      </div>
    </div>
  );
};

export default ExerciseChoiceBottom;
