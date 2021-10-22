import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { EXERCISE_CHOICE_PAGE, EXERCISE_ROUTINE_PAGE, SURVEY_PAGE } from '@/consts/route';
import style from './home.module.scss';

const { s_navigator } = style;

function Home() {
  return (
    <nav className={classNames(s_navigator)}>
      <ul>
        <li>
          <Link to={SURVEY_PAGE}>Survey</Link>
        </li>
        <li>
          <Link to={EXERCISE_CHOICE_PAGE}>Exercise Choice</Link>
        </li>
        <li>
          <Link to={EXERCISE_ROUTINE_PAGE}>Exercise Routine</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Home;
