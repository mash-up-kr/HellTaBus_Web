import React, { useState } from 'react';
import classNames from 'classnames';
import style from './nickname.module.scss';
import Coolicon from '@/assets/coolicon.svg';
import NextButton from '@/components/common/NextButton/NextButton';

const {
  s_container,
  s_inputContainer,
  s_commonInput,
  s_errorInput,
  s_title,
  s_errorMsg,
  s_errorIcon,
} = style;

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  setNextPage: () => void;
}

function Nickname({ nickname, setNickname, setNextPage }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!nickname);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const checkNicknameValidation = (value: string) => {
    const nicknameRegex = /^[가-힣\s|ㄱ-ㅎ|a-z|A-Z|0-9|_|.|,]+$/g;
    const nicknameLengthRegex = /^.{2,8}$/g;

    if (!nicknameRegex.test(value)) {
      setErrorMessage('한글, 영어, 숫자, 특수문자(_.,)만 가능해요');
      setIsDisabled(true);
    } else if (!nicknameLengthRegex.test(value)) {
      setErrorMessage('2 ~ 8글자만 가능해요');
      setIsDisabled(true);
    } else {
      setErrorMessage('');
      setIsDisabled(false);
    }
  };

  // onChange
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    setNickname(value);
    checkNicknameValidation(value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>당신을 뭐라고 불러드릴까요?</h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: errorMessage,
          })}
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={handleChangeNickname}
        />
        {errorMessage && <Coolicon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{errorMessage}</span>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Nickname;
