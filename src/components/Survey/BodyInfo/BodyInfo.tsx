import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './bodyInfo.module.scss';
import ErrorIcon from '@/assets/svg/error-icon.svg';
import { CustomInput, CustomLabel } from '@/components/common';

const {
  s_container,
  s_inputContainer,
  s_input,
  s_heightLabel,
  s_heightError,
  s_heightErrorMsg,
  s_weightError,
  s_weightErrorMsg,
  s_weightLabel,
  s_errorInput,
  s_title,
  s_nextButton,
  s_highlight,
} = style;

interface Props {
  nickname: string;
  height: number;
  setHeight: (value: number) => void;
  weight: number;
  setWeight: (value: number) => void;
  handleSetNextPage: () => void;
}

const BodyInfo = ({ nickname, height, setHeight, weight, setWeight, handleSetNextPage }: Props) => {
  const [heightErrorMessage, setHeightErrorMessage] = useState<string>('');
  const [weightErrorMessage, setWeightErrorMessage] = useState<string>('');
  const isDisabled = useMemo(
    () => !height || !weight || !!heightErrorMessage || !!weightErrorMessage,
    [height, weight, heightErrorMessage, weightErrorMessage]
  );

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setHeight(+value);
  };

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setWeight(+value);
  };

  useEffect(() => {
    const isValidHeight = () => {
      if (Number.isNaN(height)) {
        return '키는 숫자만 입력 가능합니다.';
      }
      if (height > 300 || height < 0) {
        return '다시 한 번 확인해 주세요';
      }

      return null;
    };

    const heightError = isValidHeight();

    if (heightError) {
      setHeightErrorMessage(heightError);
    } else {
      setHeightErrorMessage('');
    }
  }, [height]);

  useEffect(() => {
    const isValidWeight = () => {
      if (Number.isNaN(weight)) {
        return '몸무게는 숫자만 입력 가능합니다.';
      }
      if (weight > 1000 || weight < 0) {
        return '다시 한 번 확인해 주세요';
      }

      return null;
    };

    const weightError = isValidWeight();

    if (weightError) {
      setWeightErrorMessage(weightError);
    } else {
      setWeightErrorMessage('');
    }
  }, [weight]);

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        <span className={classNames('s_whiteSpace')}>{nickname}님의</span>
        <span className={classNames(s_highlight)}>키와 몸무게</span>를 알려주세요
      </h2>

      <div className={classNames(s_inputContainer)}>
        <CustomLabel htmlFor="height" className={classNames(s_heightLabel)}>
          키
        </CustomLabel>
        <CustomInput
          className={classNames(s_input, {
            [s_errorInput]: heightErrorMessage,
          })}
          type="number"
          id="height"
          placeholder="키 입력"
          value={height || ''}
          onChange={handleChangeHeight}
        />
        <CustomLabel htmlFor="weight" className={classNames(s_weightLabel)}>
          몸무게
        </CustomLabel>
        <CustomInput
          className={classNames(s_input, {
            [s_errorInput]: weightErrorMessage,
          })}
          type="number"
          id="weight"
          placeholder="몸무게 입력"
          value={weight || ''}
          onChange={handleChangeWeight}
        />

        {heightErrorMessage && <ErrorIcon className={classNames(s_heightError)} />}
        {weightErrorMessage && <ErrorIcon className={classNames(s_weightError)} />}
        <span className={classNames(s_heightErrorMsg)}>{heightErrorMessage}</span>
        <span className={classNames(s_weightErrorMsg)}>{weightErrorMessage}</span>
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

export default BodyInfo;
