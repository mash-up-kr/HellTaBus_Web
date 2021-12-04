import React from 'react';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { Header, SplitType } from '@/components';
import { useSurveyForm } from '@/hooks';
import style from './setting.module.scss';

const SURVEY_STATE_KEY = {
  SPLIT_TYPE: 'splitType',
  AUDIO_COACH: 'audioCoach',
  SPEED: 'speed',
  EXPLANATION: 'explanation',
};

const { s_componentContainer } = style;

const Setting = () => {
  const { surveyState, setSurveyStateByKey } = useSurveyForm();

  const handleCloseCurrentPage = () => {
    window.close();
  };

  return (
    <>
      <Header handleClickBackButton={handleCloseCurrentPage} />
      <form>
        <div className={classNames(s_componentContainer)}>
          <h1 className={classNames('s_a11yHidden')}>분할타입 변경</h1>
          <Route path="/setting/split-type">
            <SplitType
              splitType={surveyState.splitType}
              setSplitType={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT_TYPE)}
              handleSetNextPage={handleCloseCurrentPage}
              buttonType="submit"
              hasProgressBar={false}
            />
          </Route>
        </div>
      </form>
    </>
  );
};

export default Setting;
