import React, { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './age.module.scss';
import NextButton from '@/components/common/NextButton/NextButton';
import ErrorIcon from '@/assets/svg/error-icon.svg';

const {
  s_container,
  s_title,
  s_commonInput,
  s_errorInput,
  s_inputContainer,
  s_errorMsg,
  s_errorIcon,
} = style;

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
    if (age > 200) {
      return '다시 한 번 확인해 주세요.';
    }

    return null;
  }, [age]);

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setAge(+value);
  };

  useEffect(() => {
    const ageError = isValidAge();

    if (ageError) {
      setErrorMessage(ageError);
    } else {
      setErrorMessage('');
    }
  }, [isValidAge]);

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        <p>{nickname}님의</p> <span>나이</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: errorMessage,
          })}
          type="number"
          placeholder="나이 입력"
          value={age || ''}
          onChange={handleChangeAge}
        />
        {errorMessage && <ErrorIcon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Age;
