import React, { useState } from 'react';
import classNames from 'classnames';
import style from './age.module.scss';
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
} = style;

interface Props {
  nickname: string;
  age: number;
  setAge: (value: number) => void;
  setNextPage: () => void;
}

function Age({ nickname, age, setAge, setNextPage }: Props): JSX.Element {
  const [isDisabled, setIsDisabled] = useState<boolean>(!age);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const checkAgeValidation = (userAge: number) => {
    if (!userAge) {
      setErrorMessage('정보를 입력해주세요.');
      setIsDisabled(true);
    } else if (Number.isNaN(userAge)) {
      setErrorMessage('나이에는 숫자만 입력 가능합니다.');
      setIsDisabled(true);
    } else if (userAge < 5 || userAge > 200) {
      setErrorMessage(`정말 ${userAge}살이 맞으신가요?`);
      setIsDisabled(true);
    } else {
      setErrorMessage('');
      setIsDisabled(false);
    }
  };

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setAge(+value);
    checkAgeValidation(+value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        {nickname}님의 <span>나이</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: errorMessage,
          })}
          type="text"
          placeholder="나이 입력"
          value={age || ''}
          onChange={handleChangeAge}
        />
        {errorMessage && <Coolicon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Age;
