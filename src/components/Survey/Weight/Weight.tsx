/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './weight.module.scss';
import Coolicon from '@/assets/coolicon.svg';
import NextButton from '@/components/common/NextButton/NextButton';

const {
  s_container,
  s_title,
  s_commonInput,
  s_inputContainer,
  s_errorInput,
  s_errorIcon,
  s_errorMsg,
} = styles;

interface Props {
  nickname: string;
  weight: number;
  setWeight: (value: number) => void;
  setNextPage: () => void;
}

const Weight = ({ nickname, weight, setWeight, setNextPage }: Props) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(!weight);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isValidWeight = () => {
    if (Number.isNaN(weight)) {
      return '몸무게는 숫자만 입력 가능합니다.';
    }
    if (weight > 1000) {
      return `정말 ${weight}kg 맞으신가요!?🤔`;
    }

    return null;
  };

  useEffect(() => {
    const weightError = isValidWeight();

    if (weightError) {
      setIsDisabled(true);
      setErrorMessage(weightError);
    } else {
      setIsDisabled(false);
      setErrorMessage('');
    }
  }, [weight]);

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setWeight(+value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        {nickname}님의 <span>몸무게</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: weight !== 0 && errorMessage,
          })}
          type="text"
          placeholder="몸무게 입력"
          value={weight || ''}
          onChange={handleChangeWeight}
        />
        {weight !== 0 && errorMessage && <Coolicon className={classNames(s_errorIcon)} />}
      </div>
      {weight !== 0 && errorMessage && (
        <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      )}
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
};

export default Weight;
