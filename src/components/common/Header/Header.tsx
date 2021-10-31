import React from 'react';
import styles from './header.module.scss';

const { s_header, s_previousButton } = styles;

interface Props {
  handleClickBackButton: () => void;
}

function Header({ handleClickBackButton }: Props) {
  return (
    <header className={s_header}>
      <button type="button" className={s_previousButton} onClick={handleClickBackButton}>
        뒤로 가기
      </button>
    </header>
  );
}

export default Header;
