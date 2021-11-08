/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './age.module.scss';
import NextButton from '@/components/common/NextButton/NextButton';
import Coolicon from '@/assets/coolicon.svg';

const {
  s_container,
  s_title,
  s_commonInput,
  s_errorInput,
  s_inputContainer,
  s_errorMsg,
  s_errorIcon,
} = styles;

interface Props {
  nickname: string;
  age: number;
  setAge: (value: number) => void;
  setNextPage: () => void;
}

function Age({ nickname, age, setAge, setNextPage }: Props): JSX.Element {
  const [isDisabled, setIsDisabled] = useState<boolean>(!age);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isValidAge = (userAge: number) => {
    if (!userAge) {
      return '정보를 입력해 주세요';
    }
    if (Number.isNaN(userAge)) {
      return '나이에는 숫자만 입력이 가능합니다.';
    }
    if (userAge < 5 || userAge > 200) {
      return `정말 ${age}살이 맞으신가요?`;
    }

    return null;
  };

  useEffect(() => {
    const ageError = isValidAge(age);

    if (ageError) {
      setIsDisabled(true);
      setErrorMessage(ageError);
    } else {
      setIsDisabled(false);
      setErrorMessage('');
    }
  }, [age]);

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    setAge(+value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        {nickname}님의 <span>나이</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: age !== 0 && errorMessage,
          })}
          type="text"
          placeholder="나이 입력"
          value={age || ''}
          onChange={handleChangeAge}
        />
        {age !== 0 && errorMessage && <Coolicon className={classNames(s_errorIcon)} />}
      </div>
      {errorMessage && <span className={classNames(s_errorMsg)}> {errorMessage}</span>}
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Age;
