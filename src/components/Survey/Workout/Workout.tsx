import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './workout.module.scss';

const { s_container, s_selectedContainer, s_content, s_title, s_description } = style;

interface Props {
  selectedHealthStyle: string;
  currentHealthStyle: string;
  imageComponent: JSX.Element;
  title: string;
  handleClickHealthStyle: (healthStyle: string) => void;
  children: ReactNode;
}

const Workout = ({
  selectedHealthStyle,
  currentHealthStyle,
  imageComponent,
  title,
  handleClickHealthStyle,
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={classNames(s_container, {
        [s_selectedContainer]: selectedHealthStyle === currentHealthStyle,
      })}
      onClick={() => {
        handleClickHealthStyle(currentHealthStyle);
      }}
    >
      <div className={classNames(s_content)}>
        {imageComponent}
        <div className={classNames(s_title)}>{title}</div>
        <div className={classNames(s_description)}>{children}</div>
      </div>
    </button>
  );
};

export default Workout;
