import React, { useState } from 'react';
import classNames from 'classnames';
import style from './split.module.scss';
import SplitWorking from '@/components/Survey/SplitWorking/SplitWorking';
import Pizza0 from '@/assets/svg/pizza0.svg';
import Pizza3 from '@/assets/svg/pizza3.svg';
import Pizza5 from '@/assets/svg/pizza5.svg';

const { s_container, s_imagesContainer, s_title, s_nextButton } = style;

interface Props {
  split: number;
  setSplit: (value: number) => void;
  setNextPage: () => void;
}

function Split({ split, setSplit, setNextPage }: Props) {
  const [isDisabled, setIsDisabled] = useState<boolean>(!split);

  const handleClickSplit = (splitNumber: number) => {
    setSplit(splitNumber);
    setIsDisabled(false);
  };

  return (
    <section className={classNames(s_container)}>
      <h2 className={classNames(s_title)}>몇 분할로 운동을 원하시나요?</h2>
      <div className={classNames(s_imagesContainer)}>
        <SplitWorking
          selectedSplit={split}
          currentSplit={1}
          imageComponent={<Pizza0 />}
          title="무분할"
          handleClickSplit={handleClickSplit}
        >
          가슴, 어깨, 팔, 등, 하체를 하루에 운동하는 방법으로 초보자에게 추천합니다.
        </SplitWorking>
        <SplitWorking
          selectedSplit={split}
          currentSplit={3}
          imageComponent={<Pizza3 />}
          title="3분할"
          handleClickSplit={handleClickSplit}
        >
          가슴, 이두 / 등, 삼두/ 하체, 어깨로 3개 부위로 나눠서 운동하는 방법입니다.
        </SplitWorking>
        <SplitWorking
          selectedSplit={split}
          currentSplit={5}
          imageComponent={<Pizza5 />}
          title="5분할"
          handleClickSplit={handleClickSplit}
        >
          가슴 / 등/ 삼두 / 하체 / 어깨로 5개 부위로 나눠서 운동하는 방법입니다.
        </SplitWorking>
      </div>
      <button
        className={classNames(s_nextButton)}
        type="button"
        onClick={setNextPage}
        disabled={isDisabled}
      >
        다음
      </button>
    </section>
  );
}

export default Split;
