import React, { ReactChild } from 'react';
import classNames from 'classnames';
import Back from '@/assets/svg/back.svg';
import style from './header.module.scss';

const { s_header, s_previousButton } = style;

interface Props {
  handleClickBackButton: () => void;
  className?: string;
  children?: ReactChild;
}

const Header = ({ handleClickBackButton, className, children }: Props) => {
  return (
    <header className={classNames(s_header, className)}>
      <button
        type="button"
        className={classNames(s_previousButton)}
        onClick={handleClickBackButton}
      >
        <Back />
      </button>
      <span>{children}</span>
    </header>
  );
};

export default Header;
