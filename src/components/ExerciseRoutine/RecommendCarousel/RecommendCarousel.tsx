import React from 'react';
import { ExerciseCard, Carousel } from '@/components';
import style from './recommendCarousel.module.scss';
import { Exercise } from '@/types/exercise';

interface Props {
  recommendList: Exercise[];
}

const { s_routineCarousel } = style;

const RecommendCarousel = ({ recommendList }: Props) => {
  return (
    <Carousel className={s_routineCarousel}>
      {recommendList.map(({ imageUrl, exerciseName }, index) => (
        <ExerciseCard
          imageUrl={imageUrl}
          exerciseName={exerciseName}
          key={`exerciseCard-${index}`}
        />
      ))}
    </Carousel>
  );
};

export default RecommendCarousel;
