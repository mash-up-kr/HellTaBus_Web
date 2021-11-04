import React, { useMemo } from 'react';
import { CalendarDay } from '@/components';
import style from './weekHistory.module.scss';

const { s_calendar } = style;

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const WeekHistory = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentDay = today.getDay();

  const currentWeek = useMemo(
    () =>
      new Array(7).fill(0).map((_, dayOfWeek) => {
        const diffDate = currentDay - dayOfWeek;
        const dateOfWeek = currentDate - diffDate;
        return new Date(currentYear, currentMonth, dateOfWeek).getDate();
      }),

    [currentDate, currentDay, currentMonth, currentYear]
  );

  return (
    <ol className={s_calendar}>
      {currentWeek.map((date, day) => (
        <CalendarDay date={date} day={DAYS[day]} didExercise key={`calendarDay-${day}`} />
      ))}
    </ol>
  );
};

export default WeekHistory;
