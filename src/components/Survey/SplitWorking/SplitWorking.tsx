import React, { ReactNode } from 'react';
import classNames from 'classnames';
import style from './splitWorking.module.scss';

const { s_container, s_selectedContainer, s_content, s_title, s_description } = style;

interface Props {
  selectedSplit: number;
  currentSplit: number;
  imageComponent: JSX.Element;
  title: string;
  handleClickSplit: (splitNumber: number) => void;
  children: ReactNode;
}

const SplitWorking = ({
  selectedSplit,
  currentSplit,
  imageComponent,
  title,
  handleClickSplit,
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={classNames(s_container, { [s_selectedContainer]: selectedSplit === currentSplit })}
      onClick={() => {
        handleClickSplit(currentSplit);
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

export default SplitWorking;
