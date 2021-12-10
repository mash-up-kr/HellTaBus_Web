import classNames from 'classnames';
import React from 'react';
import style from './exerciseCardWithVolume.module.scss';

interface Props {
  imageLink: string;
  exerciseName: string;
  baseCount?: number;
  setCount?: number;
  weight?: number;
  isSuggestion?: boolean;
  classNameForBorder?: string;
}

const {
  s_exercise,
  s_suggestion,
  s_imageWrapper,
  s_exerciseImage,
  s_exerciseDescription,
  s_exerciseNameWrapper,
  s_exerciseName,
  s_exerciseVolume,
} = style;

const ExerciseCardWithVolume = ({
  imageLink,
  exerciseName,
  baseCount,
  setCount,
  weight,
  isSuggestion,
  classNameForBorder,
}: Props) => {
  return (
    <article className={classNames(s_exercise, classNameForBorder)}>
      {isSuggestion && <span className={classNames(s_suggestion)}>추천</span>}
      <div className={classNames(s_imageWrapper)}>
        <img className={classNames(s_exerciseImage)} src={imageLink} alt={exerciseName} />
      </div>
      <div className={classNames(s_exerciseDescription)}>
        <div className={classNames(s_exerciseNameWrapper)}>
          <span className={classNames(s_exerciseName)}>{exerciseName}</span>
        </div>
        <span
          className={classNames(s_exerciseVolume)}
        >{`${setCount}세트 | ${weight}kg ${baseCount}회`}</span>
      </div>
    </article>
  );
};

export default ExerciseCardWithVolume;
