import React from 'react';
import style from './historySection.module.scss';
import { WeekHistory } from '@/components';

const { s_historySection, s_calendarSection } = style;

const HistorySection = () => {
  return (
    <section className={s_historySection}>
      <div className={s_calendarSection}>
        <em>
          <strong>10월 3주차</strong> 벌써 n번 운동! 아주 잘하고 있어요 👍
        </em>
        <WeekHistory />
      </div>
    </section>
  );
};

export default HistorySection;
