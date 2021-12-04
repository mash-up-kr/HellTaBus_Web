import React from 'react';
import Lottie from 'react-lottie';
import classNames from 'classnames';
import style from './intro.module.scss';
import welcome from '@/assets/lottie/hand-habimetro.json';
import { CustomButton } from '@/components/common';

interface Props {
  buttonType: 'button' | 'submit';
  handleClickStartButton: () => void;
}

const { s_container, s_lottieContainer, s_title, s_addendum, s_highlight } = style;

const Intro = ({ handleClickStartButton, buttonType }: Props) => {
  const lottieOptions = {
    animationData: welcome,
  };

  return (
    <section className={classNames(s_container)}>
      <h1 className={classNames('s_a11yHidden')}>설문조사 시작</h1>
      <div className={classNames(s_lottieContainer)}>
        <Lottie options={lottieOptions} width={144} height={144} />
      </div>
      <div className={classNames(s_title)}>
        <span className={classNames('s_whiteSpace')}>
          <span className={classNames(s_highlight)}>딱! 맞는 추천 서비스</span>를 위해
        </span>
        <span className={classNames('s_whiteSpace')}>몇 가지만 물어볼게요.</span>
        <span>잠시만 시간을 내주시겠어요?</span>
        <span className={classNames(s_addendum)}>3분이면 충분해요!</span>
      </div>
      <CustomButton CustomButtonType={buttonType} handleClickCustomEvent={handleClickStartButton}>
        다음
      </CustomButton>
    </section>
  );
};

export default Intro;
