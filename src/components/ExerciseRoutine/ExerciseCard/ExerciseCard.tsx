import React from 'react';
import style from './exerciseCard.module.scss';

interface Props {
  img: string;
  exerciseName: string;
}

const { s_exercise, s_exerciseNameWraper } = style;

const ExerciseCard = ({ img, exerciseName }: Props) => {
  return (
    <li className={s_exercise}>
      <div>
        <img src={img} alt={exerciseName} />
      </div>
      <div className={s_exerciseNameWraper}>
        <span>{exerciseName}</span>
      </div>
    </li>
  );
};

export default ExerciseCard;
