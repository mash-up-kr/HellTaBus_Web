import React from 'react';
import classNames from 'classnames';
import style from './errorPage.module.scss';
import requestError from '@/assets/images/request-error.png';

interface Props {
  handleReload: React.MouseEventHandler<HTMLButtonElement>;
}

const { s_errorPage, s_errorIcon, s_errorTitle, s_errorMessage, s_reloadButton } = style;

const ErrorPage = ({ handleReload }: Props) => {
  return (
    <div className={classNames(s_errorPage)}>
      <img src={requestError} alt="" className={classNames(s_errorIcon)} />
      <div>
        <em className={classNames(s_errorTitle)}>
          <span>오류</span>가 발생했어요
        </em>
      </div>
      <div className={classNames(s_errorMessage)}>
        <span>예상치 못한 오류가 발생했어요.</span>
        <span className={classNames('s_whiteSpace')}>
          일시적인 현상이나 네트워크 문제일 수 있으니,
        </span>
        다시 시도해주세요
      </div>
      <button type="button" className={classNames(s_reloadButton)} onClick={handleReload}>
        새로고침
      </button>
    </div>
  );
};

export default ErrorPage;
