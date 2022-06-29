import React, { useState } from 'react';
import { ExerciseDescriptionModalDialog, ResponsiveImage } from '@/components';
import style from './exerciseCard.module.scss';

interface Props {
  imageLink: string;
  exerciseName: string;
  exerciseDescription: { what: string; where: string; how: string[]; caution: string };
  placeHolderImage: string;
}

const { s_exercise, s_exerciseNameWraper, s_exerciseImage } = style;

const ExerciseCard = ({
  imageLink,
  exerciseName,
  exerciseDescription,
  placeHolderImage,
}: Props) => {
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);

  const handleOpenDescriptionModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsDescriptionModalOpen(true);
  };
  return (
    <>
      <article className={s_exercise}>
        <button type="button" onClick={handleOpenDescriptionModal}>
          <ResponsiveImage
            src={imageLink}
            alt={exerciseName}
            className={s_exerciseImage}
            placeHolderImage={placeHolderImage}
          />
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
