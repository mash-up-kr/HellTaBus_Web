import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './carousel.module.scss';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

const { s_carousel, s_carouselItem } = style;

function Carousel({ children, className }: CarouselProps) {
  return (
    <ul className={classNames(s_carousel, className)}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            return (
              <li className={classNames(s_carouselItem)} key={`carouselItem-${index}`}>
                {child}
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default Carousel;
