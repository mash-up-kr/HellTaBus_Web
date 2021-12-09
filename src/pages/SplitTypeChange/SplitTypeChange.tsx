import React from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { Header, Loading, SplitType } from '@/components';
import { useSplitTypeChange, useSurveyForm } from '@/hooks';
import style from './splitTypeChange.module.scss';

const SURVEY_STATE_KEY = {
  SPLIT_TYPE: 'splitType',
  AUDIO_COACH: 'audioCoach',
  SPEED: 'speed',
  EXPLANATION: 'explanation',
};

const { s_componentContainer } = style;

const SplitTypeChange = () => {
  const history = useHistory();

  const { surveyState, setSurveyStateByKey } = useSurveyForm();
  const { patchUserInfo, isPatchUserInfoLoading } = useSplitTypeChange();

  const handleCloseCurrentPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    history.goBack();
  };

  const handlePatchuserInfo: React.MouseEventHandler<HTMLButtonElement> = () => {
    patchUserInfo(surveyState.splitType);
  };

  return (
    <>
      {isPatchUserInfoLoading && <Loading />}
      <Header handleClickBackButton={handleCloseCurrentPage} />
      <form>
        <div className={classNames(s_componentContainer)}>
          <h1 className={classNames('s_a11yHidden')}>분할타입 변경</h1>
          <SplitType
            splitType={surveyState.splitType}
            setSplitType={setSurveyStateByKey(SURVEY_STATE_KEY.SPLIT_TYPE)}
            handleClickCustomEvent={handlePatchuserInfo}
            buttonType="save"
            hasProgressBar={false}
          />
        </div>
      </form>
    </>
  );
};

export default SplitTypeChange;
