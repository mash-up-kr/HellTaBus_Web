import React, { useState } from 'react';
import classNames from 'classnames';
import style from './exerciseSpeed.module.scss';
import { CustomInput, CustomLabel } from '@/components/common';

const {
  s_container,
  s_highlight,
  s_buttonWrapper,
  s_mainTitle,
  s_subTitle,
  s_exerciseSpeedButton,
  s_selectedExerciseSpeed,
  s_nextButton,
} = style;

interface Props {
  exerciseSpeed: string;
  setExerciseSpeed: (value: string) => void;
  handleSetNextPage: () => void;
}

function ExerciseSpeed({ exerciseSpeed, setExerciseSpeed, handleSetNextPage }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!exerciseSpeed);

  const handleClickExerciseSpeedButton = (userExerciseSpeed: string) => () => {
    setExerciseSpeed(userExerciseSpeed);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames('s_a11yHidden')}>운동 속도 선택</h2>
      <p className={classNames(s_mainTitle)}>
        <span className={classNames('s_whiteSpace')}>
          <span className={classNames(s_highlight)}>어떤 속도</span>로
        </span>
        운동 하길 원하시나요?
      </p>
      <p className={classNames(s_subTitle)}>운동 경험이 적을수록 천천히 해보세요</p>
      <div className={classNames(s_buttonWrapper)}>
        <CustomLabel
          htmlFor="SLOW"
          className={classNames(s_exerciseSpeedButton, {
            [s_selectedExerciseSpeed]: exerciseSpeed === 'SLOW',
          })}
        >
          천천히
        </CustomLabel>
        <CustomInput
          type="radio"
          value="SLOW"
          id="SLOW"
          className={classNames('s_a11yHidden')}
          onClick={handleClickExerciseSpeedButton('SLOW')}
        />

        <CustomLabel
          htmlFor="MIDDLE"
          className={classNames(s_exerciseSpeedButton, {
            [s_selectedExerciseSpeed]: exerciseSpeed === 'MIDDLE',
          })}
        >
          보통
        </CustomLabel>
        <CustomInput
          type="radio"
          value="MIDDLE"
          id="MIDDLE"
          className={classNames('s_a11yHidden')}
          onClick={handleClickExerciseSpeedButton('MIDDLE')}
        />

        <CustomLabel
          htmlFor="FAST"
          className={classNames(s_exerciseSpeedButton, {
            [s_selectedExerciseSpeed]: exerciseSpeed === 'FAST',
          })}
        >
          빠르게
        </CustomLabel>
        <CustomInput
          type="radio"
          value="FAST"
          id="FAST"
          className={classNames('s_a11yHidden')}
          onClick={handleClickExerciseSpeedButton('FAST')}
        />
      </div>
      <button
        className={classNames(s_nextButton)}
        type="button"
        onClick={handleSetNextPage}
        disabled={isDisabled}
      >
        다음
      </button>
    </section>
  );
}

export default ExerciseSpeed;
