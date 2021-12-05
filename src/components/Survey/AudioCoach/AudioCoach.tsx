import React, { useState } from 'react';
import classNames from 'classnames';
import style from './audioCoach.module.scss';
import { CustomInput, CustomLabel, CustomButton } from '@/components/common';

const {
  s_mainTitle,
  s_container,
  s_subTitle,
  s_highlight,
  s_radioButtonContainer,
  s_audioCoachButton,
  s_selectedAudioCoach,
} = style;

interface Props {
  audioCoach: string;
  setAudioCoach: (audioCoach: string) => void;
  handleClickCustomEvent: () => void;
  buttonType: string;
}

const AudioCoach = ({ audioCoach, setAudioCoach, handleClickCustomEvent, buttonType }: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!audioCoach);

  const createAudioCoachStateChangeHandler = (userAudioCoach: string) => () => {
    setAudioCoach(userAudioCoach);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames('s_a11yHidden')}>오디오 타입 선택</h2>
      <p className={classNames(s_mainTitle)}>
        어떤 <span className={classNames(s_highlight)}> 오디오 코치</span>와
        <span className={classNames('s_whiteSpace')}>함께 운동하고 싶으세요?</span>
      </p>
      <p className={classNames(s_subTitle)}>목소리를 들어보면 선택이 더 쉬울거에요!</p>
      <div className={classNames(s_radioButtonContainer)}>
        <CustomLabel
          htmlFor="scary"
          className={classNames(s_audioCoachButton, {
            [s_selectedAudioCoach]: audioCoach === 'SCARY',
          })}
        >
          교관같이 무서운 코치
        </CustomLabel>
        <CustomInput
          id="scary"
          type="radio"
          className={classNames('s_a11yHidden')}
          onClick={createAudioCoachStateChangeHandler('SCARY')}
        />
        <CustomLabel
          htmlFor="comfortable"
          className={classNames(s_audioCoachButton, {
            [s_selectedAudioCoach]: audioCoach === 'COMFORTABLE',
          })}
        >
          편안하게 운동을 도와주는 코치
        </CustomLabel>

        <CustomInput
          id="comfortable"
          type="radio"
          className={classNames('s_a11yHidden')}
          onClick={createAudioCoachStateChangeHandler('COMFORTABLE')}
        />
        <CustomLabel
          htmlFor="funny"
          className={classNames(s_audioCoachButton, {
            [s_selectedAudioCoach]: audioCoach === 'FUNNY',
          })}
        >
          운동을 잘아는 잼민이 코치
        </CustomLabel>
        <CustomInput
          id="funny"
          type="radio"
          className={classNames('s_a11yHidden')}
          onClick={createAudioCoachStateChangeHandler('FUNNY')}
        />
      </div>
      <CustomButton
        buttonType={buttonType}
        onClick={handleClickCustomEvent}
        isDisabled={isDisabled}
      />
    </section>
  );
};

export default AudioCoach;
