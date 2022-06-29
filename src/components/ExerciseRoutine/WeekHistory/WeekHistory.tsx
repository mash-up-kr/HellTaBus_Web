import React from 'react';
import { CalendarDay } from '@/components';
import style from './weekHistory.module.scss';

interface Props {
  currentWeekHistory: Array<{
    date: number;
    didExercised: boolean;
  }>;
}

const { s_calendar } = style;

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const WeekHistory = ({ currentWeekHistory }: Props) => {
  return (
    <ol className={s_calendar}>
      {currentWeekHistory.map(({ date, didExercised }, day) => (
        <CalendarDay
          date={date}
          day={DAYS[day]}
          didExercised={didExercised}
          key={`calendarDay-${day}`}
        />
      ))}
    </ol>
  );
};

export default WeekHistory;
