import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import ErrorIcon from '@/assets/svg/error-icon.svg';
import style from './nickname.module.scss';
import { CustomInput, CustomLabel } from '@/components/common';

const {
  s_container,
  s_inputContainer,
  s_commonInput,
  s_errorInput,
  s_title,
  s_errorMsg,
  s_errorIcon,
  s_nextButton,
} = style;

interface Props {
  nickname: string;
  setNickname: (nickname: string) => void;
  handleSetNextPage: () => void;
}

const Nickname = ({ nickname, setNickname, handleSetNextPage }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isDisabled = useMemo(() => !nickname || !!errorMessage, [nickname, errorMessage]);

  useEffect(() => {
    const isValidNickname = (userNickname: string) => {
      const nicknameSpaceRegex = /\s/g;
      const specialCharactersRegex = /[`~!@#$%^&*()|+\-=?;:'"<>\\{\\}\\[\]\\\\/]/g;
      const nicknameRegex = /^[가-힣\s|ㄱ-ㅎ|a-z|A-Z|0-9|_|.|,]+$/g;
      const nicknameLengthRegex = /^.{2,8}$/g;

      if (nicknameSpaceRegex.test(userNickname)) {
        return '공백을 제거해 주세요.';
      }
      if (specialCharactersRegex.test(nickname)) {
        return '특수문자는 . , _ 만 가능해요';
      }

      if (!nicknameRegex.test(userNickname)) {
        return '한글, 영어, 숫자, 특수문자(_.,)만 가능해요';
      }
      if (!nicknameLengthRegex.test(userNickname)) {
        return '2 ~ 8글자만 가능해요';
      }

      return null;
    };

    const nickNameError = isValidNickname(nickname);

    if (nickNameError) {
      setErrorMessage(nickNameError);
    } else {
      setErrorMessage('');
    }
  }, [nickname]);

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    setNickname(value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames('s_a11yHidden')}>닉네임 입력</h2>
      <p className={classNames(s_title)}>
        <span className={classNames('s_whiteSpace')}>당신을</span>뭐라고 불러드릴까요?
      </p>
      <div className={classNames(s_inputContainer)}>
        <CustomLabel htmlFor="nickname" className={classNames('s_a11yHidden')}>
          닉네임
        </CustomLabel>
        <CustomInput
          id="nickname"
          type="text"
          value={nickname}
          onChange={handleChangeNickname}
          placeholder="닉네임 입력"
          className={classNames(s_commonInput, {
            [s_errorInput]: nickname !== '' && errorMessage,
          })}
        />

        {nickname !== '' && errorMessage && <ErrorIcon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{nickname !== '' && errorMessage}</span>
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

export default Nickname;
