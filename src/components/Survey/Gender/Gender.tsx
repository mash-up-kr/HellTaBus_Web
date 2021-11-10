import React, { useState } from 'react';
import classNames from 'classnames';
import style from './gender.module.scss';
import NextButton from '@/components/common/NextButton/NextButton';

const { s_a11yHidden, s_container, s_title, s_genderButton, s_selectedGender } = style;

interface Props {
  nickname: string;
  gender: string;
  setGender: (value: string) => void;
  setNextPage: () => void;
}

function Gender({ nickname, gender, setGender, setNextPage }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!gender);

  const handleClickGenderButton = (userGender: string) => () => {
    setGender(userGender);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>
        <p>{nickname}님의</p> <span>성별</span>은 무엇인가요?
      </h2>
      <div>
        <label htmlFor="male">
          <input type="radio" value="male" id="male" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_genderButton, { [s_selectedGender]: gender === 'male' })}
            onClick={handleClickGenderButton('male')}
            aria-hidden="true"
          >
            남성
          </button>
        </label>
        <label htmlFor="female">
          <input type="radio" value="male" id="female" className={classNames(s_a11yHidden)} />
          <button
            type="button"
            className={classNames(s_genderButton, { [s_selectedGender]: gender === 'female' })}
            onClick={handleClickGenderButton('female')}
            aria-hidden="true"
          >
            여성
          </button>
        </label>
      </div>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Gender;
