import React from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';
import style from './loading.module.scss';
import loadingAnimation from '@/assets/lottie/loading-animation.json';

const { s_loadingBackground, s_loadingIndicator } = style;

const Loading = () => {
  const lottieOptions = {
    animationData: loadingAnimation,
  };
  return (
    <div className={classNames(s_loadingBackground)}>
      <div className={classNames(s_loadingIndicator)}>
        <Lottie options={lottieOptions} width={50} height={50} />
      </div>
    </div>
  );
};

export default Loading;
