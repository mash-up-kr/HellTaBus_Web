import React from 'react';
import classNames from 'classnames';
import styles from './splitWorking.module.scss';

const { s_container, s_selectedContainer, s_content, s_title, s_description } = styles;

interface Props {
  selectedSplit: number;
  currentSplit: number;
  img: JSX.Element;
  title: string;
  handleClickSplit: (splitNumber: number) => void;
  children: string;
}

const SplitWorking = ({
  selectedSplit,
  currentSplit,
  img,
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
        <>{img}</>
        <div className={classNames(s_title)}>{title}</div>
        <div className={classNames(s_description)}>{children}</div>
      </div>
    </button>
  );
};

export default SplitWorking;
