import React from 'react';
import classNames from 'classnames';
import { Header, SplitType } from '@/components';
import { useSurveyForm } from '@/hooks';
import style from './splitTypeChange.module.scss';

const SURVEY_STATE_KEY = {
  SPLIT_TYPE: 'splitType',
  AUDIO_COACH: 'audioCoach',
  SPEED: 'speed',
  EXPLANATION: 'explanation',
};

const { s_componentContainer } = style;

const SplitTypeChange = () => {
  const { surveyState, setSurveyStateByKey } = useSurveyForm();

  const handleCloseCurrentPage = () => {
    // TODO: 안드로이드랑 협의 후 삭제 예정
  };

  return (
    <>
      <Header handleClickBackButton={handleCloseCurrentPage} />
      <form>
        <div className={classNames(s_componentContainer)}>
          <h1 className={classNames('s_a11yHidden')}>분할타입 변경</h1>
          <SplitType
            splitType={surveyState.splitType}
            setSplitType={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT_TYPE)}
            handleClickCustomEvent={handleCloseCurrentPage}
            buttonType="save"
            hasProgressBar={false}
          />
        </div>
      </form>
    </>
  );
};

export default SplitTypeChange;
