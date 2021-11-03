import React from 'react';
import { RecommendCarousel } from '@/components';
import RightArrow from '@/assets/svg/right-arrow.svg';
import style from './recommendSection.module.scss';
import { Exercise } from '@/types/exercise';

interface Props {
  recommendExerciseList: Exercise[];
}

const {
  s_recommendSection,
  s_deem,
  s_split_number,
  s_carouselSection,
  s_routineMessage,
  s_exerciseStart,
  s_otherExercise,
  s_rightArrow,
} = style;

const RecommendSection = ({ recommendExerciseList }: Props) => {
  return (
    <section className={s_deem}>
      <div className={s_recommendSection}>
        <section className={s_carouselSection}>
          <div className={s_routineMessage}>
            <strong className={s_split_number}>3분할</strong>
            <span>
              오늘은 <em>등, 삼두</em> 하는 날 😄
            </span>
            <span className="s_whiteSpace">이런 기구 어떠세요?</span>
          </div>
          <button type="button" className={s_exerciseStart}>
            운동시작 GO!
          </button>
          <RecommendCarousel recommendList={recommendExerciseList} />
        </section>
        <button type="button" className={s_otherExercise}>
          <span>다른 운동 선택</span>
          <RightArrow className={s_rightArrow} />
        </button>
      </div>
    </section>
  );
};

export default RecommendSection;
