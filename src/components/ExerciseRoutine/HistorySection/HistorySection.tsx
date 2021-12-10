import React, { useEffect, useMemo, useState } from 'react';
import style from './historySection.module.scss';
import { WeekHistory } from '@/components';
import { ExerciseLog } from '@/types';

interface Props {
  exerciseHistory: ExerciseLog[];
  nickname: string;
  isLoadingExerciseHistory: boolean;
}

const { s_historySection, s_calendarSection } = style;

const LAST_DAY_OF_WEEK = 6;

const HistorySection = ({ exerciseHistory, nickname, isLoadingExerciseHistory }: Props) => {
  const [historyMessage, setHistoryMessage] = useState<string>();

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDate = today.getDate();
  const currentDay = today.getDay();
  const currentWeek = Math.ceil((currentDate + (LAST_DAY_OF_WEEK - currentDay)) / 7);

  const currentWeekHistory = useMemo(
    () =>
      new Array(7).fill(0).map((_, dayOfWeek) => {
        const diffDate = currentDay - dayOfWeek;
        const dateOfWeek = currentDate - diffDate;
        const dateInstance = new Date(currentYear, currentMonth - 1, dateOfWeek);
        return {
          date: dateInstance.getDate(),
          didExercised: exerciseHistory.some(({ startTime }) => {
            const startDate = new Date(startTime);
            return startDate.toDateString() === dateInstance.toDateString();
          }),
        };
      }),
    [currentDate, currentDay, currentMonth, currentYear, exerciseHistory]
  );

  const currentWeekExerciseCount = new Set(
    exerciseHistory.map((exerciseLog) => new Date(exerciseLog.startTime).getDate())
  ).size;

  useEffect(() => {
    const historyMessages = [
      '이번 주도 운동을 시작해볼까요? 😊',
      '시작이 반! 멋져요💪',
      '벌써 2일이나 운동했어요! 👏',
      '아주 잘하고 있어요 👍',
      '오늘도 득근! 수고했어요! 👊',
      `꾸준한 ${nickname}님 너무 멋져요! 🤗`,
      `열심히 운동하는 ${nickname}님 최고! 🥰`,
      `${nickname}님은 운동왕!🎖`,
    ];

    setHistoryMessage(historyMessages[currentWeekExerciseCount]);
  }, [currentWeekExerciseCount, nickname]);

  return (
    <section className={s_historySection}>
      <div className={s_calendarSection}>
        <em>
          {!isLoadingExerciseHistory && (
            <>
              <strong>
                {currentMonth}월 {currentWeek}주차
              </strong>{' '}
              {historyMessage}
            </>
          )}
        </em>
        <WeekHistory currentWeekHistory={currentWeekHistory} />
      </div>
    </section>
  );
};

export default HistorySection;
