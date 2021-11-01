import React, { useEffect, useMemo, useState } from 'react';
import { CalendarDay } from '@/components';
import style from './weekHistory.module.scss';

const { s_calendar } = style;

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const WeekHistory = () => {
  const [lastDate, setLastDate] = useState(0);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();
  const currentDay = today.getDay();
  const currentMonth = today.getMonth();
  const weekStartDate = currentDate - currentDay;

  useEffect(() => {
    switch (currentMonth) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11:
        setLastDate(31);
        break;
      case 3:
      case 5:
      case 8:
      case 10:
        setLastDate(30);
        break;
      case 1:
        setLastDate(new Date(currentYear, currentMonth + 1, 0).getDate());
        break;
      default:
    }
  }, [currentMonth, currentYear]);

  const currentWeek = useMemo(
    () =>
      new Array(7).fill(0).map((_, index) => {
        return weekStartDate + index > lastDate
          ? weekStartDate + index - lastDate
          : weekStartDate + index;
      }),
    [weekStartDate, lastDate]
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
