import React, { useState } from 'react';
import classNames from 'classnames';
import style from './audioExplanation.module.scss';
import { CustomInput, CustomLabel } from '@/components/common';

const {
  s_mainTitle,
  s_subTitle,
  s_highlight,
  s_container,
  s_radioButtonContainer,
  s_audioSpeedButton,
  s_selectedAudioSpeed,
  s_nextButton,
} = style;

interface Props {
  needDetailExplanation: number | null;
  setNeedDetailExplanation: (audioExplanation: number) => void;
  handleSetNextPage: () => void;
}

const AudioExplanation = ({
  needDetailExplanation,
  setNeedDetailExplanation,
  handleSetNextPage,
}: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(needDetailExplanation === null);

  const createAudioExplanationStateChangeHandler = (userExplanationType: number) => () => {
    setNeedDetailExplanation(userExplanationType);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames('s_a11yHidden')}>운동 설명 길이 선택</h2>
      <p className={classNames(s_mainTitle)}>
        <span className={classNames('s_whiteSpace')}>
          <span className={classNames(s_highlight)}>운동에 대한 설명</span>을
        </span>
        자세히 듣고 싶으신가요?
      </p>

      <p className={classNames(s_subTitle)}>오디오 코치가 하는 설명의 길이가 달라져요</p>
      <div className={classNames(s_radioButtonContainer)}>
        <CustomLabel
          htmlFor="detailExplanation"
          className={classNames(s_audioSpeedButton, {
            [s_selectedAudioSpeed]: needDetailExplanation === 1,
          })}
        >
          네, 차근차근 설명해주세요
        </CustomLabel>
        <CustomInput
          type="radio"
          value="detailExplanation"
          id="detailExplanation"
          className={classNames('s_a11yHidden')}
          onClick={createAudioExplanationStateChangeHandler(1)}
        />
        <CustomLabel
          htmlFor="simpleExplanation"
          className={classNames(s_audioSpeedButton, {
            [s_selectedAudioSpeed]: needDetailExplanation === 0,
          })}
        >
          아니요, 자세한 설명은 안들을래요
        </CustomLabel>
        <CustomInput
          type="radio"
          value="simpleExplanation"
          id="simpleExplanation"
          className={classNames('s_a11yHidden')}
          onClick={createAudioExplanationStateChangeHandler(0)}
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
};

export default AudioExplanation;
