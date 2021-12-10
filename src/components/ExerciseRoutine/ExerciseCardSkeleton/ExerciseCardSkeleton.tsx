import React from 'react';
import classNames from 'classnames';
import style from './exerciseCardSkeleton.module.scss';

const { s_exerciseSkeleton, s_exerciseNameSkeleton } = style;

const ExerciseCardSkeleton = () => {
  return (
    <article className={classNames(s_exerciseSkeleton)}>
      <div />
      <div className={classNames(s_exerciseNameSkeleton)}>
        <span />
      </div>
    </article>
  );
};

export default ExerciseCardSkeleton;
