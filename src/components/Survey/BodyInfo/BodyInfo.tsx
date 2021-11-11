import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './bodyInfo.module.scss';
import ErrorIcon from '@/assets/svg/error-icon.svg';

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
} = style;

interface Props {
  nickname: string;
  height: number;
  setHeight: (value: number) => void;
  weight: number;
  setWeight: (value: number) => void;
  setNextPage: () => void;
}

const BodyInfo = ({ nickname, height, setHeight, weight, setWeight, setNextPage }: Props) => {
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
        <p>{nickname}님의</p> <span>키와 몸무게</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <label htmlFor="height" className={classNames(s_heightLabel)}>
          키
          <input
            className={classNames(s_input, {
              [s_errorInput]: heightErrorMessage,
            })}
            type="number"
            id="height"
            placeholder="키 입력"
            value={height || ''}
            onChange={handleChangeHeight}
          />
        </label>
        <label htmlFor="weight" className={classNames(s_weightLabel)}>
          몸무게
          <input
            className={classNames(s_input, {
              [s_errorInput]: weightErrorMessage,
            })}
            type="number"
            id="weight"
            placeholder="몸무게 입력"
            value={weight || ''}
            onChange={handleChangeWeight}
          />
        </label>

        {weightErrorMessage && <ErrorIcon className={classNames(s_weightError)} />}
        {heightErrorMessage && <ErrorIcon className={classNames(s_heightError)} />}
        <span className={classNames(s_heightErrorMsg)}>{heightErrorMessage}</span>
        <span className={classNames(s_weightErrorMsg)}>{weightErrorMessage}</span>
      </div>
      <button
        className={classNames(s_nextButton)}
        type="button"
        onClick={setNextPage}
        disabled={isDisabled}
      >
        다음
      </button>
    </section>
  );
};

export default BodyInfo;
