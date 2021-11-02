import React, { useState } from 'react';
import classNames from 'classnames';
import style from './height.module.scss';
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
  height: number;
  setHeight: (value: number) => void;
  setNextPage: () => void;
}

function Height({ nickname, height, setHeight, setNextPage }: Props): JSX.Element {
  const [isDisabled, setIsDisabled] = useState<boolean>(!height);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const checkHeightValidation = (userHeight: number) => {
    if (!userHeight) {
      setErrorMessage('정보를 입력해주세요.');
      setIsDisabled(true);
    } else if (Number.isNaN(userHeight)) {
      setErrorMessage('키는 숫자만 입력 가능합니다.');
      setIsDisabled(true);
    } else if (userHeight > 300) {
      setErrorMessage(`정말 ${userHeight}cm 맞으신가요!?🤔`);
      setIsDisabled(true);
    } else {
      setErrorMessage('');
      setIsDisabled(false);
    }
  };

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    setHeight(+value);
    checkHeightValidation(+value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        {nickname}님의 <span>키</span>를 알려주세요
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: errorMessage,
          })}
          type="text"
          placeholder="키 입력"
          value={height || ''}
          onChange={handleChangeHeight}
        />
        {errorMessage && <Coolicon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Height;
