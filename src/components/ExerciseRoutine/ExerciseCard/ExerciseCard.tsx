import React from 'react';
import style from './exerciseCard.module.scss';

interface Props {
  imageUrl: string;
  exerciseName: string;
}

const { s_exercise, s_exerciseNameWraper, s_exerciseImage } = style;

const ExerciseCard = ({ imageUrl, exerciseName }: Props) => {
  return (
    <article className={s_exercise}>
      <div>
        <img src={imageUrl} alt={exerciseName} className={s_exerciseImage} />
      </div>
      <div className={s_exerciseNameWraper}>
        <span>{exerciseName}</span>
      </div>
    </article>
  );
};

export default ExerciseCard;
