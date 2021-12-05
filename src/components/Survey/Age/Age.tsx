import React, { useEffect, useState, useMemo } from 'react';
import classNames from 'classnames';
import style from './age.module.scss';
import ErrorIcon from '@/assets/svg/error-icon.svg';
import { CustomInput, CustomLabel } from '@/components/common';
import CustomButton from '@/components/common/CustomButton/CustomButton';

const {
  s_container,
  s_title,
  s_commonInput,
  s_errorInput,
  s_inputContainer,
  s_errorMsg,
  s_errorIcon,
  s_highlight,
} = style;

interface Props {
  nickname: string;
  age: number;
  setAge: (value: number) => void;
  handleClickCustomEvent: React.MouseEventHandler<HTMLButtonElement>;
  buttonType: string;
}

const Age = ({ nickname, age, setAge, handleClickCustomEvent, buttonType }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isDisabled = useMemo(() => !age || !!errorMessage, [age, errorMessage]);

  useEffect(() => {
    const isValidAge = (userAge: number) => {
      if (Number.isNaN(userAge)) {
        return '나이에는 숫자만 입력이 가능합니다.';
      }
      if (userAge > 200 || userAge < 0) {
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
      <h2 className={classNames('s_a11yHidden')}>나이 입력</h2>
      <p className={classNames(s_title)}>
        <span className={classNames('s_whiteSpace')}>{nickname}님의</span>
        <span className={classNames(s_highlight)}>나이</span>를 알려주세요
      </p>

      <div className={classNames(s_inputContainer)}>
        <CustomLabel htmlFor="age" className={classNames('s_a11yHidden')}>
          나이
        </CustomLabel>
        <CustomInput
          id="age"
          type="number"
          placeholder="나이 입력"
          value={age || ''}
          onChange={handleChangeAge}
          className={classNames(s_commonInput, {
            [s_errorInput]: errorMessage,
          })}
        />
        {errorMessage && <ErrorIcon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      <CustomButton
        buttonType={buttonType}
        onClick={handleClickCustomEvent}
        isDisabled={isDisabled}
      />
    </section>
  );
};

export default Age;
