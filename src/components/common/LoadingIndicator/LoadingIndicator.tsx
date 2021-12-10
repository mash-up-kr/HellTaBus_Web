import React from 'react';
import classNames from 'classnames';
import style from './loadingIndicator.module.scss';

const { s_loadingBackground, s_lodingIndicator } = style;

const LoadingIndicator = () => {
  return (
    <div className={classNames(s_loadingBackground)}>
      <div className={classNames(s_lodingIndicator)}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default LoadingIndicator;
