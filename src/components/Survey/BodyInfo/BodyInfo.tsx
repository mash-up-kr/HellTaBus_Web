import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './bodyInfo.module.scss';
import ErrorIcon from '@/assets/svg/error-icon.svg';
import { CustomInput, CustomLabel, CustomButton } from '@/components/common';

const {
  s_container,
  s_inputsContainer,
  s_bodyInfoOption,
  s_label,
  s_errorMessageContainer,
  s_heightError,
  s_errorMessage,
  s_weightError,
  s_errorInput,
  s_title,
  s_highlight,
  s_labelContainer,
} = style;

interface Props {
  nickname: string;
  height: number;
  setHeight: (height: number) => void;
  weight: number;
  setWeight: (weight: number) => void;
  handleSetNextPage: () => void;
  buttonType: 'button' | 'submit';
}

const BodyInfo = ({
  nickname,
  height,
  setHeight,
  weight,
  setWeight,
  handleSetNextPage,
  buttonType,
}: Props) => {
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
      <h2 className={classNames('s_a11yHidden')}>키와 몸무게 입력</h2>
      <p className={classNames(s_title)}>
        <span className={classNames('s_whiteSpace')}>{nickname}님의</span>
        <span className={classNames(s_highlight)}>키와 몸무게</span>를 알려주세요
      </p>

      <div className={classNames(s_inputsContainer)}>
        <div className={classNames(s_labelContainer)}>
          <CustomLabel htmlFor="height" className={classNames(s_label)}>
            키
          </CustomLabel>
          <CustomInput
            className={classNames(s_bodyInfoOption, {
              [s_errorInput]: heightErrorMessage,
            })}
            type="number"
            id="height"
            placeholder="키 입력"
            value={height || ''}
            onChange={handleChangeHeight}
          />
          <div className={classNames(s_errorMessageContainer)}>
            <span className={classNames(s_errorMessage)}>{heightErrorMessage}</span>
          </div>
          {heightErrorMessage && <ErrorIcon className={classNames(s_heightError)} />}
        </div>

        <div className={classNames(s_labelContainer)}>
          <CustomLabel htmlFor="weight" className={classNames(s_label)}>
            몸무게
          </CustomLabel>
          <CustomInput
            className={classNames(s_bodyInfoOption, {
              [s_errorInput]: weightErrorMessage,
            })}
            type="number"
            id="weight"
            placeholder="몸무게 입력"
            value={weight || ''}
            onChange={handleChangeWeight}
          />
          <div className={classNames(s_errorMessageContainer)}>
            <span className={classNames(s_errorMessage)}>{weightErrorMessage}</span>
          </div>
          {weightErrorMessage && <ErrorIcon className={classNames(s_weightError)} />}
        </div>
      </div>
      <CustomButton
        CustomButtonType={buttonType}
        handleClickCustomEvent={handleSetNextPage}
        isDisabled={isDisabled}
      >
        다음
      </CustomButton>
    </section>
  );
};

export default BodyInfo;
