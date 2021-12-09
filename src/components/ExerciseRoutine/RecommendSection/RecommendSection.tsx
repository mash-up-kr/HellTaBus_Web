import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ProgressiveImage from 'react-progressive-image';
import { RecommendCarousel } from '@/components';
import style from './recommendSection.module.scss';
import { Exercise, ExercisePartList, SplitType } from '@/types';
import RightArrow from '@/assets/svg/right-arrow.svg';
import dumbbell from '@/assets/images/dumbbell.png';
import gripper from '@/assets/images/gripper.png';
import skippingRope from '@/assets/images/skipping-rope.png';
import { EXERCISE_ACTIVITY, EXERCISE_CHOICE_PAGE, EXERCISE_PART, SPLIT_TYPE } from '@/consts';
import { startActivity } from '@/utils/mobile/action';
import { BASE64_URI } from '@/assets/images/base64';

interface Props {
  suggestionExerciseList: Exercise[];
  suggestionPartList: ExercisePartList;
  splitType: SplitType;
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

const RecommendSection = ({ suggestionExerciseList, suggestionPartList, splitType }: Props) => {
  const todayPartList = suggestionPartList.map((part, index) =>
    part ? `${EXERCISE_PART[part]}${index !== suggestionPartList.length - 1 ? ', ' : ''}` : ''
  );

  const handleOpenExerciseActivity: React.MouseEventHandler<HTMLButtonElement> = () => {
    const option = {
      target: EXERCISE_ACTIVITY,
      exerciseList: JSON.stringify(suggestionExerciseList),
    };
    startActivity(option, (resCodes: string, resMsg: string, resData: JSON) => {
      console.log(resCodes + resMsg + JSON.stringify(resData));
    });
  };

  return (
    <section className={classNames(s_deem)}>
      <div className={classNames(s_backImages)} aria-hidden>
        <ProgressiveImage src={skippingRope} placeholder={BASE64_URI.SKIPPING_ROPE}>
          {(src: string) => <img src={src} alt="" className={classNames(s_skippingRope)} />}
        </ProgressiveImage>
        <ProgressiveImage src={gripper} placeholder={BASE64_URI.GRIPPER}>
          {(src: string) => <img src={src} alt="" className={classNames(s_gripper)} />}
        </ProgressiveImage>
        <ProgressiveImage src={dumbbell} placeholder={BASE64_URI.DUMBBELL}>
          {(src: string) => <img src={src} alt="" className={classNames(s_dumbbell)} />}
        </ProgressiveImage>
      </div>
      <div className={classNames(s_recommendSection)}>
        <div className={classNames(s_routineMessage)}>
          <strong className={classNames(s_split_number)}>{SPLIT_TYPE[splitType]}</strong>
          <em>
            {SPLIT_TYPE[splitType] === SPLIT_TYPE.FULL_BODY_WORKOUT
              ? '오늘도 전신운동 하는 날 😄'
              : `오늘은 ${todayPartList.join('')} 하는 날 😄`}
          </em>
          <span className={classNames('s_whiteSpace')}>이런 운동 어떠세요?</span>
        </div>
        <button
          type="button"
          className={classNames(s_exerciseStart)}
          onClick={handleOpenExerciseActivity}
        >
          운동시작 GO!
        </button>
        <RecommendCarousel
          className={classNames(s_recommendCarousel)}
          recommendList={suggestionExerciseList}
        />
        <div className={classNames(s_otherExercise)}>
          <Link to={EXERCISE_CHOICE_PAGE}>
            다른 운동 선택
            <RightArrow className={classNames(s_rightArrow)} width="8" height="12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendSection;
