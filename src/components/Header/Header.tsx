import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classNames from 'classnames';
import styles from './Hedaer.module.scss';

const { s_header, s_previous__button } = styles;

interface Props {
  currentPage: number;
  setPageCount: (page: number) => void;
}

const Header = ({ currentPage, setPageCount }: Props) => (
  <header className={classNames(s_header)}>
    <button
      type="button"
      className={classNames(s_previous__button)}
      onClick={() => setPageCount(currentPage - 1)}
    >
      <ArrowBackIcon />
    </button>
  </header>
);

export default Header;
