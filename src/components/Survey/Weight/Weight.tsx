import React, { useState } from 'react';
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

  const checkWeightValidation = (userWeight: number) => {
    if (!userWeight) {
      setErrorMessage('정보를 입력해 주세요');
      setIsDisabled(true);
    } else if (Number.isNaN(userWeight)) {
      setErrorMessage('몸무게는 숫자만 입력 가능합니다.');
      setIsDisabled(true);
    } else if (userWeight > 1000) {
      setErrorMessage(`정말 ${userWeight}kg 맞으신가요!?🤔`);
      setIsDisabled(true);
    } else {
      setErrorMessage('');
      setIsDisabled(false);
    }
  };

  const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setWeight(+value);
    checkWeightValidation(+value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        {nickname}님의 <span>몸무게</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: errorMessage,
          })}
          type="text"
          placeholder="몸무게 입력"
          value={weight || ''}
          onChange={handleChangeWeight}
        />
        {errorMessage && <Coolicon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
};

export default Weight;
