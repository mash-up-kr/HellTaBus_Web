import React from 'react';
import classNames from 'classnames';
import style from './header.module.scss';
import Back from '@/assets/back.svg';

const { s_header, s_previousButton } = style;

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
