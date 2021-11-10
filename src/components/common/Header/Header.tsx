import React from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import Back from '@/assets/svg/back.svg';

const { s_header, s_previousButton } = styles;

interface Props {
  handleClickBackButton: () => void;
}

function Header({ handleClickBackButton }: Props) {
  return (
    <header className={classNames(s_header)}>
      <button
        type="button"
        className={classNames(s_previousButton)}
        onClick={handleClickBackButton}
      >
        <Back />
      </button>
    </header>
  );
}

export default Header;
