import React, { useMemo } from 'react';
import style from './historySection.module.scss';
import { WeekHistory } from '@/components';
import { ExerciseLog } from '@/types';

interface Props {
  exerciseHistory: ExerciseLog[];
}

const { s_historySection, s_calendarSection } = style;

const HistorySection = ({ exerciseHistory }: Props) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDate();
  const currentDay = today.getDay();
  const currentWeek = Math.ceil((currentDate + (6 - currentDay - 1)) / 7);

  const currentWeekHistory = useMemo(
    () =>
      new Array(7).fill(0).map((_, dayOfWeek) => {
        const diffDate = currentDay - dayOfWeek;
        const dateOfWeek = currentDate - diffDate;
        const date = new Date(currentYear, currentMonth, dateOfWeek).getDate();
        return {
          date,
          didExercise: exerciseHistory.some(
            ({ startTime }) => new Date(startTime).getDate() === date
          ),
        };
      }),
    [currentDate, currentDay, currentMonth, currentYear, exerciseHistory]
  );

  return (
    <section className={s_historySection}>
      <div className={s_calendarSection}>
        <em>
          <strong>
            {currentMonth}월 {currentWeek}주차
          </strong>{' '}
          벌써 {exerciseHistory.length}번 운동! 아주 잘하고 있어요 👍
        </em>
        <WeekHistory currentWeekHistory={currentWeekHistory} />
      </div>
    </section>
  );
};

export default HistorySection;
