import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './workout.module.scss';

const { s_container, s_selectedContainer, s_content, s_title, s_description } = style;

interface Props {
  selectedSplitType: string;
  currentSplitType: string;
  imageComponent: JSX.Element;
  title: string;
  handleClickSplitType: (healthStyle: string) => void;
  children: ReactNode;
}

const Workout = ({
  selectedSplitType,
  currentSplitType,
  imageComponent,
  title,
  handleClickSplitType,
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={classNames(s_container, {
        [s_selectedContainer]: selectedSplitType === currentSplitType,
      })}
      onClick={() => {
        handleClickSplitType(currentSplitType);
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
