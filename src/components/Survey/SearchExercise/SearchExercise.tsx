import React from 'react';
import Lottie from 'react-lottie';
import classNames from 'classnames';
import style from './searchExercise.module.scss';
import search from '@/assets/lottie/search.json';

const { s_container, s_lottieContainer, s_content, s_highlight } = style;

interface Props {
  nickname: string;
}

const SearchExercise = ({ nickname }: Props) => {
  const lottieOptions = {
    animationData: search,
  };

  return (
    <section className={classNames(s_container)}>
      <div className={classNames(s_lottieContainer)}>
        <Lottie options={lottieOptions} width={172} height={172} />
      </div>
      <div className={classNames(s_content)}>
        <span className={classNames('s_whiteSpace')}>정보를 바탕으로 {nickname}님에게</span>
        <span className={classNames(s_highlight)}>딱 맞는 운동</span>을 찾고 있어요!
      </div>
    </section>
  );
};

export default SearchExercise;
