import React from 'react';
import { RecommendCarousel } from '@/components';
import style from './recommendSection.module.scss';
import { Exercise } from '@/types';
import RightArrow from '@/assets/svg/right-arrow.svg';
import dumbbell from '@/assets/images/dumbbell.png';
import gripper from '@/assets/images/gripper.png';
import skippingRope from '@/assets/images/skipping-rope.png';

interface Props {
  recommendExerciseList: Exercise[];
}

const {
  s_recommendSection,
  s_deem,
  s_backImages,
  s_dumbbell,
  s_gripper,
  s_skippingRope,
  s_split_number,
  s_routineMessage,
  s_exerciseStart,
  s_recommendCarousel,
  s_otherExercise,
  s_rightArrow,
} = style;

const RecommendSection = ({ recommendExerciseList }: Props) => {
  return (
    <section className={s_deem}>
      <div className={s_backImages} aria-hidden>
        <img src={dumbbell} alt="" className={s_dumbbell} />
        <img src={gripper} alt="" className={s_gripper} />
        <img src={skippingRope} alt="" className={s_skippingRope} />
      </div>
      <div className={s_recommendSection}>
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
        <RecommendCarousel className={s_recommendCarousel} recommendList={recommendExerciseList} />
        <div className={s_otherExercise}>
          <button type="button">
            <span>다른 운동 선택</span>
            <RightArrow className={s_rightArrow} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendSection;
