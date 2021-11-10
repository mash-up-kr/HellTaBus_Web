import React, { useEffect, useState, useMemo, useCallback } from 'react';
import classNames from 'classnames';
import styles from './age.module.scss';
import NextButton from '@/components/common/NextButton/NextButton';
import ErrorIcon from '@/assets/error-icon.svg';

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
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isDisabled = useMemo(() => !age || !!errorMessage, [age, errorMessage]);

  const isValidAge = useCallback(() => {
    if (Number.isNaN(age)) {
      return '나이에는 숫자만 입력이 가능합니다.';
    }
    if (age < 5 || age > 200) {
      return `정말 ${age}살이 맞으신가요?`;
    }

    return null;
  }, [age]);

  useEffect(() => {
    const ageError = isValidAge();

    if (ageError) {
      setErrorMessage(ageError);
    } else {
      setErrorMessage('');
    }
  }, [isValidAge]);

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
        {age !== 0 && errorMessage && <ErrorIcon className={classNames(s_errorIcon)} />}
      </div>
      {age !== 0 && errorMessage && <span className={classNames(s_errorMsg)}> {errorMessage}</span>}
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Age;
