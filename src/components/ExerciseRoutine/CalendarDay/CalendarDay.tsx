import React from 'react';
import classNames from 'classnames';
import style from './calendarDay.module.scss';

interface Props {
  day: string;
  date: number;
  didExercise: boolean;
}

const { s_calendarDay, s_day, s_date, s_today, s_didExercise } = style;

const CalendarDay = ({ day, date, didExercise }: Props) => {
  const isToday = new Date().getDate() === date;
  return (
    <li
      className={classNames(s_calendarDay, {
        [s_didExercise]: didExercise,
        [s_today]: isToday,
      })}
    >
      <span className={s_day}>{day}</span>
      <span className={s_date}>{date}</span>
    </li>
  );
};

export default CalendarDay;
