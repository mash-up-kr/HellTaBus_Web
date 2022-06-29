import React from 'react';
import classNames from 'classnames';
import { ExerciseCard, Carousel, ExerciseCardSkeleton } from '@/components';
import style from './recommendCarousel.module.scss';
import { Exercise, ExerciseDescription } from '@/types';

interface Props {
  recommendList: Exercise[];
  className?: string;
  isLoadingSuggestion: boolean;
}

const { s_routineCarousel } = style;

const RecommendCarousel = ({ recommendList, className, isLoadingSuggestion }: Props) => {
  return (
    <Carousel className={classNames(className, s_routineCarousel)}>
      {isLoadingSuggestion
        ? Array.from({ length: 3 }).map((_, index) => (
            <ExerciseCardSkeleton key={`exerciseSkeleton-${index}`} />
          ))
        : recommendList?.map(({ imageLink, name, description, placeHolderImage }, index) => {
            const exerciseDescription: ExerciseDescription = JSON.parse(description);
            return (
              <ExerciseCard
                imageLink={imageLink}
                exerciseName={name}
                key={`exerciseCard-${index}`}
                exerciseDescription={exerciseDescription}
                placeHolderImage={placeHolderImage}
              />
            );
          })}
    </Carousel>
  );
};

export default RecommendCarousel;
