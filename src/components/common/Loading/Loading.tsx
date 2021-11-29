import React from 'react';
import classNames from 'classnames';
import style from './loading.module.scss';
import loadingIndicator from '@/assets/images/loading-indicator.gif';

const { s_loadingBackground, s_loadingIndicator } = style;

const Loading = () => {
  return (
    <div className={classNames(s_loadingBackground)}>
      <img
        src={loadingIndicator}
        alt="loading indicator"
        className={classNames(s_loadingIndicator)}
      />
    </div>
  );
};

export default Loading;
