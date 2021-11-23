import React from 'react';
import classNames from 'classnames';
import style from './calendarDay.module.scss';

interface Props {
  day: string;
  date: number;
  didExercised: boolean;
}

const { s_calendarDay, s_day, s_date, s_today, s_didExercised } = style;

const CalendarDay = ({ day, date, didExercised }: Props) => {
  const isToday = new Date().getDate() === date;
  return (
    <li
      className={classNames(s_calendarDay, {
        [s_didExercised]: didExercised,
        [s_today]: isToday,
      })}
    >
      <span className={s_day}>{day}</span>
      <span className={s_date}>{date}</span>
    </li>
  );
};

export default CalendarDay;
