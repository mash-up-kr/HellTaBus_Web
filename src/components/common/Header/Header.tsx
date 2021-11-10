import React from 'react';
import classNames from 'classnames';
import style from './header.module.scss';
import Back from '@/assets/back.svg';

const { s_header, s_previousButton } = style;

interface Props {
  handleClickBackButton: () => void;
  className?: string;
  children?: string;
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
