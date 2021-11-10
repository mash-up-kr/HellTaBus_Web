import React from 'react';
import classNames from 'classnames';
import { ExerciseCard, Carousel } from '@/components';
import style from './recommendCarousel.module.scss';
import { Exercise } from '@/types';

interface Props {
  recommendList: Exercise[];
  className?: string;
}

const { s_routineCarousel } = style;

const RecommendCarousel = ({ recommendList, className }: Props) => {
  return (
    <Carousel className={classNames(className, s_routineCarousel)}>
      {recommendList.map(({ imageLink, name }, index) => (
        <ExerciseCard imageLink={imageLink} exerciseName={name} key={`exerciseCard-${index}`} />
      ))}
    </Carousel>
  );
};

export default RecommendCarousel;
