import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './gender.module.scss';
import NextButton from '@/components/common/NextButton/NextButton';

const { s_container, s_title, s_genderButton, s_selectedGender } = styles;

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
        {nickname}님의 <span>성별</span>은 무엇인가요?
      </h2>
      <div>
        <button
          type="button"
          className={classNames(s_genderButton, { [s_selectedGender]: gender === 'male' })}
          onClick={handleClickGenderButton('male')}
        >
          남성
        </button>
        <button
          type="button"
          className={classNames(s_genderButton, { [s_selectedGender]: gender === 'female' })}
          onClick={handleClickGenderButton('female')}
        >
          여성
        </button>
      </div>
      <NextButton handleClickNextButton={setNextPage} isDisabled={isDisabled} />
    </section>
  );
}

export default Gender;
