import React, { useState } from 'react';
import classNames from 'classnames';
import style from './exerciseSpeed.module.scss';
import { CustomInput, CustomLabel, CustomButton } from '@/components';
import { CustomButtonType } from '@/types';

const {
  s_container,
  s_highlight,
  s_radioButtonContainer,
  s_mainTitle,
  s_subTitle,
  s_exerciseSpeedButton,
  s_selectedExerciseSpeed,
} = style;

interface Props {
  exerciseSpeed: string;
  setExerciseSpeed: (exerciseSpeed: string) => void;
  handleClickCustomEvent: React.MouseEventHandler<HTMLButtonElement>;
  buttonType: CustomButtonType;
}

function ExerciseSpeed({
  exerciseSpeed,
  setExerciseSpeed,
  handleClickCustomEvent,
  buttonType,
}: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!exerciseSpeed);

  const createExerciseSpeedStateChangeHandler = (userExerciseSpeed: string) => () => {
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
      <div className={classNames(s_radioButtonContainer)}>
        <CustomLabel
          htmlFor="slowExerciseSpeed"
          className={classNames(s_exerciseSpeedButton, {
            [s_selectedExerciseSpeed]: exerciseSpeed === 'SLOW',
          })}
        >
          천천히
        </CustomLabel>
        <CustomInput
          type="radio"
          value="slowExerciseSpeed"
          id="slowExerciseSpeed"
          className={classNames('s_a11yHidden')}
          onClick={createExerciseSpeedStateChangeHandler('SLOW')}
        />

        <CustomLabel
          htmlFor="normalExerciseSpeed"
          className={classNames(s_exerciseSpeedButton, {
            [s_selectedExerciseSpeed]: exerciseSpeed === 'NORMAL',
          })}
        >
          보통
        </CustomLabel>
        <CustomInput
          type="radio"
          value="normalExerciseSpeed"
          id="normalExerciseSpeed"
          className={classNames('s_a11yHidden')}
          onClick={createExerciseSpeedStateChangeHandler('NORMAL')}
        />

        <CustomLabel
          htmlFor="fastExerciseSpeed"
          className={classNames(s_exerciseSpeedButton, {
            [s_selectedExerciseSpeed]: exerciseSpeed === 'FAST',
          })}
        >
          빠르게
        </CustomLabel>
        <CustomInput
          type="radio"
          value="fastExerciseSpeed"
          id="fastExerciseSpeed"
          className={classNames('s_a11yHidden')}
          onClick={createExerciseSpeedStateChangeHandler('FAST')}
        />
      </div>
      <CustomButton
        buttonType={buttonType}
        onClick={handleClickCustomEvent}
        isDisabled={isDisabled}
      />
    </section>
  );
}

export default ExerciseSpeed;
