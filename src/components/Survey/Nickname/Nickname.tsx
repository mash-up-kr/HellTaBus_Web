import React, { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import style from './nickname.module.scss';
import ErrorIcon from '@/assets/svg/error-icon.svg';
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

const Nickname = ({ nickname, setNickname, setNextPage }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const isDisabled = useMemo(() => !nickname || !!errorMessage, [nickname, errorMessage]);

  const isValidNickname = useCallback(() => {
    const specialCharactersRegex = /[`~!@#$%^&*()|+\-=?;:'"<>\\{\\}\\[\]\\\\/]/g;
    const nicknameRegex = /^[가-힣\s|ㄱ-ㅎ|a-z|A-Z|0-9|_|.|,]+$/g;
    const nicknameLengthRegex = /^.{2,8}$/g;

    if (specialCharactersRegex.test(nickname)) {
      return '특수문자는 . , _ 만 가능해요';
    }

    if (!nicknameRegex.test(nickname)) {
      return '한글, 영어, 숫자, 특수문자(_.,)만 가능해요';
    }

    if (!nicknameLengthRegex.test(nickname)) {
      return '2 ~ 8글자만 가능해요';
    }

    return null;
  }, [nickname]);

  useEffect(() => {
    const nickNameError = isValidNickname();

    if (nickNameError) {
      setErrorMessage(nickNameError);
    } else {
      setErrorMessage('');
    }
  }, [isValidNickname]);

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;
    setNickname(value);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        <p>당신을</p> 뭐라고 불러드릴까요?
      </h2>
      <div className={classNames(s_inputContainer)}>
        <input
          className={classNames(s_commonInput, {
            [s_errorInput]: nickname !== '' && errorMessage,
          })}
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={handleChangeNickname}
        />
        {nickname !== '' && errorMessage && <ErrorIcon className={classNames(s_errorIcon)} />}
      </div>
      <span className={classNames(s_errorMsg)}>{nickname !== '' && errorMessage}</span>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
};

export default Nickname;
