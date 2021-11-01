import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './carousel.module.scss';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

const { s_carousel } = style;

function Carousel({ children, className }: CarouselProps) {
  return <ul className={classNames(s_carousel, className)}>{children}</ul>;
}

export default Carousel;
