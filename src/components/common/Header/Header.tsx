import React from 'react';
import classNames from 'classnames';
import Back from '@/assets/svg/back.svg';
import style from './header.module.scss';

const { s_header, s_previousButton, s_title } = style;

interface Props {
  handleClickBackButton: () => void;
  className?: string;
  title?: string;
}

const Header = ({ handleClickBackButton, className, title }: Props) => {
  return (
    <header className={classNames(s_header, className)}>
      <button
        type="button"
        className={classNames(s_previousButton)}
        onClick={handleClickBackButton}
      >
        <Back />
      </button>
      <span className={classNames(s_title)}>{title}</span>
    </header>
  );
};

export default Header;
