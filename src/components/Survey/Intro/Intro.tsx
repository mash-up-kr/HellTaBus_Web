import React from 'react';
import Lottie from 'react-lottie';
import classNames from 'classnames';
import style from './intro.module.scss';
import Hand from '@/assets/lottie/hand-habimetro.json';
import { CommonButton } from '@/components/common';

interface Props {
  handleClickButton: () => void;
}

const { s_a11yHidden, s_container, s_lottieContainer, s_title, s_addendum } = style;

const Intro = ({ handleClickButton }: Props) => {
  const lottieOptions = {
    animationData: Hand,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className={classNames(s_container)}>
      <h1 className={classNames(s_a11yHidden)}>설문조사 시작</h1>
      <div className={classNames(s_lottieContainer)}>
        <Lottie options={lottieOptions} isClickToPauseDisabled={false} width={144} height={144} />
      </div>
      <div className={classNames(s_title)}>
        <span>딱! 맞는 추천 서비스</span>를 위해 몇 가지만 물어볼게요.
        <p>잠시만 시간을 내주시겠어요?</p>
        <span className={classNames(s_addendum)}>3분이면 충분해요!</span>
      </div>
      <CommonButton handleClickButton={handleClickButton}>시작</CommonButton>
    </section>
  );
};

export default Intro;
