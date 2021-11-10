import React from 'react';
import style from './exerciseCard.module.scss';

interface Props {
  imageLink: string;
  exerciseName: string;
}

const { s_exercise, s_exerciseNameWraper, s_exerciseImage } = style;

const ExerciseCard = ({ imageLink, exerciseName }: Props) => {
  return (
    <article className={s_exercise}>
      <div>
        <img src={imageLink} alt={exerciseName} className={s_exerciseImage} />
      </div>
      <div className={s_exerciseNameWraper}>
        <span>{exerciseName}</span>
      </div>
    </article>
  );
};

export default ExerciseCard;
