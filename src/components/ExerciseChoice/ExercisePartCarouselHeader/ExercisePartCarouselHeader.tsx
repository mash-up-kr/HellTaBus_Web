import React from 'react';
import classNames from 'classnames';
import style from './exercisePartCarouselHeader.module.scss';

interface Props {
  partName: string;
  suggestionSize?: number;
  selectedCount: number;
}

const { s_header, s_partContainer, s_partName, s_suggestion, s_selectionText } = style;

const ExercisePartCarouselHeader = ({ partName, suggestionSize, selectedCount }: Props) => {
  return (
    <div className={classNames(s_header)}>
      <span className={classNames(s_partContainer)}>
        <span className={classNames(s_partName)}>{partName}</span>
        <span className={classNames(s_suggestion)}>{`${suggestionSize}개 선택필요`}</span>
      </span>
      <span className={classNames(s_selectionText)}>{`${selectedCount}개 선택됨`}</span>
    </div>
  );
};

export default ExercisePartCarouselHeader;
