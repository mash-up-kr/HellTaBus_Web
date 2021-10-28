import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classNames from 'classnames';
import styles from './Header.module.scss';

const { s_header, s_previous__button } = styles;

interface Props {
  handleClickBackButton: () => void;
}

const Header = ({ handleClickBackButton }: Props) => (
  <header className={classNames(s_header)}>
    <button
      type="button"
      className={classNames(s_previous__button)}
      onClick={handleClickBackButton}
    >
      <ArrowBackIcon />
    </button>
  </header>
);

export default Header;
