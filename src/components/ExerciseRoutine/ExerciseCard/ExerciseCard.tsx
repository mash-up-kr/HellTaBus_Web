import React, { useState } from 'react';
import { ExerciseDescriptionModalDialog } from '@/components';
import style from './exerciseCard.module.scss';

interface Props {
  imageLink: string;
  exerciseName: string;
  exerciseDescription: { what: string; where: string; how: string[]; caution: string };
}

const { s_exercise, s_exerciseNameWraper, s_exerciseImage } = style;

const ExerciseCard = ({ imageLink, exerciseName, exerciseDescription }: Props) => {
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);

  const handleOpenDescriptionModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsDescriptionModalOpen(true);
  };
  return (
    <>
      <article className={s_exercise}>
        <button type="button" onClick={handleOpenDescriptionModal}>
          <img src={imageLink} alt={exerciseName} className={s_exerciseImage} />
        </button>
        <div className={s_exerciseNameWraper}>
          <span>{exerciseName}</span>
        </div>
      </article>
      {isDescriptionModalOpen && (
        <ExerciseDescriptionModalDialog
          setIsDescriptionModalOpen={setIsDescriptionModalOpen}
          exerciseDescription={exerciseDescription}
          exerciseName={exerciseName}
        />
      )}
    </>
  );
};

export default ExerciseCard;
