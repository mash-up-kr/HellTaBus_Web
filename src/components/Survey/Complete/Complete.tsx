import React from 'react';
import classNames from 'classnames';
import style from './complete.module.scss';
import SurveyComplete from '@/assets/complete.svg';

const { s_container, s_imgContainer } = style;

const Complete = () => {
  return (
    <section className={classNames(s_container)}>
      <div className={classNames(s_imgContainer)}>
        <SurveyComplete />
      </div>
      <h2>운동하러 가볼까요?</h2>
      <button type="button">렛츠고!👉</button>
    </section>
  );
};

export default Complete;
