import React, { useState } from 'react';
import classNames from 'classnames';
import style from './gender.module.scss';
import { CustomInput, CustomLabel } from '@/components/common';

const {
  s_container,
  s_title,
  s_genderButton,
  s_selectedGender,
  s_nextButton,
  s_highlight,
  s_buttonWrapper,
} = style;

interface Props {
  nickname: string;
  gender: string;
  setGender: (value: string) => void;
  handleSetNextPage: () => void;
}

function Gender({ nickname, gender, setGender, handleSetNextPage }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!gender);

  const handleClickGenderButton = (userGender: string) => () => {
    setGender(userGender);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        <span className={classNames('s_whiteSpace')}>{nickname}님의</span>
        <span className={classNames(s_highlight)}>성별</span>은 무엇인가요?
      </h2>

      <div className={classNames(s_buttonWrapper)}>
        <CustomLabel
          htmlFor="male"
          className={classNames(s_genderButton, { [s_selectedGender]: gender === 'male' })}
        >
          남성
        </CustomLabel>
        <CustomInput
          type="radio"
          id="male"
          value="male"
          onClick={handleClickGenderButton('male')}
          className={classNames('s_a11yHidden')}
        />
        <CustomLabel
          htmlFor="female"
          className={classNames(s_genderButton, { [s_selectedGender]: gender === 'female' })}
        >
          여성
        </CustomLabel>
        <CustomInput
          type="radio"
          id="female"
          value="female"
          onClick={handleClickGenderButton('female')}
          className={classNames('s_a11yHidden')}
        />
      </div>
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
}

export default Gender;
