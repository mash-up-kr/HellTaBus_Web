import React, { useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
import style from './age.module.scss';
import ErrorIcon from '@/assets/svg/error-icon.svg';

const {
  s_container,
  s_title,
  s_commonInput,
  s_errorInput,
  s_inputContainer,
  s_errorMsg,
  s_errorIcon,
  s_nextButton,
} = style;

interface Props {
  nickname: string;
  age: number;
  setAge: (value: number) => void;
  handleSetNextPage: () => void;
}

const Age = ({ nickname, age, setAge, handleSetNextPage }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isDisabled = useMemo(() => !age || !!errorMessage, [age, errorMessage]);

  useEffect(() => {
    const isValidAge = (userAge: number) => {
      if (Number.isNaN(userAge)) {
        return '나이에는 숫자만 입력이 가능합니다.';
      }
      if (userAge > 200) {
        return `정말 ${userAge}살이 맞으신가요?`;
      }

      return null;
    };

    const ageError = isValidAge(age);

    if (ageError) {
      setErrorMessage(ageError);
    } else {
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

export default Age;
