import React from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import Back from '@/assets/back.svg';

const { s_header, s_previousButton, s_title } = styles;

interface Props {
  handleClickBackButton: () => void;
  title?: string;
}

function Header({ handleClickBackButton, title }: Props) {
  return (
    <header className={classNames(s_header)}>
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
}

export default Header;
